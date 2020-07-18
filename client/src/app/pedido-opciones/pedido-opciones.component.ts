import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService} from '../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import {ServicioGeneralService} from '../services/servicio-general.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
@Component({
  selector: 'app-pedido-opciones',
  templateUrl: './pedido-opciones.component.html',
  styleUrls: ['./pedido-opciones.component.css']
})
export class PedidoOpcionesComponent implements OnInit {

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) { }

  evaluacion:any = [{
    fechai: '',
    fechaf: '',
    peso: 0,
    tipo: '',
    criterio: 0,
    productor: 0
  }];

  pedido:any = [{
    fechai: '',
    fechaf: '',
    factura: 0,
    estatus: '',
    total: 0,
    cond: 0,
    pago: 0,
    proveedor: 0
  }];

  evaluaciones:any = [{
    id: 0,
    nombre: ''
  }];

  contratos: any = [{
    id: 0,
    fechai: '',
    fechaf: '',
    descripcion: '',
    motivo: '',
    exclusivo: '',
    proveedor: 0,
    productor: 0
  }];

  contrato:any = [{
    id: 0,
    nombrep: '',
    nombrepr: '',
    fechai: '',
    fechaf: '',
    descripcion: '',
    motivo: '',
    exclusivo: '',
    proveedor: 0,
    productor: 0
  }];

  aliados: any = {
    id: 0,
    razon: '',
    pagina: '',
    tel: '',
    region: ''
  };

  aliadosp: any = {
    id: 0,
    nombre: '',
    pagina: '',
    tel: '',
    region: ''
  };

  clave: any = {
    id:0
  };

  perfume: any = [{
    id: 0,
    ingrediente: 0,
    materia: 0,
    contrato: 0
  }];


  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params){
           this.contrato[0] ={
            id: params.id,
            fechai: params.fechai,
            fechaf: params.fechaf,
            exclusivo: params.exclusivo,
            descripcion: params.descripcion,
            proveedor: params.proveedor,
            productor: params.productor
           };
           this.perfume[0] ={
            ingrediente: params.ingrediente,
            materia: params.materia,
            contrato: params.id,
            estatus: params.est
           };     
    }
    console.log(this.contrato[0].productor);
  }


gotoPedidos(){
  this.router.navigate(['/pedidos']);
}

gotoPedidosPendiente(){
  this.router.navigate(['/pedidospendiente', this.contrato[0].productor]);
}

gotoPedidosAceptados(){
  this.router.navigate(['/pedidosaceptados', this.contrato[0].productor]);
}
}
