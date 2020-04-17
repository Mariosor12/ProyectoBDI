import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/evento';
import { EventoService} from '../services/evento.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit {


  

  constructor(private eventoService: EventoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  evento: Evento = {
    id: 0,
    fecha_inicio: '',
    fecha_fin: '',
    nombre: '',
    entradas_disponibles: 0,
    entradas_vendidas: 0,
    lugar: 0
  };
  edit: boolean = false;

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
           this.evento ={
             id: params.id,
             fecha_inicio: params.fecha_inicio,
             fecha_fin: params.fecha_fin,
             nombre: params.nombre,
             entradas_disponibles: params.entradas_disponibles,
             entradas_vendidas: params.entradas_vendidas,
             lugar: params.lugar
           };
           this.edit = true;      
    }
  }

  SaveNuevoEvento() {
    delete this.evento.id;
    this.eventoService.saveEvento(this.evento).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/evento']);
        },
        err => console.error(err)
      )
  }

  public editarEvento(evento : Evento): void{
    this.router.navigate(['/evento', {evento: evento, edit: true}])
  }
  updatedEvento(){
    this.eventoService.updateEvento(this.evento.id, this.evento)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

}
