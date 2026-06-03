import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar2',
  templateUrl: './toolbar2.component.html',
  styleUrls: ['./toolbar2.component.scss']
})
export class Toolbar2Component implements OnInit {
  constructor(private route: Router, private auth: AuthService){}
  ngOnInit(): void {
    if(!this.auth.isUser()){
      if(this.auth.isAdmin()){
        this.route.navigate(['lista-articulos']);
      }else {
        this.route.navigate(['login']);
      }
    }
  }

  list(){
    this.route.navigate(['lista-articulos2']);
  }

  ord(){
    this.route.navigate(['generar-orden2']);
  }

  salir(){
    this.auth.logout();
    this.route.navigate(['login']);
  }
}
