import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { CarritoService } from './../services/carrito.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { async } from 'q';

@Component({
  selector: 'app-factura-compra',
  templateUrl: './factura-compra.component.html',
  styleUrls: ['./factura-compra.component.css']
})
export class FacturaCompraComponent implements OnInit {

  pedidos: any = {
    id: 0 ,
    nombre: '' ,
    fecha: '' ,
    cantidad: 0,
    precio: 0 ,
    total: 0,
    alipro: ''
  };

  respuesta:any;
  idPedido:any;
  idMinAlm:any;  

  i:number = 0;
  precioTotal:number = 0;

  constructor(private common:CommonService, private cart:CarritoService, private router:Router, private sg:ServicioGeneralService) { 
    this.common.title = "Factura";
    // this.llenar();
    this.pedidos = this.cart.pedido;
  }

  ngOnInit(): void {
  }

  gotoProductos(){
    this.router.navigate(['/producto/compra']);
  }

  comprar(){
    console.log(this.cart.pedido);   
    this.sg.saveOrdenCompra({fecha:this.common.FechaHoy(), aliado:this.cart.idAliadoActual}).subscribe(
      res => {
        this.respuesta = res; // id de la Orden de Compra creada       
        this.guardarPedido();          
      },
      err => console.log(err)
    )    
  }

  guardarPedido(){
    this.cart.savePedido({cantidad: this.cart.pedido[this.i].cantidad, nombre: this.respuesta[0].nombre, alipro: this.cart.pedido[this.i].aliPro}).subscribe(
      res => {
        this.idPedido = res;        
        // this.obtenerMinAlm();        
      },
      err => console.log(err)
    )
  }

  // obtenerMinAlm(){
  //   this.sg.getMinAlmByPedido(this.idPedido[0].id).subscribe(                
  //     res => {        
  //       this.idMinAlm = res;        
  //       this.guardarMovimiento();        
  //     },
  //     err => console.log(err)
  //   )
  // }

  // guardarMovimiento(){
  //   this.mu.saveMovimiento({cantidad: this.cart.pedido[this.i].cantidad, minalm:this.idMinAlm[0].id, compra:this.respuesta[0].id}).subscribe(
  //     res => {
  //       console.log("save successful");       
  //       this.i = this.i + 1;
  //       if (this.i < this.cart.pedido.length){                       
  //         this.guardarPedido();
  //       }
  //       else{
  //         console.log("terminado el trabajo");
  //         this.cart.pedido = [{}];
  //         this.router.navigate(['/inicio']);
  //       }
  //       //this.router.navigate(['/inicio']);
  //     },
  //     err => console.log(err)
  //   )
  // }
  gotoProducts(){
    this.router.navigate(['producto']);
  }
  gotoPay(){
    // this.common.vista = 'Pago';
     this.router.navigate(['/pago']);
   }
}
