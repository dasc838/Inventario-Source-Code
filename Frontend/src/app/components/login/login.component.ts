import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private route: Router){}

  ngOnInit(): void {
    
  }

  formGroupUser = new FormGroup({
    Nombre: new FormControl(''),
    Contrasenia: new FormControl(''),
  });

  login(){
    let params = this.formGroupUser.value;
    this.auth.login(params).subscribe(data => {
      if(data.info.length === 1){
        this.auth.guardarPermiso(data.info[0].Permiso);
        if(data.info[0].Permiso === "admin"){
          this.route.navigate(['lista-articulos']);
        } else if(data.info[0].Permiso === "user"){
          this.route.navigate(['lista-articulos2']);
        } else {
          alert("Login invalido");
          window.location.reload();
        }
      }else{
        alert("Login invalido");
        window.location.reload();
      }
    });
  }
}
