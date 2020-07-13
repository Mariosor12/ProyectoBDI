import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CommonService } from './../services/common.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CarritoService } from './../services/carrito.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ContratoComponent} from '../contrato/contrato.component';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  
  
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;

  edit: boolean = false;
  dtOptions: DataTables.Settings = {};

  vista:string = '';
  loading:boolean = false;
  respuesta:any;

  contrato:any = [{
    id: 0,
    nombrep: '',
    nombrepr: '',
    fechai: '',
    fechaf: '',
    descripcion: '',
    proveedor: 0,
    productor: 0
  }];

  contratos: any = [{
    id: 0,
    fechai: '',
    fechaf: '',
    descripcion: '',
    proveedor: 0,
    productor: 0
  }];

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

  catalogo: any = [{
    id: 0,
    nombre: '',
    inombre: '',
    ingnombre: '',
    exclusividad: ''
  }];

  perfume: any = [{
    id: 0,
    nombre: '',
    cantidad: 0,
    exclusividad: '',
    contrato: 0,
    recomendador: 0,
    productor: 0
  }];

  condicioncon: any = {
    id: 0,
    envio: 0,
    pago: 0,
    contrato: 0
  };

  tipopago:any = [{
    id:0,
    cuota: 0,
    porcuotas: 0,
    mes: 0
  }];

  condicion: any = {
    id: 0,
    nombre: '',
    nombred: '',
    transporte: '',
    costo: 0,
    recargo: 0,
    total:0,
  };


  envio:any = [{
    id:0,
    costo: 0,
    recargo: 0,
    transporte: '',
    direccion: 0,
    proveedor: 0
  }];


  dtTrigger:Subject<any> = new Subject();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) { }


  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
           this.catalogo ={
            id: params.id,
            nombre: params.nombre,
            cantidad: params.cantidad,
            descripcion: params.descripcion,
            exclusividad: params.exclusividad
           };
           this.contrato ={
            id: params.id,
            proveedor: params.proveedor,
            productor: params.productor
           };
           this.perfume ={
            id: params.id,
            contrato: params.id,
            proveedor: params.proveedor,
            productor: params.productor
           };
           this.edit = true;      
    }
    this.getCatalogos(this.contrato);
  
  }

  getCatalogos(contrato: any){
    this.sg.getCatalogo(contrato).subscribe(
      res => {
        this.catalogo = res;
        this.perfume = res;
        console.log(this.catalogo);
        console.log(this.perfume);
      },
      err => console.log(err)
    )
  }
  
  getPerfumeP2(contrato: any){
    this.sg.getCondProv(contrato).subscribe(
      res => {
        this.condicion = res;
        this.dtTrigger.next();
        console.log(this.condicion)
        // console.log(this.perfume);
      },
      err => console.log(err)
    )
  }

  getPerfumeP1(condicion: any){
    this.sg.getPagoProv(condicion).subscribe(
      res => {
        this.tipopago = res;
        this.dtTrigger.next();
        console.log(this.tipopago)
        // console.log(this.perfume);
      },
      err => console.log(err)
    )
  }

  gotoInicio(){
    this.router.navigate(['/inicio']);
  }

}
