import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService} from '../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import {ServicioGeneralService} from '../services/servicio-general.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { CommonService } from './../services/common.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-pedidos-pendientes',
  templateUrl: './pedidos-pendientes.component.html',
  styleUrls: ['./pedidos-pendientes.component.css']
})
export class PedidosPendientesComponent implements OnInit {

  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;


  dtOptions: DataTables.Settings = {};

  vista:string = '';
  loading:boolean = true;
  respuesta:any;

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

  pedidos: any = [{
    clave: 0,
    fecha: '',
    fechaf: '',
    estatus: '',
    factura: 0,
    total: 0,
    nombre: '',
    tipo: '',
    transporte: '',
    costo: 0,
    recargo: 0,
    totalm: 0,
    cantidad: 0,
    cuota: 0,
    meses: 0,
    proveedor: 0,
    cond: 0,
    pago: 0
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


  edit: boolean = false;
  
 
  dtTrigger:Subject<any> = new Subject();

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute, private cart: CarritoService, private sg: ServicioGeneralService) { }

  ngOnInit() {
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
           this.clave[0] ={
            id: params.id
           };
           this.edit = true;      
    }
    this.loading = true;        
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.getAliados();
    console.log(this.contrato[0]);
  }

  ngOnDestroy(): void {    
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  getAliados(){
    // console.log(this.contrato[0].productor);
    this.sg.getonePedido(this.contrato[0].productor).subscribe(
      res => {
        this.pedidos = res;
        console.log(this.pedidos);
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
  }

  updatedPedido(){
    console.log(this.pedidos[0])
    this.sg.updatePedido(this.pedidos[0]).subscribe(
      res => {
        console.log(res);
        console.log(this.pedidos[0])
        // this.contratos = res; // Esto esta mal.

      },
      err => console.error(err)
    )
  }

  gotoAgregarAliado(){

  }

  gotoInicio(){
    this.router.navigate(['/inicio']);
  }

  deleteAliado(aliado:any){

  }

  gotoMinerales(aliado:any){
    
    /*if(this.cart.indiceCompra == 0){
      this.cart.pedido[0].aliado = aliado.nombre;
    }
    else {
      this.cart.pedido.push({
        aliado: aliado.nombre,
        producto:'',
        presentacion:'',
        cantidad:0,
        costo:0
      })
    }*/


    this.cart.aliadoActual = aliado.comercial;
    this.cart.idAliadoActual = aliado.id;
    this.router.navigate(['/producto/compra']);
  }

}
