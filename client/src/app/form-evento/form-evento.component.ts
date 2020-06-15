import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/evento';
import {ServicioGeneralService } from '../services/servicio-general.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CarritoService} from '../services/carrito.service';
import { CarritoComponent } from '../carrito/carrito.component';


@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit {


  

  constructor(private sg: ServicioGeneralService, private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService) { }

  loading:boolean = true;
  pro:any;
  selectedIngredient: any = "";
  precio: any;

  aliados: any = {
    id: 0,
    razon: '',
    pagina: '',
    tel: '',
    activo: '',
    membresia: '',
    lugar: ''
  };

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

  ingredientes: any = {
    id:0,
    nombre:'',
    costo:0,
    proveedor:0
  }
  pedido: any;
  edit: boolean = false;
  ingrediente: any;
  name:any;

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
           this.aliados ={
             id: params.id,
             razon: params.razon,
             pagina: params.pagina,
             tel: params.tel,
             activo: params.activo,
             membresia: params.membresia,
             lugar: params.lugar
           };
           this.ingredientes={
            id: params.id,
            nombre: params.nombre,
            costo: params.costo,
            proveedor: params.proveedor
           }
           this.edit = true;      
    }
    this.getPresentaciones();
  }

  // SaveNuevoEvento() {
  //   delete this.evento.id;
  //   this.eventoService.saveEvento(this.evento).subscribe(
  //       res => {
  //         console.log(res);
  //         this.router.navigate(['/evento']);
  //       },
  //       err => console.error(err)
  //     )
  // }

  getPresentaciones(){
    this.sg.getIngredientes().subscribe(
      res => {
        this.ingredientes = res;     
        console.log(this.ingrediente)
        this.buscarPre(this.aliados, this.ingredientes);
      },
      err => console.log(err)
    )
  }

  buscarPre(aliados:any, ingredientes: any){
    console.log("El id que se pasa es: ",aliados.id, ingredientes.id);
    console.log("El nombre que se pasa es: ",aliados.razon, ingredientes.nombre);
    console.log("todo completo: ",aliados);
    this.aliados = aliados;
    this.sg.getIngre(aliados.id).subscribe(
      res => {
        // console.log(this.ingredientes);
        this.ingredientes = res;
        console.log(this.ingredientes);

        if (this.ingredientes == "Sin resultados"){
          this.ingredientes = [{
            id: 0,
            nombre: '',
            costo:0,
            proveedor: 0
          }];
        }
      },
      err => console.log(err)
    )
  }

  public editarEvento(evento : Evento): void{
    this.router.navigate(['/evento', {evento: evento, edit: true}])
  }
  // updatedEvento(){
  //   this.eventoService.updateEvento(this.evento.id, this.evento)
  //   .subscribe(
  //     res => {
  //       console.log(res);
  //       this.router.navigate(['/']);
  //     },
  //     err => console.log(err)
  //   )
  // }

  // retorno(ingredientes: any){
  //   while()

  // }

  addCart(cantidad:number, pedido: any, producto: any, valor: any, ingredientes: any){   
    console.log("Le estoy pasando el nombre: ", ingredientes.nombre) 
    ingredientes = valor.split('-');  
    this.name = ingredientes[0].split('-'); 
    this.precio = ingredientes[1].split('-'); 
    this.ingredientes = valor.split(' ');  
    this.pro = this.ingredientes[1].split('-'); 
    this.carritoServicio.monto = this.carritoServicio.monto + (cantidad * this.precio); 
    console.log(ingredientes);
    console.log(this.precio);

    if (this.carritoServicio.indiceCompra == 0){
      this.carritoServicio.pedido[0].id = this.aliados.id;      
      this.carritoServicio.pedido[0].nombre = this.name;
      this.carritoServicio.pedido[0].total = cantidad * this.precio;
       this.carritoServicio.pedido[0].precio =  this.precio;
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
        precio: this.pro[1],
        monto:  this.carritoServicio.monto,
        fecha: this.pedido.fecha,
        cantidad: this.pedido.cantidad
      })
      this.carritoServicio.indiceCompra = this.carritoServicio.indiceCompra + 1;      
      console.log(this.carritoServicio.pedido);
    }

  }

  agregarProducto(ingredientes:any){
    if (this.carritoServicio.indiceCompra == 0){
      this.carritoServicio.pedido[0].producto = ingredientes.nombre;
      this.carritoServicio.pedido[0].nombre = ingredientes.nombre;
      this.carritoServicio.pedido[0].fecha = ingredientes.fecha;
      this.carritoServicio.pedido[0].cantidad = ingredientes.cantidad;
      console.log(this.carritoServicio.pedido[0]);
    }

    
  }

  changed(event: any) {
    console.log("cambio: ", event.target);
  }

}
