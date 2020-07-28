import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { CarritoComponent } from '../carrito/carrito.component';
import { Producto } from '../models/producto';
import { ProductoService} from '../services/producto.service';
import {ActivatedRoute} from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import {ServicioGeneralService} from '../services/servicio-general.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import {CatalogoAddComponent}  from '../catalogo-add/catalogo-add.component';
import { param } from 'jquery';

@Component({
  selector: 'app-evaluacion-data-table',
  templateUrl: './evaluacion-data-table.component.html',
  styleUrls: ['./evaluacion-data-table.component.css']
})
export class EvaluacionDataTableComponent implements OnInit {

  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  vista:string = '';
  loading:boolean = true;
  respuesta:any;

  evaluacion:any = [{
    fechai: '',
    fechaf: '',
    nombrep: '',
    nombrepr: '',
    tipo: '',
    rangoi: 0,
    rangof: 0,
    etiqueta:'',
    peso: 0,
    resultado: 0,
    criterio: 0,
    productor: 0,
    proveedor: 0
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
 
  dtTrigger:Subject<any> = new Subject();

  constructor(private sg:ServicioGeneralService, private common:CommonService, private router:Router, private cart:CarritoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params){
           this.evaluacion[0] ={
            productor: params.productor,
            proveedor: params.proveedor
          };    
    }
    this.loading = true;        
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    console.log(this.evaluacion[0])
    this.getEvaluacion();

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

  getEvaluacion(){
    this.sg.getEvaluacion().subscribe(
      res => {
        this.evaluacion = res;
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
  }

  gotoInicio(){
    this.router.navigate(['/inicio']);
  }
  PasarProductor(){
    console.log(this.evaluacion[0])
    this.router.navigate(['/contrato/add', this.evaluacion[0].productor]);
  }

}
