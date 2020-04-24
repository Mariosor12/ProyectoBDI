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

  addCart(cantidad:number, pedido:any, nombre: any){   
    console.log("Le estoy pasando el nombre: ", nombre);      
    this.carritoServicio.monto = this.carritoServicio.monto + (cantidad * pedido.precio);   

    if (this.carritoServicio.indiceVenta == 0){
      this.carritoServicio.pedido[0].id = this.pedido.id;      
      this.carritoServicio.pedido[0].nombre = this.pedido.nombre;
      this.carritoServicio.pedido[0].precio = cantidad * pedido.precio;
      this.carritoServicio.pedido[0].fecha = this.pedido.fecha;
      this.carritoServicio.pedido[0].cantidad = this.pedido.cantidad;
      console.log(this.carritoServicio.pedido);
      this.carritoServicio.indiceVenta = this.carritoServicio.indiceVenta + 1;
    }
    else {
      this.carritoServicio.pedido.push({
        id: this.pedido.id,
        nombre: this.pedido.nombre,
        precio: cantidad * pedido.precio,
        fecha: this.pedido.fecha,
        cantidad: this.pedido.cantidad
      })
      this.carritoServicio.indiceVenta = this.carritoServicio.indiceVenta + 1;      
      console.log(this.carritoServicio.pedido);
    }

  }

}
