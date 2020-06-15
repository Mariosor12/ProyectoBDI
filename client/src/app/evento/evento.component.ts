import { Component, OnInit, HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { ServicioGeneralService } from '../services/servicio-general.service';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {


  @HostBinding('class') classes = 'row';

  aliados: any = {
    id: 0,
    razon: '',
    pagina: '',
    tel: '',
    activo: '',
    membresia: '',
    lugar: ''
  };

  aliadosp: any = {
    id: 0,
    razon: '',
    pagina: '',
    tel: '',
    activo: '',
    membresia: '',
    lugar: ''
  };

  ingredientes: any = {
    id:0,
    nombre:'',
    costo:0,
    proveedor:0
  }

  constructor(private sg: ServicioGeneralService, private router: Router) { }

  ngOnInit(): void {
    this.getProductor();
    this.getProveedor();
    this.getIngredientes();
  }

editEvento(aliados: any){
  console.log(aliados);
  this.router.navigate(['/evento/edit', aliados.id, aliados.razon, aliados.pagina, aliados.tel, aliados.activo, aliados.membresia, aliados.lugar])
}

getProductor(){
  this.sg.getAliadosPro().subscribe(
    res => {
      this.aliadosp = res;
    },
    err => console.log(err)
  )
}

getProveedor(){
  this.sg.getAliProveedores().subscribe(
    res => {
      this.aliados = res;
    },
    err => console.log(err)
  )
}

getIngredientes(){
  this.sg.getIngredientes().subscribe(
    res => {
      this.ingredientes = res;
    },
    err => console.log(err)
  )
}

  DeleteEvento(id: string){
    this.sg.deleteEvento(id).subscribe(
      res => {
      console.log(res);
      this.getProductor();
      this.getProveedor();
      },
      err => console.log(err)
    )
  }

}
