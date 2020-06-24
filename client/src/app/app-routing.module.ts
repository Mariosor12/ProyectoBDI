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
import { EmpleadoDataTableComponent} from './usuario-data-table/empleado-data-table.component';
import { FacturasComponent} from './facturas/facturas.component';
import { FacturaPendienteComponent} from './factura-pendiente/factura-pendiente.component';
import { FacturaProcesadaComponent} from './factura-procesada/factura-procesada.component';
import { FacturaCompraComponent} from './factura-compra/factura-compra.component';
import { AliadosDataTableComponent } from './aliados-data-table/aliados-data-table.component';
import { ProductoCompraComponent} from './producto-compra/producto-compra.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrudComponent } from './crud/crud.component';
import { ClienteDataTableComponent} from './cliente-data-table/cliente-data-table.component';
import { ClienteRegistroComponent } from './cliente-registro/cliente-registro.component';
import { ContratoComponent} from './contrato/contrato.component';
import { FormContratoComponent} from './form-contrato/form-contrato.component';
import { CatalogoComponent} from './catalogo/catalogo.component';
import { CatalogoDataTableComponent} from './catalogo-data-table/catalogo-data-table.component';
import { CatalogoAddComponent } from './catalogo-add/catalogo-add.component';



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
  path: 'evento/edit/:id/:razon/:pagina/:tel/:activo/:membresia/:lugar',
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
  path: 'producto/edit/:id/:nombre/:descripcion/:fecha/:genero/:nombref/:nombretp/:nombrepe',
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
  path: 'usuario/list',
  component: EmpleadoDataTableComponent
},
{
  path: 'usuarios/add',
  component: RegistroComponent
},
{
  path: 'usuarios/edit/:id/:nombre',
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
},
{
path: 'reportes',
component: ReportesComponent
},
{
  path: 'clientes/list',
  component: ClienteDataTableComponent
},
{
  path: 'cliente/add',
  component: ClienteRegistroComponent
},
{
  path: 'clientes/edit/:id',
  component: ClienteRegistroComponent
},
{
  path: 'crud',
  component: CrudComponent
},
{
  path: 'contratos',
  component: ContratoComponent
},
{
  path: 'contrato/add',
  component: FormContratoComponent
},
{
  path: 'contrato/edit/:id/:fechai/:descripcion/:proveedor/:productor',
  component: FormContratoComponent
},
{
  path: 'catalogo/:proveedor/:productor/:id',
  component: CatalogoComponent
},
{
  path: 'catalogo/list',
  component: CatalogoDataTableComponent
},
{
  path: 'catalogo/add/:proveedor/:productor/:id',
  component: CatalogoAddComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
