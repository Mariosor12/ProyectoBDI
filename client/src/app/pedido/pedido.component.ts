import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService} from '../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import {ServicioGeneralService} from '../services/servicio-general.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) {
    this.est = 'Pendiente';
   }

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
    proveedor: 0,
    cantidad: 0
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
    productor: 0,
    cond: 0,
    pago: 0
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

  catalogo: any = [{
    id: 0,
    nombre: '',
    inombre: '',
    ingnombre: '',
    exclusividad: '',
    precio: 0
  }];

  clave: any = {
    id:0
  };

  perfume: any = [{
    id: 0,
    ingrediente: 0,
    materia: 0,
    contrato: 0
  }];

  edit: boolean = false;
  vista: string;
  est: string = 'Pendiente';
  cantidad: number;
  totalm: number

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
            productor: params.productor,
            cond: params.cond,
            pago: params.pago
           };
           this.perfume[0] ={
            ingrediente: params.ingrediente,
            materia: params.materia,
            contrato: params.id,
            estatus: params.est
           };
           this.catalogo ={
            precio: params.precio
           };
           this.edit = true;      
    }
    // this.getAliados();
    
    // console.log(this.contrato[0])
    console.log(this.perfume[0])
    this.pedido[0].fechai = this.hoyFecha();
  }


  SaveNuevoProducto() {
    this.edit = false
    this.pedido[0].cond = this.clave[0].id;
    this.pedido[0].pago = this.perfume[0].ingrediente;
    this.pedido[0].proveedor = this.contrato[0].proveedor;
    console.log(this.pedido[0])
    //this.sg.saveContrato(this.contratos);
    this.sg.savePedido(this.pedido[0]).subscribe(
        res => {
          console.log(res);
          console.log('Insertado')
          // this.router.navigate(['/catalogo/add']);
          // this.contratos = res; // Esto esta mal.

        },
        err => console.error(err)
      )
  }

  SaveNuevoProductoCant() {
    this.edit = false
    console.log(this.pedido[0])
    //this.sg.saveContrato(this.contratos);
    this.sg.savePedidoCant(this.pedido[0]).subscribe(
        res => {
          console.log(res);
          // console.log('Insertado')
          // this.router.navigate(['/catalogo/add']);
          // this.contratos = res; // Esto esta mal.

        },
        err => console.error(err)
      )
  }

  updatedContrato(){
    delete this.contrato.nombrep;
    delete this.contrato.nombrepr;
    console.log(this.contrato[0])
    this.sg.updateContrato(this.contrato[0]).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/contratos']);
        // this.contratos = res; // Esto esta mal.

      },
      err => console.error(err)
    )
  }

  getAliados(){
    this.sg.getoneCondicionCond(this.perfume[0]).subscribe(
      res => {
        this.clave = res;
        console.log(this.clave);
      },
      err => console.log(err)
    )
  }

  addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}
hoyFecha(){
  var hoy = new Date();
      var dd = hoy.getDate();
      var mm = hoy.getMonth()+1;
      var yyyy = hoy.getFullYear();
      
      dd = this.addZero(dd);
      mm = this.addZero(mm);


      return dd+'/'+mm+'/'+yyyy;
}

calcularTotal(){
  this.pedido[0].total = this.pedido[0].cantidad * this.catalogo.precio
}

}
