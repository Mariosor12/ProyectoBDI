import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  monto:number = 0;  // Monto del carrito
  costoe:number = 0;  // Costo del envio
  recargo:number = 0;  // Recargo del envio
  total:number = 0;  // Total del Pedido
  cubierto:number = 0;  // Total del Pedido
  //------------------------------- PARA LA COMPRA -----------------------------------------------------------
   aliadoActual:string = '';
   idAliadoActual:number = 0;
   indiceCompra:number = 0;  

   pedido:any = [{
    id: 0 ,
    fecha: '' ,
    cantidad: 0,
    precio: 0 ,
    total: 0 ,
    compra: 0,
    venta: 0,
    envio: 0,
    proveedor: 0
  }]
  // ------------------------------------------------------------------------------------------------- ||

  //------------------------------- PARA LA VENTA -----------------------------------------------------------

  idCliente:number = 0;
  idOrdenVenta:number = 0;  
  indiceVenta:number = 0;
  indicePagos:number = 0;

  productos:any = [{
    id: 0,
    nombre: '',
    descripcion: '',
    fecha: 0,
    genero: 0,
    fk_fijador: 0,
    fk_tipo_producto: 0,
    fk_perfumista: 0
  }]

  pagos:any = [{
    tipo:'',
    monto:0,
    fecha:'',
    tipoPago:{
      banco:'',
      fecha:'',
      tipoTC:'',
      fechaV:'', // fecha de vencimiento
      numeroCuenta:'',
      tipoTD:''
    }
  }]

  // ------------------------------------------------------------------------------------------------- ||

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3000/api';

  getPedidos(){
    return this.http.get(this.API_URL+'/carrito/');
  }

  getPedido(id: string){
    return this.http.get(this.API_URL+'/carrito/'+id);
  }

  savePedido(pedido: Pedido){
    return this.http.post(this.API_URL+'/carrito/', pedido);
  }

  getPedidosOC(id:number){
    return this.http.get(this.API_URL+'/pedido/ordencompra/'+id);
  }

  resetPedido(){
    this.pedido = [{
      id: 0 ,
      nombre: '' ,
      fecha: '' ,
      cantidad: 0,
      precio: 0 ,
      total: 0 
    }]
  }

  resetProductos(){
    this.productos = [{
      id: 0,
      nombre: '',
      descripcion: '',
      fecha: 0,
      genero: 0,
      fk_fijador: 0,
      fk_tipo_producto: 0,
      fk_perfumista: 0
    }]
  }

  resetPagos(){
    this.pagos = [{
      tipo:'',
      monto:0,
      fecha:'',
      tipoPago:{
        banco:'',
        fecha:'',
        tipoTC:'',
        fechaV:'', // fecha de vencimiento
        numeroCuenta:'',
        tipoTD:''
      }
    }]
  }

  resetAll(){
    this.resetPedido();
    this.resetProductos();
    this.resetPagos();
  }

      
 addZero(i) {
  if (i < 10) {
      i = '0' + i;
  }
  return i;
}

 hoyFecha(){
  var hoy = new Date();
      var dd = hoy.getDate();
      var mm = hoy.getMonth()+1;
      var yyyy = hoy.getFullYear();
      
      dd = this.addZero(dd);
      mm = this.addZero(mm);

      return dd+'/'+mm+'/'+yyyy;
}
}

