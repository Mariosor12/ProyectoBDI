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
  
  constructor(private router:Router, private carritoService: CarritoService) { 

  
    this.monto = this.carritoService.monto;

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
