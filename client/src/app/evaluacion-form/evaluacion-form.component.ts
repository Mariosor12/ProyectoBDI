import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService} from '../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import {ServicioGeneralService} from '../services/servicio-general.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import {CatalogoAddComponent}  from '../catalogo-add/catalogo-add.component';

@Component({
  selector: 'app-evaluacion-form',
  templateUrl: './evaluacion-form.component.html',
  styleUrls: ['./evaluacion-form.component.css']
})
export class EvaluacionFormComponent implements OnInit {

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) { 
  }

  evaluacion:any = [{
    fechai: '',
    fechaf: '',
    peso: 0,
    tipo: '',
    criterio: 0,
    productor: 0,
    proveedor: 0
  }];

  aliadosp: any = {
    id: 0,
    nombre: '',
    pagina: '',
    tel: '',
    region: '',
    productor:0
  };

  contrato:any = {
    id: 0,
    nombrep: '',
    nombrepr: '',
    fechai: '',
    fechaf: '',
    descripcion: '',
    motivo: '',
    exclusivo: '',
    proveedor: 0,
    productor: 0
  };


  evaluaciones:any = [{
    id: 0,
    nombre: ''
  }];

  edit: boolean = false;
  vista: string;

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params){
           this.aliadosp[0] ={
             productor: params.productor
           };
           this.evaluacion[0] ={
            productor: params.productor,
            proveedor: params.proveedor
          };

           this.edit = true;      
    }
    this.aliadosp[0].productor = this.evaluacion[0].productor
  }

  SaveNuevoProducto() {
    console.log(this.aliadosp[0].productor)
    this.aliadosp[0].productor = this.evaluacion[0].productor;
    console.log(this.evaluacion[0].productor)
    //this.sg.saveContrato(this.contratos);
    this.sg.saveCriEval(this.evaluacion[0]).subscribe(
        res => {
          console.log(res);
          // this.router.navigate(['/catalogo/add']);
          // this.contratos = res; // Esto esta mal.

        },
        err => console.error(err)
      )
  }

  Aliados1(evaluaciones){
    this.sg.getProveedorFiltro(evaluaciones[0]).subscribe(
      res => {
        this.evaluaciones = res;
        console.log(this.evaluaciones);
      },
      err => console.log(err)
    )
  }
  getAliados(){
    this.sg.getAliadosPro().subscribe(
      res => {
        this.contrato = res;
        this.evaluacion = res;
        console.log(this.evaluacion)
        console.log(this.contrato.productor)
      },
      err => console.log(err)
    )
  }

}

