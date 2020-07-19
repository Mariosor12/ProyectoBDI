import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService } from './../services/carrito.service';
import { CommonService } from './../services/common.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CarritoComponent} from '../carrito/carrito.component';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  // pedidos:any = [{}];

  pedidos: any = [{
    clave: 0,
    fecha: '',
    fechaf: '',
    estatus: '',
    factura: 0,
    total: 0,
    nombre: '',
    tipo: '',
    transporte: '',
    costo: 0,
    recargo: 0,
    totalm: 0,
    cantidad: 0,
    cuota: 0,
    meses: 0,
    proveedor: 0,
    productor: 0,
    cond: 0,
    pago: 0
  }];

  tipopago: any = [{
    tipo: '',
    cuotas: 0,
    porcuotas: 0,
    mes: 0
  }];

  contrato:any = [{
    id: 0,
    nombrep: '',
    nombrepr: '',
    fechai: '',
    fechaf: '',
    descripcion: '',
    motivo: '',
    exclusivo: '',
    proveedor: 0,
    productor: 0
  }];

number: number = 1;
  pago: boolean = true;
  cubierto:number = 0;
  montoPagar:number = 0;
  tarjetaCredito:string = '';
  diaV:string = '';
  mesV:string = '';
  yearV:string = '';
  numeroCuenta:string = '';
  tarjetaDebito:string = '';
  banco:string = '';

  monto:number = 0; 
  costoe: number = 0;
  recargo: number = 0;
  total: number = 0;
  tipopagocuota: number = 0;
  tipopagomeses: number = 0;
  tipopagomesesxcuota: number = 0;

  
  idOrdenVenta:any = [{
    id:0
  }];
  idTipoPago:any = [{
    id:0
  }];
  idMinAlm:any = [{
    id:0
  }];
  indicePago:number = 0;
  indiceProducto:number = 0;
  cantidad:number = 0;

  constructor(private cart:CarritoService, private activatedRoute: ActivatedRoute, private common:CommonService, private sg:ServicioGeneralService) {
    this.common.vista = 'Pagos';
    this.monto = this.cart.monto;
    this.montoPagar = this.cart.total;
    this.costoe = this.cart.costoe;
    this.recargo = this.cart.recargo;
    this.total = this.cart.total;
   }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params){
           this.pedidos[0] ={
            id: params.clave,
            fechai: params.fechai,
            fechaf: params.fechaf,
            estatus: params.estatus,
            factura: params.factura,
            total: params.total,
            nombre: params.nombre,
            tipo: params.tipo,
            transporte: params.transporte,
            costo: params.costo,
            recargo: params.recargo,
            totalm: params.totalm,
            cantidad: params.cantidad,
            cuotas: params.cuotas,
            mes: params.mes
           };
           this.contrato[0] ={
            productor: params.productor,
            proveedor: params.proveedor,
            cond: params.cond,
            pago: params.pago
           };
    }
    // console.log(this.pedidos[0]);
    this.monto = this.pedidos[0].total
    this.costoe = this.pedidos[0].costo
    this.recargo = this.pedidos[0].recargo
    this.total = this.pedidos[0].totalm
    this.pedidos[0].fecha = this.hoyFecha() 
    this.tipopagocuota = this.pedidos[0].cuotas
    this.tipopagomeses = this.pedidos[0].mes

    this.tipopagomesesxcuota = this.pedidos[0].totalm / this.pedidos[0].mes;
    console.log(this.pedidos[0]);
   console.log(this.contrato[0].productor)
   console.log(this.contrato[0].cond)
  }

  SaveNuevoProducto() {
    this.tipopago[0].porcuotas = this.tipopagocuota 
    this.tipopago[0].mes = this.tipopagomeses  
    this.tipopago[0].cuotas = this.tipopagomesesxcuota 
    
    console.log(this.tipopago[0])
    //this.sg.saveContrato(this.contratos);
    this.sg.saveTipoPago(this.tipopago[0]).subscribe(
        res => {
          console.log(res);
          console.log(this.tipopago[0])
          // this.router.navigate(['/catalogo/add']);
          // this.contratos = res; // Esto esta mal.

        },
        err => console.error(err)
      )
  }

  SaveNuevoProducto1() {
    // delete this.contrato[0].id;
    // delete this.contrato[0].nombrep;
    // delete this.contrato[0].nombrepr;
    console.log(this.pedidos[0])
    //this.sg.saveContrato(this.contratos);
    this.sg.savePago(this.pedidos[0]).subscribe(
        res => {
          console.log(res);
          console.log(this.pedidos[0])
          // this.router.navigate(['/catalogo/add']);
          // this.contratos = res; // Esto esta mal.

        },
        err => console.error(err)
      )
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
