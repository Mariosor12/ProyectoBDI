import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CommonService } from './../services/common.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CarritoService } from './../services/carrito.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ContratoComponent} from '../contrato/contrato.component';

@Component({
  selector: 'app-condicion-contrato',
  templateUrl: './condicion-contrato.component.html',
  styleUrls: ['./condicion-contrato.component.css']
})
export class CondicionContratoComponent implements OnInit {

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
    productor: 0,
    ingrediente: 0,
    hola: 0
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
    exclusividad: '',
    precio: 0
  }];

  perfume: any = [{
    perfume: 0,
    ingrediente: 0,
    materia: '',
    contrato: 0
  }];

  perfumes: any = [{
    id: 0,
    nombre: ''
  }];

  ingredienteo: any = [{
    id: 0,
    nombre: ''
  }];

  ingmateria: any = [{
    id: 0,
    nombre: ''
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
    if (params){
           this.contrato ={
            id: params.id,
            proveedor: params.proveedor,
            productor: params.productor
           };
           this.perfume[0] ={
            contrato: params.contrato,
            ingrediente: params.ingrediente
           };
           this.catalogo ={
            precio: params.precio
           };
           this.edit = true;      
    }
    // console.log(this.perfume);
    // this.perfume[0].contrato = this.contrato.id;
    // console.log(this.aliados);
    // this.getPerfumeP(this.contrato);
    console.log(this.contrato);
    console.log(this.catalogo);

  }

  gotoContrato(){
    this.router.navigate(['/contratos']);
  }

  SaveNuevoProducto() {
    delete this.perfume[0].productor;
    this.perfume[0].contrato = this.contrato.id;
    console.log(this.perfume[0])
    this.sg.saveContratoCondicion(this.perfume[0]).subscribe(
        res => {
          console.log(res);
          // this.router.navigate(['/catalogo', this.contrato.proveedor, this.contrato.productor, this.contrato.id]);
          // this.contratos = res; // Esto esta mal.

        },
        err => console.error(err)
      )
  }

  getPerfumeP(contrato: any){
    this.sg.getPerfumeP(contrato).subscribe(
      res => {
        this.perfumes = res;
        console.log(this.perfume);
      },
      err => console.log(err)
    )
  }

  getIngreP(contrato: any){
    this.sg.getIngreP(contrato).subscribe(
      res => {
        this.ingredienteo = res;
        console.log(this.ingredienteo);
      },
      err => console.log(err)
    )
  }

  getIngMateriaP(contrato: any){
    this.sg.getIngMateriaP(contrato).subscribe(
      res => {
        this.ingmateria = res;
        console.log(this.ingredienteo);
      },
      err => console.log(err)
    )
  }

  gotoInicio(){
    this.router.navigate(['/inicio']);
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

  getPerfumeP1(contrato: any){
    this.sg.getPagoProv(contrato).subscribe(
      res => {
        this.tipopago = res;
        this.dtTrigger.next();
        console.log(this.tipopago)
        // console.log(this.perfume);
      },
      err => console.log(err)
    )
  }

}
