import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


export interface ArtElement {
  nombre: string;
  descripcion: string;
  categoria: string;
  cantidad: string;
  precio: string;
}
@Component({
  selector: 'app-lista-articulos2',
  templateUrl: './lista-articulos2.component.html',
  styleUrls: ['./lista-articulos2.component.scss']
})
export class ListaArticulos2Component implements OnInit {

  displayedColumns: string[] = ['nombre', 'descripcion', 'categoria', 'precio', 'cantidad'];
  
  elementData: ArtElement[] = [];
  dataSource: any;
  constructor(private auth: AuthService, private route: Router){}
  @ViewChild(MatTable) table: MatTable<ArtElement> | any;
  ngOnInit(): void {
    if(!this.auth.isUser()){
      if(this.auth.isAdmin()){
        this.route.navigate(['lista-articulos']);
      }else {
        this.route.navigate(['login']);
      }
    }
    this.auth.articulos().subscribe( data => {
      if(data.status === 1){
        for(var i = 0; i<data.articulos.length; i++){
          if(data.articulos[i].Tipo === 'C'){
            this.elementData.push(
              {nombre: data.articulos[i].Nombre, descripcion:data.articulos[i].Descripcion, categoria:data.articulos[i].Categoria, cantidad: data.articulos[i].Cantidad + " unidades", precio:data.articulos[i].Preciounidad + " c/u"}
            )
          } else {
            this.elementData.push(
              {nombre: data.articulos[i].Nombre, descripcion:data.articulos[i].Descripcion, categoria:data.articulos[i].Categoria, cantidad: data.articulos[i].Cantidad + " libras", precio:data.articulos[i].Preciounidad + " c/lb"}
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
}
