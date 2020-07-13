import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService} from '../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import {ServicioGeneralService} from '../services/servicio-general.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-renovacion-form',
  templateUrl: './renovacion-form.component.html',
  styleUrls: ['./renovacion-form.component.css']
})
export class RenovacionFormComponent implements OnInit {

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) { }

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
    productor: 0
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

  perfume: any = [{
    id: 0,
    nombre: ''
  }];

  index:number = 0;
  hoy: string;
  edit: boolean = false;
  vista: string;

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params){
           this.renovacion[0] ={
            id: params.id,
            clave: params.clave,
            clavep: params.clavep,
            clavepr: params.clavepr,
            fechaf: params.fechaf,
            descripcion: params.descripcion,
            proveedor: params.clavep,
            productor: params.clavepr,
            exclusivo: params.exclusivo
           };
     
    }
    // this.getAliados();
    this.renovacion[0].fechai = this.hoyFecha();
    this.renovacion[0].fechaf = this.añoFecha();
  
  }


  SaveNuevoProducto() {
    // delete this.contrato[0].id;
    // delete this.contrato[0].nombrep;
    // delete this.contrato[0].nombrepr;
    console.log(this.renovacion[0])
    //this.sg.saveContrato(this.contratos);
    this.sg.saveContrato(this.renovacion[0]).subscribe(
        res => {
          console.log(res);
          // this.router.navigate(['/catalogo/add']);
          // this.contratos = res; // Esto esta mal.

        },
        err => console.error(err)
      )
  }

  SaveNuevoProducto1() {
    // delete this.contrato[0].id;
    // delete this.contrato[0].nombrep;
    // delete this.contrato[0].nombrepr;
    console.log(this.renovacion[0])
    //this.sg.saveContrato(this.contratos);
    this.sg.saveRenovacion(this.renovacion[0]).subscribe(
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

  Aliados1(){
    this.sg.getProveedorFiltro1().subscribe(
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

  
  addZero(i) {
      if (i < 10) {
          i = '0' + i;
      }
      return i;
  }
hoyFecha(){
    var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth()+1;
        var yyyy = hoy.getFullYear();
        
        dd = this.addZero(dd);
        mm = this.addZero(mm);
 

        return dd+'/'+mm+'/'+yyyy;
}

añoFecha(){
  var hoy = new Date();
      var dd = hoy.getDate();
      var mm = hoy.getMonth()+1;
      var yyyy = hoy.getFullYear()+1;
      
      dd = this.addZero(dd);
      mm = this.addZero(mm);

      return dd+'/'+mm+'/'+yyyy;
}


deleteRenovacion(renovacion:any){
  this.sg.deleteRenovacion(renovacion[0].id).subscribe(
    res => {
      console.log("Borrado exitoso");
    },
    err => console.log("Error al tratar de eliminar al cliente")
  )
}

}
