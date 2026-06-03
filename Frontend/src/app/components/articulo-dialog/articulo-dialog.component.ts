import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-articulo-dialog',
  templateUrl: './articulo-dialog.component.html',
  styleUrls: ['./articulo-dialog.component.scss']
})
export class ArticuloDialogComponent implements OnInit {
  constructor(private auth: AuthService, private route: Router){}

  ngOnInit(): void {
    if(!this.auth.isAdmin()){
      if(this.auth.isUser()){
        this.route.navigate(['lista-articulos2']);
      }else {
        this.route.navigate(['login']);
      }
    }
  }
}
