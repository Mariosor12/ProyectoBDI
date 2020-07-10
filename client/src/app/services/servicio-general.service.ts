import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Empleado } from './../models/empleado';
import { Usuario } from './../models/usuario';
import { PerPre } from './../models/PerPre';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {

  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  catalogo: any = [{
    id: 0,
    nombre: '',
    cantidad: 0,
    exclusividad: ''
  }];

  perfume: any = [{
    id: 0,
    nombre: ''
  }];

  condicion: any = {
    id: 0,
    nombre: '',
    nombred: '',
    transporte: '',
    costo: 0,
    recargo: 0,
    total:0
  };

  aliados: any = {
    id: 0,
    razon: '',
    pagina: '',
    tel: '',
    region: '',
    proveedor: 0
  };

  contrato:any = [{
    id: 0,
    nombrep: '',
    nombrepr: '',
    fechai: '',
    fechaf: '',
    descripcion: '',
    proveedor: 0,
    productor: 0
  }];

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

  getAliadosPro(){
    return this.http.get(this.API_URL+'/aliado');
  }

  deleteEvento(id: string){
    return this.http.delete(this.API_URL+'/aliado/'+id);
  }

  getAliadosProv(){
    return this.http.get(this.API_URL+'/aliado');
  }
  getAliProveedores(){
    return this.http.get(this.API_URL+'/alipro');
  }

  getAliProductos(aliado){
    return this.http.get(this.API_URL+'/alipro');
  }

  getPresentaciones(){
    return this.http.get(this.API_URL+'/presentacion/');    
  }

  getIngredientes(){
    return this.http.get(this.API_URL+'/alipro/');    
  }

  getIngre(id: number){
    return this.http.get(this.API_URL+'/alipro/aliado/' +id);    
  }

  getPerfumes(id: number){
    return this.http.get(this.API_URL+'/alipro/producto/' +id);    
  }

  getProductos(){
    return this.http.get(this.API_URL+'/producto');
  }

  getProducto(id: string | number){
    return this.http.get(this.API_URL+'/producto/'+id);
  }

  getMinPresentaciones(){
    return this.http.get(this.API_URL+'/perpre/');    
  }

  getMinPrese(){
    return this.http.get(this.API_URL+'/perpre/');    
  }

  getMinPre(id:number){
    return this.http.get(this.API_URL+'/perfume/'+id);    
  }

  getPresentacionesById(id:number){
    return this.http.get(this.API_URL+'/perpre/perfume/'+id);    
  }

  saveMinPre(minPre: PerPre){
    return this.http.post(this.API_URL+'/minpre', minPre);
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

  checkMinPre(minPre: PerPre){    
    return this.http.post(this.API_URL+'/minpre/mp', minPre);
  }

  login(usuarioLogin: Usuario){
    return this.http.post(this.API_URL+'/usuario/ingreso', usuarioLogin);
  }

  getContratos(){
    return this.http.get(this.API_URL+'/contrato/');
  }

  getContrato(id: number){
    return this.http.get(this.API_URL+'/contrato/'+id);
  }

  getContratoc(){
    return this.http.get(this.API_URL+'/contrato/c/');
  }

  saveContrato(contrato: any){
    //console.log("Antes de HTTP, mandaria (Posición 0): ", contrato[0]);
    //console.log("Tipo de dato: ", typeof contrato[0], " y tiene longitud: ", contrato[0].length);
    return this.http.post(this.API_URL+'/contrato/', contrato);
  }

  updateContrato(contrato: any){
    return this.http.put(this.API_URL+'/contrato/'+contrato.id, contrato);
  }

  getCatalogos(){
    return this.http.get(this.API_URL+'/catalogo/');
  }

  getCatalogo(contrato:any){
    return this.http.get(this.API_URL+'/catalogo/'+contrato.proveedor+'/'+contrato.productor+ '/' +contrato.id);
  }

  getPerfumeP(contrato: any){
    return this.http.get(this.API_URL+'/catalogo/'+contrato.productor);
  }

  saveCatalogo(perfume: any){
    return this.http.post(this.API_URL+'/catalogo/', perfume);
  }

  getEvaluacion(){
    return this.http.get(this.API_URL+'/evaluacion/'); 
  }

  saveCriEval(evaluacion: any){
    return this.http.post(this.API_URL+'/evaluacion/', evaluacion);
  }

  getProveedorFiltro(evaluacion: any){
    return this.http.get(this.API_URL+'/evaluacion/'+evaluacion.productor); 
    
  }

  getProveedorFiltro1(){
    return this.http.get(this.API_URL+'/evaluacion/f'); 
    
  }

  saveTipoPago(tipopago: any){
    return this.http.post(this.API_URL+'/tipopago/', tipopago);
  }

  saveEnvio(envio: any){
    return this.http.post(this.API_URL+'/envio/', envio);
  }

  getCondProv(condicion: any){
    return this.http.get(this.API_URL+'/envio/cond/'+condicion.proveedor);
  }

  getPagoProv(condicion: any){
    return this.http.get(this.API_URL+'/evaluacion/condipago/'+condicion.proveedor);
  }
}
