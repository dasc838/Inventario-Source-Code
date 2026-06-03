import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloDialogComponent } from './components/articulo-dialog/articulo-dialog.component';
import { GenerarOrdenComponent } from './components/generar-orden/generar-orden.component';
import { GenerarOrden2Component } from './components/generar-orden2/generar-orden2.component';
import { IngresarArticuloComponent } from './components/ingresar-articulo/ingresar-articulo.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { ListaArticulos2Component } from './components/lista-articulos2/lista-articulos2.component';
import { LoginComponent } from './components/login/login.component';
import { OrderDialogComponent } from './components/order-dialog/order-dialog.component';
import { OrderDialog2Component } from './components/order-dialog2/order-dialog2.component';
import { ReporteDialogComponent } from './components/reporte-dialog/reporte-dialog.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { SumarArtDialogComponent } from './components/sumar-art-dialog/sumar-art-dialog.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Toolbar2Component } from './components/toolbar2/toolbar2.component';

const routes: Routes = [
  {path: 'ingreso-articulo', component:IngresarArticuloComponent},
  {path: 'lista-articulos', component:ListaArticulosComponent},
  {path: 'generar-orden', component:GenerarOrdenComponent},
  {path: 'toolbar', component:ToolbarComponent},
  {path: 'order-dialog', component:OrderDialogComponent},
  {path: 'reporte', component:ReporteComponent},
  {path: 'reporte-dialog', component:ReporteDialogComponent},
  {path: 'sumar-art-dialog', component:SumarArtDialogComponent},
  {path: 'toolbar2', component:Toolbar2Component},
  {path: 'lista-articulos2', component:ListaArticulos2Component},
  {path: 'articulo-dialog', component:ArticuloDialogComponent},
  {path: 'generar-orden2', component:GenerarOrden2Component},
  {path: 'order-dialog2', component:OrderDialog2Component},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
