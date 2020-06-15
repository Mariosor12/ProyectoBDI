import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from './../services/common.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CarritoService } from './../services/carrito.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { CarritoComponent } from '../carrito/carrito.component';

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
    exclusividad: '',
    proveedor: 0,
    productor: 0
  }];

  contratos: any = [{
    id: 0,
    fechai: '',
    fechaf: '',
    descripcion: '',
    exclusividad: '',
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
 
  dtTrigger:Subject<any> = new Subject();


  constructor(private sg:ServicioGeneralService, private common:CommonService, private router:Router, private cart:CarritoService) { }

  ngOnInit(): void {
    this.loading = true;        
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
  }
  this.getContratos();
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
      this.dtTrigger.next();
      this.loading = false;
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
