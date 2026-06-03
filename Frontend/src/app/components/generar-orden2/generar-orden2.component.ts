import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrderDialog2Component } from '../order-dialog2/order-dialog2.component';


export interface ArtElement {
  idarticulo: number;
  nombre: string;
  descripcion: string;
  cantidad: number;
  cantidadsel: number;
}

export interface OrderElement {
  idarticulo: number;
  cantidad: number;
}

@Component({
  selector: 'app-generar-orden2',
  templateUrl: './generar-orden2.component.html',
  styleUrls: ['./generar-orden2.component.scss']
})
export class GenerarOrden2Component implements OnInit {
  displayedColumns: string[] = ['idarticulo', 'nombre', 'descripcion', 'quitar', 'cantidad', 'agregar', 'cantidadsel'];
  elementData: ArtElement[] = [];
  orderSource: OrderElement[] = [];
  dataSource: any;
  constructor(private auth:AuthService, public dialog: MatDialog, private route: Router){}
  @ViewChild(MatTable) table: MatTable<ArtElement> | any;
  ngOnInit(): void {
    if(!this.auth.isUser()){
      if(this.auth.isAdmin()){
        this.route.navigate(['lista-articulos']);
      }else {
        this.route.navigate(['login']);
      }
    }
    this.auth.articulos2().subscribe( data => {
      if(data.status === 1){
        for(var i = 0; i<data.articulos.length; i++){
          this.elementData.push(
            {idarticulo: data.articulos[i].Idarticulo ,nombre: data.articulos[i].Nombre, descripcion:data.articulos[i].Descripcion, cantidad: data.articulos[i].Cantidad, cantidadsel: 0}
          )
        }
        this.dataSource = new MatTableDataSource(this.elementData);
        this.table.renderRows();
      }
      else console.log("F");
    });
  }

  agregarEnable(cantidad:number){
    if(cantidad>0){
      return false;
    }
    return true;
  }

  quitarEnable(cantidadsel:number){
    if(cantidadsel> 0){
      return false;
    }
    return true;
  }

  agregar(element:any){
    var index = this.elementData.indexOf(element);
    this.elementData[index] = {idarticulo: this.elementData[index].idarticulo, nombre: this.elementData[index].nombre, descripcion:this.elementData[index].descripcion, cantidad: (this.elementData[index].cantidad - 1), cantidadsel: (this.elementData[index].cantidadsel + 1)};
    this.dataSource = new MatTableDataSource(this.elementData);
    this.table.renderRows();
    var prueba = -1;
    for(var i = 0; i<this.orderSource.length; i++){
      if(this.orderSource[i].idarticulo === element.idarticulo){
        prueba = i;
      }
    }
    if(prueba === -1){
      this.orderSource.push({idarticulo: element.idarticulo, cantidad: 1});
    } else {
      this.orderSource[prueba] = {idarticulo: this.orderSource[prueba].idarticulo, cantidad: (this.orderSource[prueba].cantidad + 1)};
    }
  }

  quitar(element:any){
    var index = this.elementData.indexOf(element);
    this.elementData[index] = {idarticulo: this.elementData[index].idarticulo, nombre: this.elementData[index].nombre, descripcion:this.elementData[index].descripcion, cantidad: (this.elementData[index].cantidad + 1), cantidadsel: (this.elementData[index].cantidadsel - 1)};
    this.dataSource = new MatTableDataSource(this.elementData);
    this.table.renderRows();
    for(var i = 0; i<this.orderSource.length; i++){
      if(this.orderSource[i].idarticulo === element.idarticulo){
        this.orderSource[i] = {idarticulo: this.orderSource[i].idarticulo, cantidad: (this.orderSource[i].cantidad - 1)};
        if(this.orderSource[i].cantidad === 0){
          this.orderSource.splice(i, 1);
        }
      }
    }
  }

  order(){
    const dialogRef = this.dialog.open(OrderDialog2Component, {
      data: this.orderSource,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Orden guardada');
      window.location.reload();
    });
  }

  disableOrder(){
    if(this.orderSource.length === 0){
      return true;
    }else{
      return false;
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
