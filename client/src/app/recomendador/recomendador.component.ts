import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CommonService } from './../services/common.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CarritoService } from './../services/carrito.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ContratoComponent} from '../contrato/contrato.component';

@Component({
  selector: 'app-recomendador',
  templateUrl: './recomendador.component.html',
  styleUrls: ['./recomendador.component.css']
})
export class RecomendadorComponent implements OnInit {

  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;

  edit: boolean = false;
  dtOptions: DataTables.Settings = {};

  vista:string = '';
  loading:boolean = false;
  respuesta:any;

  recomendadores:any = [{
    id:0,
    palabra: ''
  }];

  recomendador:any = [{
    id:0,
    nombrep: '',
    genero: '',
    nombref: '',
    descripcionf: '',
    tipo: '',
    concentracion: 0,
    descripcion: '',
    palabra: ''
  }];

 

  dtTrigger:Subject<any> = new Subject();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
           this.edit = true;      
    }
    this.getRecomendador();
  
  }

  getRecomendador(){
    this.sg.getRecomendador().subscribe(
      res => {
        this.recomendadores = res;
        console.log(this.recomendadores);
      },
      err => console.log(err)
    )
  }

  getoneRecomendador(recomendador: any){
    this.sg.getoneRecomendador(recomendador).subscribe(
      res => {
        this.recomendador = res;
        recomendador = res;
        console.log(recomendador);
      },
      err => console.log(err)
    )
  }
  

  gotoInicio(){
    this.router.navigate(['/inicio']);
  }


}
