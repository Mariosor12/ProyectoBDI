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


  aliadosp:any = [{
    id: 0,
    razon: '',
    pagina: '',
    tel: '',
    region: ''
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
  gotoEvaluacion(){
    this.router.navigate(['/evaluaciones']);
  }

  gotoCompras(){
    this.router.navigate(['/contratos']);
  }

  gotoRecomendador(){
    this.router.navigate(['/recomendador']);
  }

}
