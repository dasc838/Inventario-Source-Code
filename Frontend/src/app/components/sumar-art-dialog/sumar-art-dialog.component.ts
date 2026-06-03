import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ListaArticulosComponent } from '../lista-articulos/lista-articulos.component';

@Component({
  selector: 'app-sumar-art-dialog',
  templateUrl: './sumar-art-dialog.component.html',
  styleUrls: ['./sumar-art-dialog.component.scss']
})
export class SumarArtDialogComponent implements OnInit {
  value: number = 0;
  constructor(public dialogRef: MatDialogRef<ListaArticulosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthService,
    private route: Router
    ){}

  ngOnInit(): void {
    if(!this.auth.isAdmin()){
      if(this.auth.isUser()){
        this.route.navigate(['lista-articulos2']);
      }else {
        this.route.navigate(['login']);
      }
    }
  }
  
  addCant(){
    let params={
      Idarticulo: this.data
    };
    this.auth.inforArt(params).subscribe(dat => {
      if(dat.status === 1){
        let params2 = {
          Idarticulo: params.Idarticulo,
          Cantidad: dat.info[0].Cantidad + this.value
        };
        this.auth.cantidadNueva(params2).subscribe(dat2 => {
          if(dat2.status === 1){
            this.dialogRef.close();
          }
        });
      }
    });
  }
}
