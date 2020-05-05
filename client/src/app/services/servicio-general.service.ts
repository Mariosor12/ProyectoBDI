import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Empleado } from './../models/empleado';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {

  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getOrdenComprasPendientes(){
    return this.http.get(this.API_URL+'/ordencompra/revision');
  }

  getOrdenVentasPendientes(){
    return this.http.get(this.API_URL+'/ordenventa/revision');
  }

  getOrdenComprasRecibidas(){
    return this.http.get(this.API_URL+'/ordencompra/entregado');
  }

  getOrdenVentasRecibidas(){
    return this.http.get(this.API_URL+'/ordenventa/entregado');
  }

  getPedidosOC(id:number){
    return this.http.get(this.API_URL+'/carrito/ordencompra/'+id);
  }

  getPedidosOV(id:number){
    return this.http.get(this.API_URL+'/factmin/ordenventa/'+id);
  }

  saveOrdenCompra(orden:any){
    return this.http.post(this.API_URL+'/ordencompra', orden);
  }

  saveOrdenventa(orden:any){
    return this.http.post(this.API_URL+'/ordenventa', orden);
  }

  saveTransferencia(transferencia:any){
    return this.http.post(this.API_URL+'/tipopago/transferencia', transferencia);
  }

  saveTC(TC:any){
    return this.http.post(this.API_URL+'/tipopago/tarcre', TC);
  }

  saveTD(TD:any){
    return this.http.post(this.API_URL+'/tipopago/tardeb', TD);
  }

  saveCheque(cheque:any){
    return this.http.post(this.API_URL+'/tipopago/cheque', cheque);
  }

  savePago(pago:any){
    return this.http.post(this.API_URL+'/pago', pago);
  }

  getAliados(){
    return this.http.get(this.API_URL+'/aliado');
  }
  getAliProductos(aliado:number){
    return this.http.get(this.API_URL+'/alipro/'+aliado);
  }

  getEmpleados(){
    return this.http.get(this.API_URL+'/empleado');
  }

  getClientes(){
    return this.http.get(this.API_URL+'/cliente');
  }

  deleteCliente(id:number) {
    return this.http.delete(this.API_URL+'/cliente/'+id);
  }
  
  getCliente(id:number){
    return this.http.get(this.API_URL+'/cliente/'+id);
  }

  getDireccion(id:number){
    return this.http.get(this.API_URL+'/lugar/direccion/'+id);
  }

  getEstados(){
    return this.http.get(this.API_URL+'/lugar/estado');
  }

  getMunicipios(id:number){
    return this.http.get(this.API_URL+'/lugar/municipio/'+id);
  }

  getParroquias(id:number){
    return this.http.get(this.API_URL+'/lugar/parroquia/'+id);
  }

  saveEmpleado(empleado: Empleado){
    return this.http.post(this.API_URL+'/empleado', empleado);
  }

  saveCliente(cliente:any){
    return this.http.post(this.API_URL+'/cliente', cliente);
  }

  updateCliente(cliente: any){
    return this.http.put(this.API_URL+'/cliente/'+cliente.id, cliente);
  }

}
