import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SumarArtDialogComponent } from '../sumar-art-dialog/sumar-art-dialog.component';

export interface ArtElement {
  id:number;
  nombre: string;
  descripcion: string;
  categoria: string;
  cantidad: string;
  precio: string;
  costo: number
}

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.scss']
})
export class ListaArticulosComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'categoria', 'precio', 'cantidad', 'costo', 'agregar'];
  
  elementData: ArtElement[] = [];
  dataSource: any;
  constructor(private auth: AuthService, public dialog: MatDialog, private route: Router){}
  @ViewChild(MatTable) table: MatTable<ArtElement> | any;
  ngOnInit():void{
    if(!this.auth.isAdmin()){
      if(this.auth.isUser()){
        this.route.navigate(['lista-articulos2']);
      }else {
        this.route.navigate(['login']);
      }
    }
    this.auth.articulos().subscribe( data => {
      if(data.status === 1){
        for(var i = 0; i<data.articulos.length; i++){
          if(data.articulos[i].Tipo === 'C'){
            this.elementData.push(
              {id:data.articulos[i].Idarticulo, nombre: data.articulos[i].Nombre, descripcion:data.articulos[i].Descripcion, categoria:data.articulos[i].Categoria, cantidad: data.articulos[i].Cantidad + " unidades", precio:data.articulos[i].Preciounidad + " c/u", costo: (data.articulos[i].Cantidad * data.articulos[i].Preciounidad)}
            )
          } else {
            this.elementData.push(
              {id:data.articulos[i].Idarticulo, nombre: data.articulos[i].Nombre, descripcion:data.articulos[i].Descripcion, categoria:data.articulos[i].Categoria, cantidad: data.articulos[i].Cantidad + " libras", precio:data.articulos[i].Preciounidad + " c/lb", costo: (data.articulos[i].Cantidad * data.articulos[i].Preciounidad)}
            )
          }
          
        }
        this.dataSource = new MatTableDataSource(this.elementData);
        this.table.renderRows();
      }
      else console.log("F");
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerCostoTotal(){
    let precio: number = 0;
    for(var i = 0; i < this.elementData.length; i++){
      precio += this.elementData[i].costo;
    }
    return precio;
  }

  agregar(element:any){
    const dialogRef = this.dialog.open(SumarArtDialogComponent, {
      data: element.id,
      height: '150px',
      width: '225px'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Orden guardada');
      window.location.reload();
    })
  }
}
