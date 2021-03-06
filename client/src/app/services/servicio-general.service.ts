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

  getAliProveedoresing(){
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

  getCatalogoO(contrato:any){
    return this.http.get(this.API_URL+'/catalogo/otro/'+contrato.proveedor+'/'+contrato.productor+ '/' +contrato.id);
  }

  getPerfumeP(contrato: any){
    return this.http.get(this.API_URL+'/catalogo/'+contrato.productor);
  }

  saveCatalogo(perfume: any){
    return this.http.post(this.API_URL+'/catalogo/', perfume);
  }

  saveCatalogoO(perfume: any){
    return this.http.post(this.API_URL+'/catalogo/otro', perfume);
  }

  getEvaluacion(){
    return this.http.get(this.API_URL+'/evaluacion/'); 
  }

  getEvaluacionFinal(){
    return this.http.get(this.API_URL+'/evaluacion/final'); 
  }

  saveCriEval(evaluacion: any){
    return this.http.post(this.API_URL+'/evaluacion/', evaluacion);
  }

  getProveedorFiltro(contrato: any){
    return this.http.get(this.API_URL+'/evaluacion/'+contrato.productor); 
    
  }

  getProveedorFiltro1(){
    return this.http.get(this.API_URL+'/evaluacion/f'); 
    
  }

  getProveedorFiltro2(aliadosp: any){
    return this.http.get(this.API_URL+'/evaluacion/filtro/'+aliadosp.productor); 
    
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

  getIngreP(contrato: any){
    return this.http.get(this.API_URL+'/catalogo/ingre/'+contrato.proveedor);
  }

  getIngMateriaP(contrato: any){
    return this.http.get(this.API_URL+'/catalogo/ingremat/'+contrato.proveedor);
  }

  saveContratoCondicion(perfume: any){
    return this.http.post(this.API_URL+'/contrato/condicion/', perfume);
  }

  getRenovacion(){
    return this.http.get(this.API_URL+'/renovacion/');
  }

  getoneRenovacion(renovacion: any){
    return this.http.get(this.API_URL+'/renovacion/'+renovacion.clave);
  }

  deleteRenovacion(id:number) {
    return this.http.delete(this.API_URL+'/renovacion/'+id);
  }

  saveRenovacion(renovacion: any){
    return this.http.post(this.API_URL+'/renovacion/', renovacion);
  }

  getRecomendador(){
    return this.http.get(this.API_URL+'/recomendador/');
  }

  getRecomendadorPer(){
    return this.http.get(this.API_URL+'/recomendador/pergen/');
  }

  getRecomendadorPerInt(){
    return this.http.get(this.API_URL+'/recomendador/perint/');
  }

  getRecomendadorPerCar(){
    return this.http.get(this.API_URL+'/recomendador/percar/');
  }

  getRecomendadorPerFam(){
    return this.http.get(this.API_URL+'/recomendador/perfam/');
  }

  getRecomendadorPerOca(){
    return this.http.get(this.API_URL+'/recomendador/peroca/');
  }

  getRecomendadorPerPer(){
    return this.http.get(this.API_URL+'/recomendador/perper/');
  }

  getoneRecomendador(recomendador: any){
    console.log(recomendador);
    return this.http.get(this.API_URL+'/recomendador/per/'+recomendador.palabra+ '/'+recomendador.palabra2+'/'+recomendador.palabra3+ '/' +recomendador.palabra4+ '/' +recomendador.palabra5+ '/' +recomendador.palabra6+ '/' +recomendador.palabra7);
  }

  deleteContrato(id:number) {
    return this.http.delete(this.API_URL+'/contrato/'+id);
  }

  getoneCondicionCond(perfume: any){
    return this.http.get(this.API_URL+'/contrato/cond/'+perfume.ingrediente+ '/'+perfume.materia+ '/' +perfume.contrato);
    
  }

  savePedido(pedido: any){
    return this.http.post(this.API_URL+'/carrito/', pedido);
  }

  savePedidoCant(pedido: any){
    console.log(pedido)
    return this.http.post(this.API_URL+'/carrito/cant/', pedido);
  }

  getonePedido(contrato: any){
    console.log(contrato);
    return this.http.get(this.API_URL+'/carrito/'+contrato);
  }

  getonePedidoAceptado(contrato: any){
    console.log(contrato);
    return this.http.get(this.API_URL+'/carrito/aceptado/'+contrato);
  }

  savePago(pedido: any){
    console.log(pedido)
    return this.http.post(this.API_URL+'/pago/', pedido);
  }

  updatePedido(pedido: any){
    console.log(pedido)
    return this.http.put(this.API_URL+'/carrito/'+pedido.clave, pedido);
  }

  getonePedidoCantidad(pedidos: any){
    console.log(pedidos)
    return this.http.get(this.API_URL+'/carrito/'+pedidos.cond+ '/'+pedidos.pago+ '/' +pedidos.proveedor);
    
  }

  saveCantidadPedido(cantidad: any){
    console.log(cantidad)
    return this.http.post(this.API_URL+'/carrito/def/', cantidad);
  }

  getAliadoProv(condicion: any){
    console.log(condicion)
    return this.http.get(this.API_URL+'/alipro/nombre/'+condicion.proveedor);
  }

  getAliadoProIng(condicion: any){
    console.log(condicion)
    return this.http.get(this.API_URL+'/alipro/nombreing/'+condicion.proveedor);
    
  }

  saveResultado(resultado: any){
    console.log(resultado)
    return this.http.post(this.API_URL+'/evaluacion/resultado/', resultado);
  }

  saveEscala(escala: any){
    console.log(escala)
    return this.http.post(this.API_URL+'/evaluacion/escala/', escala);
  }
}
