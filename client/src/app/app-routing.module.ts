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
import { EmpleadoDataTableComponent} from './usuario-data-table/empleado-data-table.component';
import { FacturasComponent} from './facturas/facturas.component';
import { FacturaPendienteComponent} from './factura-pendiente/factura-pendiente.component';
import { FacturaProcesadaComponent} from './factura-procesada/factura-procesada.component';
import { FacturaCompraComponent} from './factura-compra/factura-compra.component';
import { AliadosDataTableComponent } from './aliados-data-table/aliados-data-table.component';
import { ProductoCompraComponent} from './producto-compra/producto-compra.component';


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
},
{
  path: 'usuario/list',
  component: EmpleadoDataTableComponent
},
{
  path: 'usuarios/add',
  component: RegistroComponent
},
{
  path: 'usuarios/edit/:id/:nombre/:rol',
  component: RegistroComponent
},
{
  path:'facturas',
  component: FacturasComponent
},
{
  path: 'facturas/pendiente',
  component: FacturaPendienteComponent
},
{
  path: 'facturas/procesada',
  component: FacturaProcesadaComponent
},
{
  path: 'factura/compra',
  component: FacturaCompraComponent
},
{
  path: 'aliados/list',
  component:AliadosDataTableComponent
},
{
  path: 'producto/compra',
  component: ProductoCompraComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
