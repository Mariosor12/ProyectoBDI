import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService} from '../services/producto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import {ServicioGeneralService} from '../services/servicio-general.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';


@Component({
  selector: 'app-form-contrato',
  templateUrl: './form-contrato.component.html',
  styleUrls: ['./form-contrato.component.css']
})
export class FormContratoComponent implements OnInit {

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute, private carritoServicio: CarritoService, private sg: ServicioGeneralService) { }

  contratos: any = [{
    id: 0,
    fechai: '',
    fechaf: '',
    descripcion: '',
    proveedor: 0,
    productor: 0
  }];

  contrato:any = {
    id: 0,
    nombrep: '',
    nombrepr: '',
    fechai: '',
    fechaf: '',
    descripcion: '',
    proveedor: 0,
    productor: 0
  };

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

  edit: boolean = false;

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
           this.edit = true;      
    }
    this.getAliados();
    this.getAliados1();
  }

  SaveNuevoProducto() {
    delete this.contrato.id;
    delete this.contrato.nombrep;
    delete this.contrato.nombrepr;
    console.log(this.contrato)
    //this.sg.saveContrato(this.contratos);
    this.sg.saveContrato(this.contrato).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/catalogo/add']);
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
  getAliados1(){
    this.sg.getAliProveedores().subscribe(
      res => {
        this.aliados = res;
      },
      err => console.log(err)
    )
  }

}
