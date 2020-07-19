import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{ FormsModule} from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EventoComponent } from './evento/evento.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { InicioComponent } from './inicio/inicio.component';

import { EventoService } from './services/evento.service';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PagoComponent } from './pago/pago.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoDataTableComponent } from './usuario-data-table/empleado-data-table.component';
import { FacturasComponent } from './facturas/facturas.component';
import { FacturaProcesadaComponent } from './factura-procesada/factura-procesada.component';
import { FacturaPendienteComponent } from './factura-pendiente/factura-pendiente.component';
import { FacturaCompraComponent } from './factura-compra/factura-compra.component'
import { CommonService } from './services/common.service';
import { AliadosDataTableComponent } from './aliados-data-table/aliados-data-table.component';
import { ProductoCompraComponent } from './producto-compra/producto-compra.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrudComponent } from './crud/crud.component';
import { ClienteDataTableComponent } from './cliente-data-table/cliente-data-table.component';
import { ClienteRegistroComponent } from './cliente-registro/cliente-registro.component';
import { ContratoComponent } from './contrato/contrato.component';
import { FormContratoComponent } from './form-contrato/form-contrato.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogoDataTableComponent } from './catalogo-data-table/catalogo-data-table.component';
import { CatalogoAddComponent } from './catalogo-add/catalogo-add.component';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { EvaluacionDataTableComponent } from './evaluacion-data-table/evaluacion-data-table.component';
import { EvaluacionFormComponent } from './evaluacion-form/evaluacion-form.component';
import { CondicionpagoComponent } from './condicionpago/condicionpago.component';
import { ProveedorEvaluacionComponent } from './proveedor-evaluacion/proveedor-evaluacion.component';
import { CondicionContratoComponent } from './condicion-contrato/condicion-contrato.component';
import { RenovacionComponent } from './renovacion/renovacion.component';
import { RenovacionFormComponent } from './renovacion-form/renovacion-form.component';
import { RecomendadorComponent } from './recomendador/recomendador.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoOpcionesComponent } from './pedido-opciones/pedido-opciones.component';
import { PedidosPendientesComponent } from './pedidos-pendientes/pedidos-pendientes.component';
import { PedidosAceptadosComponent } from './pedidos-aceptados/pedidos-aceptados.component';
import { PedidoCantidadComponent } from './pedido-cantidad/pedido-cantidad.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    EventoComponent,
    FormEventoComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    ProductoComponent,
    FormProductoComponent,
    CarritoComponent,
    PagoComponent,
    EmpleadoComponent,
    EmpleadoDataTableComponent,
    FacturasComponent,
    FacturaProcesadaComponent,
    FacturaPendienteComponent,
    FacturaCompraComponent,
    AliadosDataTableComponent,
    ProductoCompraComponent,
    ReportesComponent,
    CrudComponent,
    ClienteDataTableComponent,
    ClienteRegistroComponent,
    ContratoComponent,
    FormContratoComponent,
    CatalogoComponent,
    CatalogoDataTableComponent,
    CatalogoAddComponent,
    EvaluacionesComponent,
    EvaluacionDataTableComponent,
    EvaluacionFormComponent,
    CondicionpagoComponent,
    ProveedorEvaluacionComponent,
    CondicionContratoComponent,
    RenovacionComponent,
    RenovacionFormComponent,
    RecomendadorComponent,
    PedidoComponent,
    PedidoOpcionesComponent,
    PedidosPendientesComponent,
    PedidosAceptadosComponent,
    PedidoCantidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    FontAwesomeModule
  ],
  providers: [
    EventoService,
    CommonService,
    EvaluacionFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
