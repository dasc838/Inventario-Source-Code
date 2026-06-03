import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ReporteDialogComponent } from '../reporte-dialog/reporte-dialog.component';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit{
  formGroupFecha = new FormGroup({
    Fecha: new FormControl(Date),
  });
  constructor(private auth: AuthService, public dialog: MatDialog, private route: Router){}
  startDate = new Date();
  ngOnInit(): void {
    if(!this.auth.isAdmin()){
      if(this.auth.isUser()){
        this.route.navigate(['lista-articulos2']);
      }else {
        this.route.navigate(['login']);
      }
    }
  }

  solicitarReporte(){
    const dialogRef = this.dialog.open(ReporteDialogComponent, {
      data: this.formGroupFecha.value,
      autoFocus: false,
      maxHeight: '90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Reporte visto');
      window.location.reload();
    });
  }
}
