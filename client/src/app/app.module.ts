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
import { RolComponent } from './rol/rol.component';
import { RolDataTableComponent } from './rol-data-table/rol-data-table.component';
import { PrivilegioDataTableComponent } from './privilegio-data-table/privilegio-data-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoDataTableComponent } from './usuario-data-table/empleado-data-table.component'

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
    RolComponent,
    RolDataTableComponent,
    PrivilegioDataTableComponent,
    EmpleadoComponent,
    EmpleadoDataTableComponent
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
    EventoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
