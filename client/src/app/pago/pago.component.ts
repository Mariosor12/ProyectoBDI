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
    cantidad: 0
  }];

number: number = 1;
  pago: boolean = true;
  tipoPago:string  = '';
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
    this.montoPagar = this.cart.monto;
    
   }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params){
           this.pedidos[0] ={
            id: params.clave,
            fechai: params.fechai,
            fechaf: params.fechaf,
            exclusivo: params.exclusivo,
            descripcion: params.descripcion,
            proveedor: params.proveedor,
            productor: params.productor
           };
    }
    console.log(this.pedidos[0]);
  }

  evento(opcion:string){
    console.log(opcion);
    this.cubierto = this.cubierto + Number(this.montoPagar);
    if (opcion == 'pagar'){
      this.pay();
    }
    else{
      switch(opcion){
        case 'Transferencia':{
          this.saveTransferencia();
          break;
        }
        case 'TC':{
          this.saveTC();
          break;
        }
        case 'TD':{
          this.saveTD();
          break;
        }
        case 'Cheque':{
          this.saveCheque();
          break;
        }
        default: {
          console.log("Hubo un error con la opcion: ",opcion);
          break;
        }
      }
      //if (this.cubierto == this.cart.monto){
        //this.pay();
      //}
      //else{
        this.tipoPago = '';        
        this.montoPagar = 0;
        this.tarjetaCredito = '';
        this.diaV = '';
        this.mesV = '';
        this.yearV = '';
        this.numeroCuenta = '';
        this.tarjetaDebito = '';
        this.banco = '';
      //}
    }
  }

  saveTransferencia(){
    if (this.cart.indicePagos == 0){
      this.cart.pagos[0].tipo = 'Transferencia';
      this.cart.pagos[0].monto = this.montoPagar;
      this.cart.pagos[0].fecha = this.common.FechaHoy();
      this.cart.pagos[0].tipoPago.banco = this.banco;
      this.cart.pagos[0].tipoPago.fecha = this.common.FechaHoy();
      this.cart.pagos[0].tipoPago.tipoTC = null;
      this.cart.pagos[0].tipoPago.fechaV = null;
      this.cart.pagos[0].tipoPago.numeroCuenta = null;
      this.cart.pagos[0].tipoPago.tipoTD = null;
      this.cart.indicePagos = this.cart.indicePagos + 1;
    }
    else {
      this.cart.pagos.push({
        tipo: 'Transferencia',
        monto: this.montoPagar,
        fecha: this.common.FechaHoy(),
        tipoPago:{
          banco: this.banco,
          fecha: this.common.FechaHoy(),
          tipoTC: null,
          fechaV: null, // fecha de vencimiento
          numeroCuenta: null,
          tipoTD: null
        }
      })
    }
    console.log(this.cart.pagos);
  }

  saveCheque(){
    if (this.cart.indicePagos == 0){
      this.cart.pagos[0].tipo = 'Cheque';
      this.cart.pagos[0].monto = this.montoPagar;
      this.cart.pagos[0].fecha = this.common.FechaHoy();
      this.cart.pagos[0].tipoPago.banco = this.banco;
      this.cart.pagos[0].tipoPago.fecha = null;
      this.cart.pagos[0].tipoPago.tipoTC = null;
      this.cart.pagos[0].tipoPago.fechaV = null;
      this.cart.pagos[0].tipoPago.numeroCuenta = this.numeroCuenta;
      this.cart.pagos[0].tipoPago.tipoTD = null;
      this.cart.indicePagos = this.cart.indicePagos + 1;
    }
    else {
      this.cart.pagos.push({
        tipo: 'Cheque',
        monto: this.montoPagar,
        fecha: this.common.FechaHoy(),
        tipoPago:{
          banco: this.banco,
          fecha: null,
          tipoTC: null,
          fechaV: null, // fecha de vencimiento
          numeroCuenta: this.numeroCuenta,
          tipoTD: null
        }
      })
    }
    console.log(this.cart.pagos);
  }

  saveTC(){
    if (this.cart.indicePagos == 0){
      this.cart.pagos[0].tipo = 'TC';
      this.cart.pagos[0].monto = this.montoPagar;
      this.cart.pagos[0].fecha = this.common.FechaHoy();
      this.cart.pagos[0].tipoPago.banco = this.banco;
      this.cart.pagos[0].tipoPago.fecha = null;
      this.cart.pagos[0].tipoPago.tipoTC = this.tarjetaCredito;
      this.cart.pagos[0].tipoPago.fechaV = this.yearV + '-' + this.mesV.split("-")[0] + '-' + this.diaV;
      this.cart.pagos[0].tipoPago.numeroCuenta = null;
      this.cart.pagos[0].tipoPago.tipoTD = null;
      this.cart.indicePagos = this.cart.indicePagos + 1;
    }
    else {
      this.cart.pagos.push({
        tipo: 'TC',
        monto: this.montoPagar,
        fecha: this.common.FechaHoy(),
        tipoPago:{
          banco: this.banco,
          fecha: this.common.FechaHoy(),
          tipoTC: this.tarjetaCredito,
          fechaV: this.yearV + '-' + this.mesV.split("-")[0] + '-' + this.diaV, // fecha de vencimiento
          numeroCuenta: null,
          tipoTD: null
        }
      })
    }
    console.log(this.cart.pagos);
  }

  saveTD(){
    if (this.cart.indicePagos == 0){
      this.cart.pagos[0].tipo = 'TD';
      this.cart.pagos[0].monto = this.montoPagar;
      this.cart.pagos[0].fecha = this.common.FechaHoy();
      this.cart.pagos[0].tipoPago.banco = this.banco;
      this.cart.pagos[0].tipoPago.fecha = null;
      this.cart.pagos[0].tipoPago.tipoTC = null;
      this.cart.pagos[0].tipoPago.fechaV = null;
      this.cart.pagos[0].tipoPago.numeroCuenta = null;
      this.cart.pagos[0].tipoPago.tipoTD = this.tarjetaDebito;
      this.cart.indicePagos = this.cart.indicePagos + 1;
    }
    else {
      this.cart.pagos.push({
        tipo: 'TD',
        monto: this.montoPagar,
        fecha: this.common.FechaHoy(),
        tipoPago:{
          banco: this.banco,
          fecha: null,
          tipoTC: null,
          fechaV: null, // fecha de vencimiento
          numeroCuenta: null,
          tipoTD: this.tarjetaDebito
        }
      })
    }
    console.log(this.cart.pagos);
  }

  // saveMovimiento(){
  //   this.cantidad = Number(this.cart.minerales[this.indiceMineral].cantPresentacion) * Number(this.cart.minerales[this.indiceMineral].tipoPresentacion.split(' ')[2]);
  //   console.log("guardara como cantidad: ",this.cantidad);
  //   console.log("idminalm: ",this.idMinAlm[0].id);
  //   this.mu.saveMovimientoVenta({cantidad:this.cantidad, minalm:this.idMinAlm[0].id, venta:this.idOrdenVenta[0].id}).subscribe(
  //     res => {
  //       this.indiceMineral = this.indiceMineral + 1;
  //       this.guardarFact();
  //     },
  //     err => console.log(err)
  //   )
  // }

  // getMinAlmByMinId(){
  //   console.log("buscará MinAlm con idMin: ", this.cart.minerales[this.indiceMineral].idMineral);
  //   this.mu.getMinAlmByMinId(this.cart.minerales[this.indiceMineral].idMineral).subscribe(
  //     res => {
  //       this.idMinAlm = res;  // en la posición 0
  //       this.saveMovimiento();
  //     },
  //     err => console.log(err)
  //   )
  // }

  // guardarFact(){
  //   console.log("Entro a guardarFact");
  //   if (this.indiceMineral < this.cart.minerales.length){
  //     this.mu.saveFactMineral({cantidad:this.cart.minerales[this.indiceMineral].cantPresentacion, venta:this.idOrdenVenta[0].id, minpre:this.cart.minerales[this.indiceMineral].idMinPre, costo:this.cart.minerales[this.indiceMineral].costo}).subscribe(
  //       res => {
  //         this.getMinAlmByMinId();
  //       },
  //       err => console.log(err)
  //     )
  //   }
  // }

  guardarTipoPago(){
    if (this.indicePago < this.cart.pagos.length){
      if (this.cart.pagos[this.indicePago].tipo == 'Transferencia'){
        this.sg.saveTransferencia({banco:this.cart.pagos[this.indicePago].tipoPago.banco, fecha:this.cart.pagos[this.indicePago].tipoPago.fecha}).subscribe(
          res => {
            this.idTipoPago = res; // id del Tipo de Pago creado (posicion 0 del arreglo)                 
            this.guardarPago();          
          },
          err => console.log(err)
        )
      }
      else if(this.cart.pagos[this.indicePago].tipo == 'TC'){
        this.sg.saveTC({banco:this.cart.pagos[this.indicePago].tipoPago.banco, tipo:this.cart.pagos[this.indicePago].tipoPago.tipoTC, vencimiento:this.cart.pagos[this.indicePago].tipoPago.fechaV}).subscribe(
          res => {
            this.idTipoPago = res; // id del Tipo de Pago creado (posicion 0 del arreglo)                 
            this.guardarPago();          
          },
          err => console.log(err)
        )
      }
      else if(this.cart.pagos[this.indicePago].tipo == 'TD'){
        this.sg.saveTD({banco:this.cart.pagos[this.indicePago].tipoPago.banco, tipo:this.cart.pagos[this.indicePago].tipoPago.tipoTD}).subscribe(
          res => {
            this.idTipoPago = res; // id del Tipo de Pago creado (posicion 0 del arreglo)                 
            this.guardarPago();          
          },
          err => console.log(err)
        )
      }
      else if(this.cart.pagos[this.indicePago].tipo == 'Cheque'){
        this.sg.saveCheque({banco:this.cart.pagos[this.indicePago].tipoPago.banco, nrocuenta:this.cart.pagos[this.indicePago].tipoPago.numeroCuenta}).subscribe(
          res => {
            this.idTipoPago = res; // id del Tipo de Pago creado (posicion 0 del arreglo)                 
            this.guardarPago();          
          },
          err => console.log(err)
        )
      }
    }
    
  }
  
  guardarPago(){
    this.guardarTipoPago();
    if (this.indicePago < this.cart.pagos.length){
      console.log("guardara: ",this.cart.pagos[this.indicePago].monto, this.cart.pagos[this.indicePago].fecha, this.cart.idOrdenVenta +1, this.idTipoPago[0].id);
      this.sg.savePago({monto:this.cart.pagos[this.indicePago].monto, fecha:this.cart.pagos[this.indicePago].fecha, venta:this.cart.idOrdenVenta + 1, tipo:this.idTipoPago[0].id}).subscribe(
        res => {
          console.log("Guardo el pago! :D");
          this.indicePago = this.indicePago + 1;
          this.guardarTipoPago();
          // this.indiceMineral = 0;
          //this.guardarFact();
          this.cart.monto = 0;
        },
        err => console.log(err)
      )
    }
    else{
      console.log("no se cumplio la condicion", this.indicePago);
      //this.indiceMineral = 0;
      //this.guardarFact();      
    }
    
  }
  
  pay(){
    this.sg.saveOrdenventa({fecha:this.common.FechaHoy(), cliente:this.cart.idCliente, total:this.cart.monto}).subscribe(
      res => {
        if(this.pago){
        this.idOrdenVenta + 1;
        this.idOrdenVenta = res // id de la Orden de Compra creada (posicion 0 del arreglo)  
        console.log(res);   
        this.indicePago = 0;
        this.guardarTipoPago();
        this.guardarPago();
        alert("Se realizó el pago exitosamente");
        } else
        {
          alert("Error. No se realizó el pago exitosamente");
        }      
     
      },
      err => console.log(err)
    )
  }

}
