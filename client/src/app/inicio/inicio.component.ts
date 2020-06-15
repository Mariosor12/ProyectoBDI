import { Component, OnInit } from '@angular/core';
import { ServicioGeneralService} from '../services/servicio-general.service';
import { ProductoService} from '../services/producto.service';
import { Producto } from '../models/producto';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService} from '../services/carrito.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  hoy:Date;
  productos: any = [];

  vista:string = '';
  cantidad:number = 0;
  index:any = '';
  loading:boolean = true;
  respuesta:any;
  mineralId1:number = 0;
  mineralNombre1:string = '';
  mineralId2:number = 0;
  mineralNombre2:string = '';
  aComponer:boolean = false;
  created = false;

  aliados:any = [{
    id: 0,
    razon: '',
    pagina: '',
    tel: '',
    activo: '',
    membresia: '',
    lugar: ''
  }];

  aliadosp:any = [{
    id: 0,
    razon: '',
    pagina: '',
    tel: '',
    activo: '',
    membresia: '',
    lugar: ''
  }];

  presentacion:any = [{
    id: 0,
    cantidad: 0
  }];

  presentaciones:any = [{
    id: 0,
    cantidad: 0
  }];

  perpre:any = [{
    perfume: 0,
    presentacion: 0,
    costo: 0 
  }];

  constructor(private sg: ServicioGeneralService, private productoService: ProductoService, private router: Router, private carrito: CarritoService) {
    this.hoy = new Date();
   }

  
  ngOnInit(): void {
    this.getAliados();
    this.getAliados1();
    this.getProductos();
    this.carrito.resetAll();
  }


getAliados(){
  this.sg.getAliadosPro().subscribe(
    res => {
      this.aliadosp = res;
    },
    err => console.log(err)
  )
  
}
getAliados1(){
  this.sg.getAliProveedores().subscribe(
    res => {
      this.aliados = res;
    },
    err => console.log(err)
  )
  
}


  editProducto(producto: Producto){
    console.log(producto);
    this.router.navigate(['/producto/edit', producto.id, producto.nombre, producto.descripcion, producto.fecha_nacimiento, producto.genero, producto.fk_fijador, producto.fk_tipo_perfume, producto.fk_perfumista])
  }
  
  getProductos(){
    this.productoService.getProductos().subscribe(
      res => {
        this.productos = res;
        console.log(this.productos.id)
      },
      err => console.log(err)
    )
  }
  
    DeleteProducto(id: string){
      this.productoService.deleteProducto(id).subscribe(
        res => {
        console.log
        console.log(res);
        this.getProductos();
        },
        err => console.log(err)
      )
  }
}
