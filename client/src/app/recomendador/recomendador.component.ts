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

  recomendadore:any = [{
    id:0,
    palabra: ''
  }];

  recomendadoresInt:any = [{
    id:0,
    palabra: ''
  }];

  recomendadoresCar:any = [{
    id:0,
    palabra: ''
  }];

  recomendadoresFam:any = [{
    id:0,
    palabra: ''
  }];

  recomendadoresOca:any = [{
    id:0,
    palabra: ''
  }];

  recomendadoresPer:any = [{
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
    palabra: '',
    palabra2: '',
    palabra3: '',
    palabra4: '',
    palabra5: '',
    palabra6: '',
    palabra7: ''
  }];

 

  dtTrigger:Subject<any> = new Subject();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
           this.edit = true;      
    }
    this.getRecomendador();
    this.getRecomendadorPer();
    this.getRecomendadorPerInt();
    this.getRecomendadorPerCar();
    this.getRecomendadorPerFam();
    this.getRecomendadorPerOca();
    this.getRecomendadorPerPer();
  
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

  getRecomendadorPerInt(){
    this.sg.getRecomendadorPerInt().subscribe(
      res => {
        this.recomendadoresInt = res;
        console.log(this.recomendadoresInt);
      },
      err => console.log(err)
    )
  }

  getRecomendadorPerCar(){
    this.sg.getRecomendadorPerCar().subscribe(
      res => {
        this.recomendadoresCar = res;
        console.log(this.recomendadoresCar);
      },
      err => console.log(err)
    )
  }

  getRecomendadorPerFam(){
    this.sg.getRecomendadorPerFam().subscribe(
      res => {
        this.recomendadoresFam = res;
        console.log(this.recomendadoresFam);
      },
      err => console.log(err)
    )
  }

  getRecomendadorPerOca(){
    this.sg.getRecomendadorPerOca().subscribe(
      res => {
        this.recomendadoresOca = res;
        console.log(this.recomendadoresOca);
      },
      err => console.log(err)
    )
  }

  getRecomendadorPerPer(){
    this.sg.getRecomendadorPerPer().subscribe(
      res => {
        this.recomendadoresPer = res;
        console.log(this.recomendadoresPer);
      },
      err => console.log(err)
    )
  }

  getRecomendadorPer(){
    this.sg.getRecomendadorPer().subscribe(
      res => {
        this.recomendadore = res;
        console.log(this.recomendadore);
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
