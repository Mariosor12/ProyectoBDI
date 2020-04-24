import { Component, OnInit, HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PrivilegioService } from '../services/privilegio.service';

import { EventoService } from '../services/evento.service';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {


  @HostBinding('class') classes = 'row';

  eventos: any = [];

  constructor(private eventoService: EventoService, private router: Router, private privilegios: PrivilegioService ) { }

  ngOnInit(): void {
    this.getEventos();
    this.privilegios.evaluar(this.privilegios.idRolActual);
  }

editEvento(evento: Evento){
  if(this.privilegios.modificar == false){
    alert("Error. No tiene permisos para acceder a este modulo");
  }
  else {
  console.log(evento);
  this.router.navigate(['/evento/edit', evento.id, evento.fecha_inicio, evento.fecha_fin, evento.nombre, evento.entradas_disponibles, evento.entradas_vendidas, evento.lugar])
  }
}

getEventos(){
  this.eventoService.getEventos().subscribe(
    res => {
      this.eventos = res;
    },
    err => console.log(err)
  )
}

  DeleteEvento(id: string){
    if(this.privilegios.eliminar == false){
      alert("Error. No tiene permisos para acceder a este modulo");
    }
    else{
    this.eventoService.deleteEvento(id).subscribe(
      res => {
      console.log(res);
      this.getEventos();
      },
      err => console.log(err)
    )
    }
  }

}
