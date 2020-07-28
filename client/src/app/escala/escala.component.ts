import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CommonService } from './../services/common.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CarritoService } from './../services/carrito.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ContratoComponent} from '../contrato/contrato.component';

@Component({
  selector: 'app-escala',
  templateUrl: './escala.component.html',
  styleUrls: ['./escala.component.css']
})
export class EscalaComponent implements OnInit {

  
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

  escala: any = [{
    fechai: '',
    fechaf: '',
    rangoi: 0,
    rangof: 0,
    productor: 0
  }];

  evaluacion:any = [{
    fechai: '',
    fechaf: '',
    peso: 0,
    tipo: '',
    criterio: 0,
    productor: 0,
    proveedor: 0
  }];

  dtTrigger:Subject<any> = new Subject();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) {
   }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params){
           this.evaluacion[0] ={
            productor: params.productor,
            proveedor: params.proveedor
          };
           this.edit = true;      
    }

    console.log(this.evaluacion[0]);
  }

  SaveNuevoProducto() {
    this.perfume[0].productor = this.contrato.productor;
    this.escala[0].productor = this.evaluacion[0].productor;
    // delete this.contrato.nombrepr;
    console.log(this.perfume[0])
    //this.sg.saveContrato(this.contratos);
    this.sg.saveEscala(this.escala[0]).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/resultado', this.evaluacion[0].proveedor, this.evaluacion[0].productor]);
          // this.contratos = res; // Esto esta mal.

        },
        err => console.error(err)
      )
  }


  gotoInicio(){
    this.router.navigate(['/inicio']);
  }

}
