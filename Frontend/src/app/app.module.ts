import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IngresarArticuloComponent } from './components/ingresar-articulo/ingresar-articulo.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { GenerarOrdenComponent } from './components/generar-orden/generar-orden.component';
import { OrderDialogComponent } from './components/order-dialog/order-dialog.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { ReporteDialogComponent } from './components/reporte-dialog/reporte-dialog.component';
import { SumarArtDialogComponent } from './components/sumar-art-dialog/sumar-art-dialog.component';
import { ArticuloDialogComponent } from './components/articulo-dialog/articulo-dialog.component';
import { Toolbar2Component } from './components/toolbar2/toolbar2.component';
import { ListaArticulos2Component } from './components/lista-articulos2/lista-articulos2.component';
import { GenerarOrden2Component } from './components/generar-orden2/generar-orden2.component';
import { OrderDialog2Component } from './components/order-dialog2/order-dialog2.component';
import { LoginComponent } from './components/login/login.component';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    IngresarArticuloComponent,
    ListaArticulosComponent,
    ToolbarComponent,
    GenerarOrdenComponent,
    OrderDialogComponent,
    ReporteComponent,
    ReporteDialogComponent,
    SumarArtDialogComponent,
    ArticuloDialogComponent,
    Toolbar2Component,
    ListaArticulos2Component,
    GenerarOrden2Component,
    OrderDialog2Component,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule, 
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    RouterModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
