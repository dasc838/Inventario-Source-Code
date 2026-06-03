import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private route: Router, private auth: AuthService){ }

  ngOnInit(){
    if(!this.auth.isAdmin()){
      if(this.auth.isUser()){
        this.route.navigate(['lista-articulos2']);
      }else {
        this.route.navigate(['login']);
      }
    }
  }

  list(){
    this.route.navigate(['lista-articulos']);
  }

  add(){
    this.route.navigate(['ingreso-articulo']);
  }

  ord(){
    this.route.navigate(['generar-orden']);
  }

  rep(){
    this.route.navigate(['reporte']);
  }

  salir(){
    this.auth.logout();
    this.route.navigate(['login']);
  }
}
