import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CarritoService } from './../services/carrito.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;


  dtOptions: DataTables.Settings = {};

  vista:string = '';
  loading:boolean = true;
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
    cantidad: 0,
    exclusividad: '',
    proveedor: 0,
    productor: 0

  }];

  dtTrigger:Subject<any> = new Subject();


  constructor(private sg:ServicioGeneralService, private common:CommonService, private router:Router, private cart:CarritoService) { }

  ngOnInit(): void {
    this.loading = true;        
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
  }
  this.getContratos();
  this.getContrato();
  this.getCatalogo();
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

getContratos(){
  this.sg.getContratos().subscribe(
    res => {
      this.contrato = res;
      console.log(this.contrato);
      this.dtTrigger.next();
      this.loading = false;
    },
    err => console.log(err)
  )
}

getContrato(){
  this.sg.getContratoc().subscribe(
    res => {
      this.contratos = res;
      console.log(this.contratos);
      this.dtTrigger.next();
      this.loading = false;
    },
    err => console.log(err)
  )
}

getCatalogo(){
  this.sg.getCatalogos().subscribe(
    res => {
      this.catalogo = res;
      console.log(this.catalogo);
      this.dtTrigger.next();
      this.loading = false;
    },
    err => console.log(err)
  )
}

getCatalogos(contrato: any){
  this.sg.getCatalogo(contrato).subscribe(
    res => {
      this.catalogo = res;
      console.log(this.catalogo);
    },
    err => console.log(err)
  )
}

gotoInicio(){
  this.router.navigate(['/inicio']);
}

gotoContrato(){
  this.router.navigate(['/contrato/add']);
}

gotoMinerales(contrato:any){
    
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

  this.router.navigate(['/contrato/add']);
}

}
