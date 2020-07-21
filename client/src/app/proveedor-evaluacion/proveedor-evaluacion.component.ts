import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService} from '../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import {ServicioGeneralService} from '../services/servicio-general.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import {CatalogoAddComponent}  from '../catalogo-add/catalogo-add.component';
import { EvaluacionFormComponent} from '../evaluacion-form/evaluacion-form.component';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-proveedor-evaluacion',
  templateUrl: './proveedor-evaluacion.component.html',
  styleUrls: ['./proveedor-evaluacion.component.css']
})
export class ProveedorEvaluacionComponent implements OnInit {

  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  evaluacion:any = [{
    fechai: '',
    fechaf: '',
    peso: 0,
    tipo: '',
    criterio: 0,
    productor: 0
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
    region: '',
    proveedor: 0
  };

  condicion: any = {
    id: 0,
    nombre: '',
    nombred: '',
    transporte: '',
    costo: 0,
    recargo: 0,
    total:0,
  };

  aliadosp: any = {
    id: 0,
    nombre: '',
    pagina: '',
    tel: '',
    region: '',
  };

  perfume: any = [{
    id: 0,
    nombre: ''
  }];

  tipopago:any = [{
    id:0,
    cuota: 0,
    porcuotas: 0,
    mes: 0
  }];

  envio:any = [{
    id:0,
    costo: 0,
    recargo: 0,
    transporte: '',
    direccion: 0,
    proveedor: 0
  }];

  producto:any = [{
    id:0,
    nombre: ''
  }];

  productoing:any = [{
    id:0,
    nombre: ''
  }];


  edit: boolean = false;
  vista: string;


  dtTrigger:Subject<any> = new Subject();

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) { 
  }

  

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
           this.contrato ={
            id: params.id,
            fechai: params.fechai,
            fechaf: params.fechaf,
            descripcion: params.descripcion,
            proveedor: params.proveedor,
            productor: params.productor
           };
           this.perfume ={
            id: params.id,
            nombre: params.nombre
           };
           this.evaluacion ={
            id: params.id,
            profuctor: params.productor
           };
           this.evaluaciones ={
            id: params.id,
            productor: params.productor
           };
           this.edit = true;      
    }
    this.getAliados();
  
    this.Aliados1();


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

  SaveNuevoProducto() {
    delete this.contrato[0].id;
    delete this.contrato[0].nombrep;
    delete this.contrato[0].nombrepr;
    console.log(this.contrato[0])
    //this.sg.saveContrato(this.contratos);
    this.sg.saveContrato(this.contrato[0]).subscribe(
        res => {
          console.log(res);
          // this.router.navigate(['/catalogo/add']);
          // this.contratos = res; // Esto esta mal.

        },
        err => console.error(err)
      )
  }

  updatedContrato(){
    delete this.contrato.nombrep;
    delete this.contrato.nombrepr;
    console.log(this.contrato)
    this.sg.updateContrato(this.contrato).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/contratos']);
        // this.contratos = res; // Esto esta mal.

      },
      err => console.error(err)
    )
  }

  getAliados(){
    this.sg.getAliadosPro().subscribe(
      res => {
        this.aliadosp = res;
        this.evaluacion = res;
        console.log(this.evaluacion)
      },
      err => console.log(err)
    )
  }

  Aliados1(){
    this.sg.getProveedorFiltro1().subscribe(
      res => {
        this.aliados = res;
        console.log(this.aliados);
      },
      err => console.log(err)
    )
  }
  
  getPerfumeP(condicion: any){
    this.sg.getCondProv(condicion).subscribe(
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
    console.log(this.aliados)
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

  getPerfumeP4(condicion: any){
    this.sg.getAliadoProv(condicion).subscribe(
      res => {
        this.producto = res;
        this.dtTrigger.next();
        console.log(this.producto)
        // console.log(this.perfume);
      },
      err => console.log(err)
    )
  }

  getPerfumeP3(condicion: any){
    this.sg.getAliadoProIng(condicion).subscribe(
      res => {
        this.productoing = res;
        this.dtTrigger.next();
        console.log(this.productoing)
        // console.log(this.perfume);
      },
      err => console.log(err)
    )
  }

}
