import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService} from '../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import { PrivilegioService } from '../services/privilegio.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private privilegios: PrivilegioService) { }

  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio_unitario: 0,
    fk_ale: 0,
    fk_lager: 0
  };
  edit: boolean = false;

  pedido: any;

  ngOnInit(): void {
    this.privilegios.evaluar(this.privilegios.idRolActual);
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
           this.producto ={
             id: params.id,
             nombre: params.nombre,
             descripcion: params.descripcion,
             precio_unitario: params.precio_unitario,
             fk_ale: params.fk_ale,
             fk_lager: params.fk_lager
           };
           this.edit = true;      
    }
  }

  SaveNuevoProducto() {
    delete this.producto.id;
    if(this.privilegios.insertar == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else {
    this.productoService.saveProducto(this.producto).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/producto']);
        },
        err => console.error(err)
      )
    }
  }

  public editarProducto(producto : Producto): void{
    this.router.navigate(['/producto', {producto: producto, edit: true}])
  }
  updatedProducto(){
    if(this.privilegios.modificar == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
    this.productoService.updateProducto(this.producto.id, this.producto)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
    }
  }

  addCart(cantidad:number, pedido: any, producto: any){   
    console.log("Le estoy pasando el nombre: ", this.producto.nombre, this.producto.id)    
    this.carritoServicio.monto = this.carritoServicio.monto + (cantidad * producto.precio_unitario);   

    if (this.carritoServicio.indiceVenta == 0){
      this.carritoServicio.pedido[0].id = this.producto.id;      
      this.carritoServicio.pedido[0].nombre = this.producto.nombre;
      this.carritoServicio.pedido[0].total = cantidad * this.producto.precio_unitario;
      this.carritoServicio.pedido[0].precio =  this.producto.precio_unitario;
      this.carritoServicio.pedido[0].monto =  this.carritoServicio.monto;
      this.carritoServicio.pedido[0].fecha = this.carritoServicio.hoyFecha();
      this.carritoServicio.pedido[0].cantidad = cantidad;
      console.log(this.carritoServicio.pedido[0]);
      this.carritoServicio.indiceVenta = this.carritoServicio.indiceVenta + 1;
    }
    else {
      this.carritoServicio.pedido.push({
        id: this.pedido.id,
        nombre: this.pedido.nombre,
        precio: this.producto.precio_unitario,
        monto:  this.carritoServicio.monto,
        fecha: this.pedido.fecha,
        cantidad: this.pedido.cantidad
      })
      this.carritoServicio.indiceVenta = this.carritoServicio.indiceVenta + 1;      
      console.log(this.carritoServicio.pedido);
    }

  }

  agregarProducto(producto:any){
    if (this.carritoServicio.indiceCompra == 0){
      this.carritoServicio.pedido[0].producto = producto.nombre;
      this.carritoServicio.pedido[0].nombre = producto.nombre;
      this.carritoServicio.pedido[0].fecha = producto.fecha;
      this.carritoServicio.pedido[0].cantidad = producto.cantidad;
      console.log(this.carritoServicio.pedido[0]);
    }

    
  }

}
