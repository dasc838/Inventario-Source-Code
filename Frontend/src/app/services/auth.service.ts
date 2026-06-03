import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const httphead = {
  headers: new HttpHeaders({'content-type': 'application/json' })
} 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router, private http:HttpClient) { }

  ingresoArt(articulo: any):Observable<any>{
    let url = "https://us-central1-inventario-backend-nodejs.cloudfunctions.net/app/articulo_nuevo";
    return this.http.post(url, articulo, httphead);
  }

  inforArt(info: any):Observable<any>{
    let url = "https://us-central1-inventario-backend-nodejs.cloudfunctions.net/app/info_art";
    return this.http.post(url, info, httphead);
  }

  nuevaOrden(orden: any):Observable<any>{
    let url = "https://us-central1-inventario-backend-nodejs.cloudfunctions.net/app/orden_nueva";
    return this.http.post(url, orden, httphead);
  }

  cantidadNueva(art: any):Observable<any>{
    let url = "https://us-central1-inventario-backend-nodejs.cloudfunctions.net/app/nueva_cantidad";
    return this.http.post(url, art, httphead);
  }

  registro(artord: any):Observable<any>{
    let url = "https://us-central1-inventario-backend-nodejs.cloudfunctions.net/app/artxord_nuevo";
    return this.http.post(url, artord, httphead);
  }

  reporte(fecha: any):Observable<any>{
    let url = "https://us-central1-inventario-backend-nodejs.cloudfunctions.net/app/reporte";
    return this.http.post(url, fecha, httphead);
  }

  categorias(fecha: any):Observable<any>{
    let url = "https://us-central1-inventario-backend-nodejs.cloudfunctions.net/app/categorias";
    return this.http.post(url, fecha, httphead);
  }

  login(user: any):Observable<any>{
    let url = "https://us-central1-inventario-backend-nodejs.cloudfunctions.net/app/login";
    return this.http.post(url, user, httphead);
  }

  articulos():Observable<any>{
    let url = "https://us-central1-inventario-backend-nodejs.cloudfunctions.net/app/articulos";
    return this.http.get(url, httphead);
  }

  articulos2():Observable<any>{
    let url = "https://us-central1-inventario-backend-nodejs.cloudfunctions.net/app/articulos2";
    return this.http.get(url, httphead);
  }

  idorden():Observable<any>{
    let url = "https://us-central1-inventario-backend-nodejs.cloudfunctions.net/app/idordenes";
    return this.http.get(url, httphead);
  }

  categoriasCreate():Observable<any>{
    let url = "https://us-central1-inventario-backend-nodejs.cloudfunctions.net/app/categorias";
    return this.http.get(url, httphead);
  }

  guardarPermiso(permiso: any) {
    localStorage.setItem("Permiso", permiso);
  }
  logout() {
    localStorage.removeItem("Permiso");
  }

  isAdmin() {
    let isad = localStorage.getItem("Permiso") === "admin";
    return isad;
  }

  isUser() {
    let isus = localStorage.getItem("Permiso") === "user";
    return isus;
  }
}
