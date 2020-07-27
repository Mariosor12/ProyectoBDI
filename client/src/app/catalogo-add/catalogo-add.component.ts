import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CommonService } from './../services/common.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CarritoService } from './../services/carrito.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ContratoComponent} from '../contrato/contrato.component';

@Component({
  selector: 'app-catalogo-add',
  templateUrl: './catalogo-add.component.html',
  styleUrls: ['./catalogo-add.component.css']
})
export class CatalogoAddComponent implements OnInit {

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
    perfume: 0,
    ingrediente: '',
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

  dtTrigger:Subject<any> = new Subject();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) {
   }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
           this.contrato ={
            id: params.id,
            proveedor: params.proveedor,
            productor: params.productor
           };
           this.perfume[0] ={
            contrato: params.contrato,
            productor: params.productor
           };
           this.edit = true;      
    }
    console.log(this.perfume);
    this.perfume[0].contrato = this.contrato.id;
    console.log(this.aliados);
    this.getPerfumeP(this.contrato);
    this.getIngreP(this.contrato);
    this.getIngMateriaP(this.contrato);
  }

  SaveNuevoProducto() {
    // this.contrato.id = this.perfume.productor;
    delete this.perfume.id;
    // this.perfume[0].contrato = this.contrato.id;
    this.perfume[0].productor = this.contrato.productor;
    // delete this.contrato.nombrepr;
    console.log(this.perfume[0])
    //this.sg.saveContrato(this.contratos);
    this.sg.saveCatalogo(this.perfume[0]).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/catalogo', this.contrato.proveedor, this.contrato.productor, this.contrato.id]);
          // this.contratos = res; // Esto esta mal.

        },
        err => console.error(err)
      )
  }

  SaveNuevoProducto1() {
    // this.contrato.id = this.perfume.productor;
    delete this.perfume.id;
    // this.perfume[0].contrato = this.contrato.id;
    this.perfume[0].productor = this.contrato.productor;
    // delete this.contrato.nombrepr;
    console.log(this.perfume[0])
    //this.sg.saveContrato(this.contratos);
    this.sg.saveCatalogoO(this.perfume[0]).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/catalogo', this.contrato.proveedor, this.contrato.productor, this.contrato.id]);
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
}
