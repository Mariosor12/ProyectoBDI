import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CarritoService } from './../services/carrito.service';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  indiceCompra:number = 0;

  pedidos:any = [{}];  
  monto:number = 0;
  costoe:number = 0;
  recargo:number = 0;
  total:number = 0;
  cubierto:number = 0;
  
  constructor(private router:Router, private carritoService: CarritoService) { 

  
    this.monto = this.carritoService.monto;
    this.costoe = this.carritoService.costoe;
    this.recargo = this.carritoService.recargo;
    this.total = this.carritoService.total;
    this.cubierto = this.carritoService.cubierto;
  }

  ngOnInit() {

   
    this.pedidos = this.carritoService.pedido;

  }

  gotoProducts(){
    this.router.navigate(['producto']);
  }

  gotoPay(){
   // this.common.vista = 'Pago';
    this.router.navigate(['/pago']);
  }

  getPedido(){
    this.carritoService.getPedidos().subscribe(
      res => {
        this.pedidos = res;
      },
      err => console.log(err)
    )
  }

}
