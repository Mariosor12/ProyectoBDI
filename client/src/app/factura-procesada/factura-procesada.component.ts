import { Component, OnInit } from '@angular/core';
import {Pedido} from '../models/pedido';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CommonService } from './../services/common.service';


import { Router } from '@angular/router';

@Component({
  selector: 'app-factura-procesada',
  templateUrl: './factura-procesada.component.html',
  styleUrls: ['./factura-procesada.component.css']
})
export class FacturaProcesadaComponent implements OnInit {

  vista:string = '';
  fecha:any;
  i:number = 0;
  show:boolean = false;
  total:number = 0;
  factura:number = 0;

  ordenesCompra:any = [{}];
  pedidos:any = [{
    id: 0,
    nombre: '' ,
    fecha: '' ,
    cantidad: 0,
    precio: 0 ,
    total: 0
  }];
  AlmCant:any = [{}];

  ordenesVenta:any = [{}];

  facturaProducto:any = [{
    id:0,
    nombrec: '',
    cantidad: 0,
    costo: 0,
    total: 0
  }]

  constructor(private SG:ServicioGeneralService, private common:CommonService, private router:Router) { 
    this.common.title = "Facturas";
    this.vista = this.common.vista;
  }

  ngOnInit(): void {
    if (this.common.vista == "Compra"){
      this.getComprasProcesadas();
    }
    else if (this.common.vista == 'Venta'){
      this.getVentasProcesadas();
    }
  }

  getVentasProcesadas(){
    this.SG.getOrdenVentasRecibidas().subscribe(
      res => {
        this.ordenesVenta = res;      
      },
      err => console.error(err)
    );
  }

  getComprasProcesadas(){
    this.SG.getOrdenComprasRecibidas().subscribe(
      res => {
        this.ordenesCompra = res;               
      },
      err => console.error(err)
    );
  }

   calcularMonto(){
    if(this.vista == 'Compra'){
      for (this.i = 0; this.i < this.pedidos.length; this.i = this.i + 1){
        this.total = this.total + Number(this.pedidos[this.i].cantidad);
       }
    }
    else if(this.vista == 'Venta'){
      for(this.i = 0; this.i < this.facturaProducto.length; this.i = this.i + 1){
        this.total = this.total + Number(this.facturaProducto[this.i].total);
      }
    }
   }

   getPedidos(id:number){
    this.factura = id;
    if (this.vista == 'Compra'){
      this.SG.getPedidosOC(id).subscribe(
        res => {
          this.pedidos = res;
          this.calcularMonto();
          this.show = true;        
          console.log(this.pedidos);
        },
        err => console.error(err)
      );
    }
    else if(this.vista == 'Venta'){
      this.SG.getPedidosOV(id).subscribe(
        res => {
          this.facturaProducto = res;
          this.calcularMonto();
          this.show = true;        
          console.log(this.facturaProducto);
        },
        err => console.error(err)
      );
    }
  }

  detalles(id:number){
    this.getPedidos(id);
  }

  volverFact(){
    this.common.vista = "Facturas";
    this.router.navigate(['/facturas']);
  }

}
