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
import { EvaluacionesComponent} from './evaluaciones/evaluaciones.component';
import { EvaluacionDataTableComponent} from './evaluacion-data-table/evaluacion-data-table.component';
import { EvaluacionFormComponent } from './evaluacion-form/evaluacion-form.component';
import { CondicionpagoComponent} from './condicionpago/condicionpago.component';
import { ProveedorEvaluacionComponent} from './proveedor-evaluacion/proveedor-evaluacion.component';
import { CondicionContratoComponent} from './condicion-contrato/condicion-contrato.component';
import { RenovacionComponent} from './renovacion/renovacion.component';
import { RenovacionFormComponent} from './renovacion-form/renovacion-form.component';
import { RecomendadorComponent} from './recomendador/recomendador.component';
import { PedidoComponent} from './pedido/pedido.component';
import { PedidoOpcionesComponent} from './pedido-opciones/pedido-opciones.component';
import { PedidosPendientesComponent} from './pedidos-pendientes/pedidos-pendientes.component';
import { PedidosAceptadosComponent} from './pedidos-aceptados/pedidos-aceptados.component';
import { PedidoCantidadComponent} from './pedido-cantidad/pedido-cantidad.component';

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
  path: 'evento/edit/:id/:razon/:pagina/:tel',
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
  path: 'pago/:clave/:cantidad/:total/:costo/:recargo/:totalm/:cuotas/:mes/:productor/:cond/:pago/:proveedor',
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
  path: 'contrato/add/:productor',
  component: FormContratoComponent
},
{
  path: 'contrato/edit/:id/:fechai/:descripcion/:motivo/:exclusivo/:proveedor/:productor',
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
},
{
  path: 'evaluaciones',
  component: EvaluacionesComponent
},
{
  path: 'evaluacion',
  component: EvaluacionDataTableComponent
},
{
  path:'evaluacion/add/:productor',
  component: EvaluacionFormComponent
},
{
  path: 'condicionpago',
  component: CondicionpagoComponent
},
{
path:  'condicionpago/:proveedor',
component: CondicionpagoComponent
},
{
  path: 'evaluacionproveedor',
  component: ProveedorEvaluacionComponent
},
{
  path:'condicioncontrato/:id/:proveedor/:productor',
  component: CondicionContratoComponent
},
{
  path: 'renovacion',
  component: RenovacionComponent
},
{
  path: 'renovacion/form/:id/:clave/:clavep/:clavepr/:exclusivo',
  component: RenovacionFormComponent
},
{
  path: 'recomendador',
  component: RecomendadorComponent
},
{
  path: 'pedido/:proveedor/:productor/:id/:pago/:ingrediente/:materia',
  component: PedidoComponent
},
{
  path: 'pedidosopciones/:productor/:cond/:pago/:proveedor',
  component: PedidoOpcionesComponent
},
{
  path: 'pedidosaceptados/:productor/:cond/:pago/:proveedor',
  component: PedidosAceptadosComponent
},
{
  path: 'pedidospendiente/:productor/:cond/:pago/:proveedor',
  component: PedidosPendientesComponent
},
{
  path: 'pedidoscantidad/:id/:ingrediente/:proveedor/:productor',
  component: PedidoCantidadComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
