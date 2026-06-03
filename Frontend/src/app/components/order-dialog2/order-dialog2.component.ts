import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GenerarOrden2Component } from '../generar-orden2/generar-orden2.component';


export interface OrderElement {
  id: number;
  nombre: string;
  tipo: string;
  cantidad: number;
  categoria: string;
  preciototal: number;
  cantidadnueva: number;
  tip: string;
}

@Component({
  selector: 'app-order-dialog2',
  templateUrl: './order-dialog2.component.html',
  styleUrls: ['./order-dialog2.component.scss']
})
export class OrderDialog2Component implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GenerarOrden2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthService,
    private route: Router
  ){}

  dataSource: OrderElement[] = [];
  PrecioTotal: number = 0;
  idOrden: number = -1;
  ngOnInit(): void {
    if(!this.auth.isUser()){
      if(this.auth.isAdmin()){
        this.route.navigate(['lista-articulos']);
      }else {
        this.route.navigate(['login']);
      }
    }
    for(var i = 0; i < this.data.length; i++){
      let params = {
        Idarticulo: this.data[i].idarticulo,
        Cantidad: this.data[i].cantidad
      }
      this.auth.inforArt(params).subscribe( dat => {
        if(dat.status === 1){
          if(dat.info[0].Tipo === 'C'){
            this.dataSource.push({id: params.Idarticulo, nombre: dat.info[0].Nombre, tipo: "unidades", categoria:dat.info[0].Categoria, cantidad: params.Cantidad, preciototal: (params.Cantidad * dat.info[0].Preciounidad), cantidadnueva: (dat.info[0].Cantidad - params.Cantidad), tip: dat.info[0].Tipo});
            this.PrecioTotal += params.Cantidad * dat.info[0].Preciounidad;
          } else {
            this.dataSource.push({id: params.Idarticulo, nombre: dat.info[0].Nombre, categoria:dat.info[0].Categoria, tipo: "onzas", cantidad: params.Cantidad, preciototal: (params.Cantidad * dat.info[0].Preciounidad),  cantidadnueva: (dat.info[0].Cantidad - params.Cantidad), tip: dat.info[0].Tipo});
            this.PrecioTotal += params.Cantidad * dat.info[0].Preciounidad;
          }
        }
      });
    }
    this.auth.idorden().subscribe(data =>{
      if(data.status === 1){
        this.idOrden = data.ids[0].Idordenes + 1;
      }
    })
  }

  confirmar(){
    let date: Date = new Date();
    let fecha: string = date.getFullYear() + "-" + date.toLocaleDateString("en-US").split('/')[0] + "-" + date.getDate();
    let params1 = {
      hola: "hola"
    }
    this.auth.nuevaOrden(params1).subscribe(data => {
      if(data.status === 1){
        
      }
    });
    for(var i = 0; i < this.dataSource.length; i++){
      let params2 = {
        Idordenes: this.idOrden,
        Idarticulo: this.dataSource[i].id,
        Nombre: this.dataSource[i].nombre,
        Cantidad: this.dataSource[i].cantidad,
        Fecha: fecha,
        Categoria: this.dataSource[i].categoria,
        Precio: this.dataSource[i].preciototal,
        Tipo: this.dataSource[i].tip
      };
      this.auth.registro(params2).subscribe(data => {
        if(data.status === 1){

        }
      });
    }
    for(var j = 0; j < this.dataSource.length; j++){
      let params3 = {
        Idarticulo: this.dataSource[j].id,
        Cantidad: this.dataSource[j].cantidadnueva
      }
      this.auth.cantidadNueva(params3).subscribe(data => {
        if(data.status === 1){

        }
      });
    }
    this.dialogRef.close();
  }
}
