import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService} from '../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import {ServicioGeneralService} from '../services/servicio-general.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) { }

  loading:boolean = true;
  kgPresentacion:any;
  idMinPre:any;

  producto:any = {
    id: 0,
    nombre: '',
    descripcion: '',
    fecha: 0,
     genero: 0,
     nombref: 0,
    nombretp: 0,
    nombrepe: 0

  };
  edit: boolean = false;

  pedido: any;
  presentacion:any;

  presentaciones:any = [{
    id: 0,
    cantidad: 0,
    costo:0 
  }];

  perpre:any = [{
    perfume: 0,
    presentacion: 0,
    costo: 0 
  }];

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
           this.producto ={
             id: params.id,
             nombre: params.nombre,
             descripcion: params.descripcion,
            genero: params.genero,
            nombref: params.nombref,
            nombretp: params.nombretp,
            nombrepe: params.nombrepe
           };
           this.edit = true;      
    }
    this.getPresentaciones();
  }

  SaveNuevoProducto() {
    delete this.producto.id;
    this.productoService.saveProducto(this.producto).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/producto']);
        },
        err => console.error(err)
      )
  }

  getPresentaciones(){
    this.sg.getPresentaciones().subscribe(
      res => {
        this.presentaciones = res;     
        this.buscarPre(this.producto);
        this.presentaciones.costo = this.presentacion.costo 
      },
      err => console.log(err)
    )
  }

  buscarPre(producto:any){
    console.log("El id que se pasa es: ",producto.id);
    console.log("El nombre que se pasa es: ",producto.nombre);
    console.log("todo completo: ",producto);
    this.producto = producto;
    this.sg.getPresentacionesById(producto.id).subscribe(
      res => {
        console.log(this.presentaciones);
        this.presentaciones = res;
        console.log(this.presentaciones);
        if (this.presentaciones == "Sin resultados"){
          this.presentaciones = [{
            id: 0,
            cantidad: 0,
            costo: 0
          }];
        }
      },
      err => console.log(err)
    )
  }
  

  public editarProducto(producto : Producto): void{
    this.router.navigate(['/producto', {producto: producto, edit: true}])
  }
  updatedProducto(){
    this.productoService.updateProducto(this.producto.id, this.producto)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
    
  }

  addCart(cantidad:number, pedido: any, producto: any, valor: string, presentacion: any){   
    console.log("Le estoy pasando el nombre: ", this.producto.nombre, this.presentacion) 
    this.presentacion = valor.split(' '); 
    this.carritoServicio.monto = this.carritoServicio.monto + (cantidad * this.presentacion[2]);  
    this.idMinPre = this.presentacion[0].split('-'); 
  

    if (this.carritoServicio.indiceVenta == 0){
      this.carritoServicio.pedido[0].id = this.producto.id;      
      this.carritoServicio.pedido[0].nombre = this.producto.nombre;
      this.carritoServicio.pedido[0].total = cantidad * this.presentacion[2];
       this.carritoServicio.pedido[0].precio =  this.presentacion[2];
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
        precio: this.presentacion[1],
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
