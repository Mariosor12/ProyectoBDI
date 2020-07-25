import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CarritoService } from './../services/carrito.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-evaluacionfinal',
  templateUrl: './evaluacionfinal.component.html',
  styleUrls: ['./evaluacionfinal.component.css']
})
export class EvaluacionfinalComponent implements OnInit {

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

  constructor(private sg:ServicioGeneralService, private common:CommonService, private router:Router, private cart:CarritoService) { }

  ngOnInit() {
    this.loading = true;        
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

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
    this.sg.getEvaluacionFinal().subscribe(
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

}
