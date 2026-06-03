import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit,Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ReporteComponent } from '../reporte/reporte.component';

export interface RepElement {
  categoria: string | any;
  preciototal: number | any;
  isExpanded: boolean | any;
  articulo:  ArtElement[] | any;
}

export interface ArtElement {
  id: number;
  nombre: string;
  cantidad: number;
  precioind: number;
  tipo: string;
  dimension: string;
}

@Component({
  selector: 'app-reporte-dialog',
  templateUrl: './reporte-dialog.component.html',
  styleUrls: ['./reporte-dialog.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ReporteDialogComponent implements OnInit{
  isTableExpanded = false;
  displayedColumns: string[] = ['categoria', 'preciototal', 'actions'];
  dataElement: RepElement[] = [];
  dataSource: any;
  @ViewChild(MatTable) table: MatTable<ArtElement> | any;
  constructor(public dialogRef: MatDialogRef<ReporteComponent>,
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
    let params = this.data;
    this.auth.categorias(params).subscribe(dat => {
      if(dat.status === 1){
        for(var i = 0; i<dat.info.length; i++){
          let params2 = {
            Fecha: params.Fecha,
            Categoria: dat.info[i].Categoria,
            numero: i
          };
          
          this.auth.reporte(params2).subscribe(dat2 =>{
            var total: number = 0;
            this.dataElement.push({categoria:params2.Categoria, preciototal: 0, isExpanded:false, articulo:[]});
            for(var j = 0; j<dat2.info.length; j++){
              var existe: boolean = false;
              var pos: number = -1;
              for(var k = 0; k<this.dataElement[params2.numero].articulo.length; k++){
                if(this.dataElement[params2.numero].articulo[k].id === dat2.info[j].Idarticulo){
                  existe = true;
                  pos = k;
                }
              }
              if(existe){
                this.dataElement[params2.numero].articulo[pos] = {id: this.dataElement[params2.numero].articulo[pos].id, nombre:this.dataElement[params2.numero].articulo[pos].nombre, precioind: (this.dataElement[params2.numero].articulo[pos].precioind + dat2.info[j].Precio), cantidad:(this.dataElement[params2.numero].articulo[pos].cantidad + dat2.info[j].Cantidad), tipo: this.dataElement[params2.numero].articulo[pos].tipo, dimension: this.dataElement[params2.numero].articulo[pos].dimension}
                total += dat2.info[j].Precio;
              } else{
                if(dat2.info[j].Tipo === 'C'){
                  this.dataElement[params2.numero].articulo.push({id:dat2.info[j].Idarticulo, nombre:dat2.info[j].Nombre, precioind:dat2.info[j].Precio, cantidad:dat2.info[j].Cantidad, tipo: "Cantidad", dimension: "unidades"});
                  total += dat2.info[j].Precio;
                } else {
                  this.dataElement[params2.numero].articulo.push({id:dat2.info[j].Idarticulo, nombre:dat2.info[j].Nombre, precioind:dat2.info[j].Precio, cantidad:dat2.info[j].Cantidad, tipo: "Peso", dimension: "libras"});
                  total += dat2.info[j].Precio;
                }
                
              }
              this.dataElement[params2.numero].preciototal = total;
            }
            this.dataSource = new MatTableDataSource(this.dataElement);
            this.table.renderRows();
          });
        }
      }
    });
    
  }

  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataSource.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    })
  }
}
