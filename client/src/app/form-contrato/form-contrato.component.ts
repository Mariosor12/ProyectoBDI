import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService} from '../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import {ServicioGeneralService} from '../services/servicio-general.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import {CatalogoAddComponent}  from '../catalogo-add/catalogo-add.component';
import { EvaluacionFormComponent} from '../evaluacion-form/evaluacion-form.component';


@Component({
  selector: 'app-form-contrato',
  templateUrl: './form-contrato.component.html',
  styleUrls: ['./form-contrato.component.css']
})
export class FormContratoComponent implements OnInit {

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) { 
  }

  
  evaluacion:any = [{
    fechai: '',
    fechaf: '',
    peso: 0,
    tipo: '',
    criterio: 0,
    productor: 0
  }];

  evaluaciones:any = [{
    id: 0,
    nombre: ''
  }];

  contratos: any = [{
    id: 0,
    fechai: '',
    fechaf: '',
    descripcion: '',
    motivo: '',
    exclusivo: '',
    proveedor: 0,
    productor: 0
  }];

  contrato:any = [{
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
  }];

  aliados: any = {
    id: 0,
    razon: '',
    pagina: '',
    tel: '',
    region: ''
  };

  aliadosp: any = {
    id: 0,
    nombre: '',
    pagina: '',
    tel: '',
    region: ''
  };

  perfume: any = [{
    id: 0,
    nombre: ''
  }];

  edit: boolean = false;
  vista: string;

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
           this.contrato ={
            id: params.id,
            fechai: params.fechai,
            fechaf: params.fechaf,
            descripcion: params.descripcion,
            proveedor: params.proveedor,
            productor: params.productor
           };
           this.perfume ={
            id: params.id,
            nombre: params.nombre
           };
           this.evaluacion ={
            id: params.id,
            profuctor: params.productor
           };
           this.evaluaciones ={
            id: params.id,
            productor: params.productor
           };
           this.edit = true;      
    }
    this.getAliados();
  
    
  }


  SaveNuevoProducto() {
    delete this.contrato[0].id;
    delete this.contrato[0].nombrep;
    delete this.contrato[0].nombrepr;
    console.log(this.contrato[0])
    //this.sg.saveContrato(this.contratos);
    this.sg.saveContrato(this.contrato[0]).subscribe(
        res => {
          console.log(res);
          // this.router.navigate(['/catalogo/add']);
          // this.contratos = res; // Esto esta mal.

        },
        err => console.error(err)
      )
  }

  updatedContrato(){
    delete this.contrato.nombrep;
    delete this.contrato.nombrepr;
    console.log(this.contrato)
    this.sg.updateContrato(this.contrato).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/contratos']);
        // this.contratos = res; // Esto esta mal.

      },
      err => console.error(err)
    )
  }

  getAliados(){
    this.sg.getAliadosPro().subscribe(
      res => {
        this.aliadosp = res;
        
      },
      err => console.log(err)
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
  
  getPerfumeP(contrato: any){
    this.sg.getPerfumeP(contrato).subscribe(
      res => {
        this.perfume = res;
        // console.log(this.perfume);
      },
      err => console.log(err)
    )
  }

}

