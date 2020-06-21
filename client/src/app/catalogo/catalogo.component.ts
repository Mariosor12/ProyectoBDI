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
    cantidad: 0,
    exclusividad: ''
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
           this.edit = true;      
    }
    this.getCatalogos(this.contrato);
  
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

}
