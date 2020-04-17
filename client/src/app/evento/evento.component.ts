import { Component, OnInit, HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private eventoService: EventoService, private router: Router ) { }

  ngOnInit(): void {
    this.getEventos();
  }

editEvento(evento: Evento){
  console.log(evento);
  this.router.navigate(['/evento/edit', evento.id, evento.fecha_inicio, evento.fecha_fin, evento.nombre, evento.entradas_disponibles, evento.entradas_vendidas, evento.lugar])
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
    this.eventoService.deleteEvento(id).subscribe(
      res => {
      console.log(res);
      this.getEventos();
      },
      err => console.log(err)
    )
  }

}
