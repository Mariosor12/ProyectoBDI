import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CarritoService } from './../services/carrito.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-catalogo-data-table',
  templateUrl: './catalogo-data-table.component.html',
  styleUrls: ['./catalogo-data-table.component.css']
})
export class CatalogoDataTableComponent implements OnInit {

  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;


  dtOptions: DataTables.Settings = {};

  vista:string = '';
  loading:boolean = true;
  respuesta:any;

  catalogo: any = [{
    id: 0,
    nombre: '',
    cantidad: 0,
    exclusividad: ''
  }];

  dtTrigger:Subject<any> = new Subject();

  constructor(private sg:ServicioGeneralService, private common:CommonService, private router:Router, private cart:CarritoService) { }

  ngOnInit(): void {
    this.loading = true;        
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
  }
  this.getCatalogo();
  }

  getCatalogo(){
    this.sg.getCatalogos().subscribe(
      res => {
        this.catalogo = res;
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
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

}
