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
    exclusividad: '',
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
    exclusividad: '',
    proveedor: 0,
    productor: 0
  }];

  edit: boolean = false;

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
           this.contratos ={
            id: params.id,
            fechai: params.fechai,
            fechaf: params.fechaf,
            descripcion: params.descripcion,
            exclusividad: params.exclusividad,
            proveedor: params.proveedor,
            productor: params.productor
           };
           this.edit = true;      
          }
  }

  SaveNuevoProducto() {
    delete this.contratos.id;
    this.sg.saveContrato(this.contratos).subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
  }

}
