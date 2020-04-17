import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  monto:number = 0;  // Monto del carrito

  //------------------------------- PARA LA COMPRA -----------------------------------------------------------
  // aliadoActual:string = '';
  // idAliadoActual:number = 0;
  // indiceCompra:number = 0;  

   pedido:any = [{
    id: 0 ,
    nombre: '' ,
    fecha: '' ,
    cantidad: 0,
    precio: 0 ,
    total: 0 
  }]
  // ------------------------------------------------------------------------------------------------- ||

  //------------------------------- PARA LA VENTA -----------------------------------------------------------

  idCliente:number = 0;
  idOrdenVenta:number = 0;  
  indiceVenta:number = 0;
  indicePagos:number = 0;

  productos:any = [{
    id: 0 ,
    nombre: '' ,
    descripcion: '' ,
    precio_unitario: 0,
    fk_ale: 0 ,
    fk_lager: 0 
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
      id: 0 ,
      nombre: '' ,
      descripcion: '' ,
      precio_unitario: 0,
      fk_ale: 0 ,
      fk_lager: 0 
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
}

