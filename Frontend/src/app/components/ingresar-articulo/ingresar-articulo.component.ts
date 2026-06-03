import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ArticuloDialogComponent } from '../articulo-dialog/articulo-dialog.component';

@Component({
  selector: 'app-ingresar-articulo',
  templateUrl: './ingresar-articulo.component.html',
  styleUrls: ['./ingresar-articulo.component.scss']
})
export class IngresarArticuloComponent implements OnInit {
  constructor(private auth:AuthService, public dialog: MatDialog, private route: Router){ }
  categorias: any;
  ngOnInit(): void {
    if(!this.auth.isAdmin()){
      if(this.auth.isUser()){
        this.route.navigate(['lista-articulos2']);
      }else {
        this.route.navigate(['login']);
      }
    }
    this.auth.categoriasCreate().subscribe(data => {
      if(data.status === 1){
        this.categorias = data.categorias;
      }
    })
  }
  formGroupArt = new FormGroup({
    Nombre: new FormControl(''),
    Cantidad: new FormControl(''),
    Descripcion: new FormControl(''),
    Tipo: new FormControl(''),
    Preciounidad: new FormControl(''),
    Categoria: new FormControl(''),
  });

  newArt(){
    let params = this.formGroupArt.value;
    this.auth.ingresoArt(params).subscribe( data => {
      if(data.status === 1){
        const dialogRef = this.dialog.open(ArticuloDialogComponent, {
        });
    
        dialogRef.afterClosed().subscribe(result => {
          window.location.reload();
        });
      }
      else console.log("F");
    });
  }
}
