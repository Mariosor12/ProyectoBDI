import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InicioComponent} from './inicio/inicio.component';
import { EventoComponent } from './evento/evento.component';
import { FormEventoComponent} from './form-evento/form-evento.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { CarritoComponent} from './carrito/carrito.component';
import { PagoComponent } from './pago/pago.component';
import { RolComponent } from './rol/rol.component';
import { RolDataTableComponent } from './rol-data-table/rol-data-table.component';
import { PrivilegioDataTableComponent } from './privilegio-data-table/privilegio-data-table.component';

const routes: Routes = [
{
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
},
{
  path:'',
  component: InicioComponent
},
{
  path: 'evento',
  component: EventoComponent
},
{
  path: 'evento/add',
  component: FormEventoComponent
},
{
  path: 'evento/edit/:id/:fecha_inicio/:fecha_fin/:nombre/:entradas_disponibles/:entradas_vendidas/:lugar',
  component: FormEventoComponent
},
{
  path: 'registro',
  component: RegistroComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'producto',
  component: ProductoComponent
},
{
  path: 'producto/add',
  component: FormProductoComponent
},
{
  path: 'producto/edit/:id/:nombre/:descripcion/:precio_unitario/:fk_ale/:fk_lager',
  component: FormProductoComponent
},
{
  path: 'carrito',
  component: CarritoComponent
},
{
  path: 'pago',
  component: PagoComponent
},
{
  path: 'rol/add',
  component: RolComponent
},
{
  path: 'rol/edit/:id',
  component: RolComponent
},
{
  path: 'roles/list',
  component: RolDataTableComponent
},
{
  path: 'privilegios/list',
  component: PrivilegioDataTableComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
