
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ServicioGeneralService } from './../services/servicio-general.service';
import { CommonService } from './../services/common.service';
import { CarritoService } from './../services/carrito.service';

@Component({
  selector: 'app-factura-pendiente',
  templateUrl: './factura-pendiente.component.html',
  styleUrls: ['./factura-pendiente.component.css']
})
export class FacturaPendienteComponent implements OnInit {

  vista:string = '';
  factura:number = 0;
  total:number = 0;
  caso:string = 'Agregar';
  tipo:string = 'tipo';
  edit:boolean = false;
  desactivar:boolean = null;
  fecha:any;
  i:number = 0;
  primerPedido:boolean = true;
  show:boolean = false;
  necesario:number = 0;
  productoActual:string = '';
  aliMinActual:number = 0;


  ordenesCompra:any = [{}];
  ordenesVenta:any = [{}];
  pedidos:any = [{
    id: 0,
    nombre: '' ,
    fecha: '' ,
    cantidad: 0,
    precio: 0 ,
    total: 0
  }];

  facturaProducto:any = [{
    id:0,
    nombrec: '',
    cantidad: 0,
    costo: 0,
    total: 0
  }]
  
  AlmCant:any = [{}];

  cantidades:any = [{
    id:0, //id del movimiento
    movcant:0,
    minalm:0, // id del Min_Alm
    minalmcant:0
  }];
  haySuficiente:boolean = true;

  constructor(private cart:CarritoService, private activatedRouter:ActivatedRoute, private router:Router, private sg:ServicioGeneralService, private common:CommonService) { 
    this.common.title = "Facturas";
    this.vista = this.common.vista;
  }

  ngOnInit(): void {
    if (this.common.vista == "Compra"){
      this.getComprasPendientes();
    }
    else if(this.common.vista == 'Venta') {
      this.getVentasPendientes();
    }
  }
  getVentasPendientes(){
    this.sg.getOrdenVentasPendientes().subscribe(
      res => {
        this.ordenesVenta = res;
        console.log(this.ordenesVenta);
        /*for(this.i = 0; this.i < this.ordenesCompra.length; this.i = this.i + 1){
          this.getPedidos(this.ordenesCompra[this.i].id);
        }*/
      },
      err => console.error(err)
    );
  }

  getComprasPendientes(){
    this.sg.getOrdenComprasPendientes().subscribe(
      res => {
        this.ordenesCompra = res;        
        /*for(this.i = 0; this.i < this.ordenesCompra.length; this.i = this.i + 1){
          this.getPedidos(this.ordenesCompra[this.i].id);
        }*/
      },
      err => console.error(err)
    );
  }

  getPedidos(id:number){
    this.factura = id;
    if (this.vista == 'Compra'){
      this.sg.getPedidosOC(id).subscribe(
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
      this.sg.getPedidosOV(id).subscribe(
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

  // generarCompra(){    
  //   //Tengo la cantidad que debo comprar almacenada en la variable necesario
  //   this.cart.resetPedido();
  //   this.cart.idAliadoActual = 3;
  //   this.cart.pedido[0].aliado = 'MINVEN';
  //   this.cart.pedido[0].producto = 'Virita';
  //   this.cart.pedido[0].presentacion = '';
  //   this.cart.pedido[0].cantidad = this.necesario;
  //   this.cart.pedido[0].costo = 0;
  //   this.cart.pedido[0].aliMin = 9;
  //   for(this.i = 1; this.i < 4; this.i = this.i + 1){
  //     if(this.i == 1){
  //       this.productoActual = 'Fusita';
  //       this.aliMinActual = 10;
  //     }
  //     else if (this.i == 2){
  //       this.productoActual = 'Clarita';
  //       this.aliMinActual = 11;
  //     }
  //     else if(this.i == 3){
  //       this.productoActual = 'Durita';
  //       this.aliMinActual = 12;
  //     }
  //     this.cart.pedido.push({
  //       aliado:'MINVEN',   // nombre del aliado al que se le compra
  //       producto:this.productoActual,  // mineral que se esta comprando
  //       presentacion:'',  // no sirve
  //       cantidad:this.necesario,   //cantidad en Kg del Mineral que se esta comprando
  //       costo:0,    //no sirve
  //       aliMin:this.aliMinActual
  //     })
  //   }
  //   this.router.navigate(['/factura/compra']);
    
  // }

  // comparar(){
  //   for(this.i = 0; this.i < this.cantidades.length; this.i = this.i + 1){
  //     console.log(Number(this.cantidades[this.i].movcant) + ' > '+this.cantidades[this.i].minalmcant);
  //     if (Number(this.cantidades[this.i].movcant) > this.cantidades[this.i].minalmcant){
  //       this.haySuficiente = false;
  //       this.necesario = Number(this.cantidades[this.i].movcant) - this.cantidades[this.i].minalmcant;        
  //     }
  //   }
  // }

  // recibir(id:number){ //el id, es el id de la OC o de la OV, dependiendo del caso
  //   if(this.vista == 'Compra'){
  //     console.log("El id pasado es: ", id);    
  //     this.sg.cambiarEstatusOC(id).subscribe(
  //       res => {
  //         this.sg.cambiarEstatusMovimiento(id).subscribe(
  //           res => {
  //             console.log("El Arreglo de AlmCant devuelto es: ", this.AlmCant);
  //             this.AlmCant = res;
  //             this.i = 0;
  //             this.actualizarCantidades({
  //               almacen: this.AlmCant[this.i].almacen,
  //               cantidad: this.AlmCant[this.i].cantidad
  //             });
  //           }
  //         )
  //       },
  //       err => console.error(err)
  //     );
  //   }
  //   else if (this.vista == 'Venta'){
  //     this.sg.obtenerCantidades(id).subscribe(
  //       res => {
  //         this.cantidades = res;
  //         console.log("devuelve: ",this.cantidades);
  //         this.comparar();
  //         if (this.haySuficiente){  //Si hay suficiente para vender entonces...
  //           console.log("Hay suficiente para ventes :D");
  //           this.sg.cambiarEstatusOV(id).subscribe(
  //             res => {
  //               this.sg.cambiarEstatusMovimientoOV(id).subscribe(
  //                 res => {
  //                   console.log("El Arreglo de AlmCant devuelto es: ", this.AlmCant);
  //                   this.AlmCant = res;
  //                   this.i = 0;
  //                   this.actualizarCantidades({
  //                     almacen: this.AlmCant[this.i].almacen,
  //                     cantidad: this.AlmCant[this.i].cantidad
  //                   });
  //                 },
  //                 err => console.error(err)
  //               )
  //             },
  //             err => console.error(err)
  //           )
  //         }
  //         else {
  //           this.generarCompra();
  //         }
  //       },
  //       err => console.error(err)
  //     )
  //   }
  // }

  // actualizarCantidades(body:any){
  //   if (this.vista == 'Compra'){
  //     this.sg.actualizarAlmacen(body).subscribe(
  //       res => {
  //         this.i = this.i + 1;
  //         if (this.i < this.AlmCant.length){
  //           this.actualizarCantidades({
  //             almacen: this.AlmCant[this.i].almacen,
  //             cantidad: this.AlmCant[this.i].cantidad
  //           });
  //         }
  //         else {
  //           console.log("TERMINADO");
  //         }
  //       }
  //     )
  //   }
  //   else if (this.vista == 'Venta'){
  //     this.sg.disminuirAlmacen(body).subscribe(
  //       res => {
  //         this.i = this.i + 1;
  //         if (this.i < this.AlmCant.length){
  //           this.actualizarCantidades({
  //             almacen: this.AlmCant[this.i].almacen,
  //             cantidad: this.AlmCant[this.i].cantidad
  //           });
  //         }
  //         else {
  //           console.log("TERMINADO");
  //         }
  //       }
  //     )
  //   }
  // }

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

  VolverFact(){    
    this.router.navigate(['/facturas']);
  }
}
