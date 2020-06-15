import { Component, OnInit, HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarritoService} from '../services/carrito.service';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import {ServicioGeneralService} from '../services/servicio-general.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @HostBinding('class') classes = 'row';

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

  productos: any = [];

  presentacion:any;

  presentaciones:any = [{
    id: 0,
    cantidad: ''
  }];

  minPre:any = [{
    perfume: 0,
    presentacion: 0,
    costo: 0 
  }];

  constructor(private productoService: ProductoService, private router: Router, private cart: CarritoService, private sg: ServicioGeneralService ) { }

  ngOnInit(): void {
    this.getProductos();
  }

  editProducto(producto: Producto){
    console.log(producto);
    this.router.navigate(['/producto/edit', producto.id, producto.nombre, producto.nombre, producto.descripcion, producto.fecha_nacimiento, producto.genero, producto.fk_fijador, producto.fk_tipo_perfume, producto.fk_perfumista])
  }
  
  getProductos(){
    this.productoService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.log(err)
    )
  }
  
    DeleteProducto(id: string){
      this.productoService.deleteProducto(id).subscribe(
        res => {
        console.log(res);
        this.getProductos();
        },
        err => console.log(err)
      )
  }

  agregarProducto(producto:any){
    if (this.cart.indiceCompra == 0){
      this.cart.pedido[0].producto = producto.nombre;
      console.log(this.cart.pedido[0]);
    }
    
  }

  getPresentaciones(){
    this.sg.getPresentaciones().subscribe(
      res => {
        this.presentaciones = res; 
        this.loading = false;       
      },
      err => console.log(err)
    )
  }

  buscarPre(producto:any){
    console.log("El id que se pasa es: ",producto.id);
    console.log("El nombre que se pasa es: ",producto.nombre);
    console.log("todo completo: ",producto);
    this.productos = producto;
    this.sg.getPresentacionesById(producto.id).subscribe(
      res => {
        console.log(this.presentaciones);
        this.presentaciones = res; 
        console.log(this.presentaciones);
        if (this.presentaciones == "Sin resultados"){
          this.presentaciones = [{
            id: 0,
            cantidad: 0
          }];
        }
      },
      err => console.log(err)
    )
  }
  asociar(id:number, costo:number){    
   
   
    if (this.vista == 'AsociarMP'){
      this.minPre[0].presentacion = this.presentacion[0].tipo.split('-')[0];
      this.minPre[0].costo = costo * this.presentacion[0].tipo.split(' ')[2];
      this.minPre[0].perfume = id;      
      this.sg.checkMinPre(this.minPre[0]).subscribe(
        res => {          
          this.respuesta = res;
          console.log("respuesta es: ", this.respuesta);
          if (this.respuesta == "Sin resultados"){
            console.log("no consiguio a nadie");
            this.sg.saveMinPre(this.minPre[0]).subscribe(
              res => {
                console.log("Exitoso!");
              },
              err => console.log(err)
            )
          }
          else{
            console.log("si consiguio respuesta");
            alert("Ya se tiene asociado dicho mineral con la presentación escogida");
          }
        },
        err => console.log(err)
      )
      
    }
  }

}
