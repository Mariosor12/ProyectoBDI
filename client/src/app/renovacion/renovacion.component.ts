import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CarritoService } from './../services/carrito.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-renovacion',
  templateUrl: './renovacion.component.html',
  styleUrls: ['./renovacion.component.css']
})
export class RenovacionComponent implements OnInit {

  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;


  dtOptions: DataTables.Settings = {};

  vista:string = '';
  loading:boolean = true;
  respuesta:any;

  renovacion:any = [{
    id: 0,
    clave: 0,
    fecha: '',
    fechai: '',
    nombrep: '',
    nombrepr: '',
    descripcion: '',
    motivo: '',
    exclusivo: '',
    proveedor: 0,
    productor: 0,
    
  }];

  renovaciones:any = [{
    id: 0,
    clave: 0,
    fecha: '',
    fechai: '',
    nombrep: '',
    nombrepr: ''
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
 
  index:number = 0;

  dtTrigger:Subject<any> = new Subject();

  constructor(private sg:ServicioGeneralService, private common:CommonService, private router:Router, private cart:CarritoService) { }

  ngOnInit(): void {
    this.loading = true;        
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.getAliados();
    // console.log(this.renovacion)

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
    this.sg.getRenovacion().subscribe(
      res => {
        this.renovacion = res;
        console.log(this.renovacion)
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
  }

  gotoAgregarAliado(){

  }

  gotoInicio(){
    this.router.navigate(['/evaluaciones']);
  }

  eliminarLista(renovacion:any){
    this.index = this.renovacion.indexOf(renovacion);
    this.renovacion.splice(this.index, 1);
    this.rerender();
  }

  deleteRenovacion(renovacion:any){
    this.sg.deleteRenovacion(renovacion.id).subscribe(
      res => {
        console.log("Borrado exitoso");
        this.eliminarLista(renovacion);
      },
      err => console.log("Error al tratar de eliminar al cliente")
    )
  }

}
