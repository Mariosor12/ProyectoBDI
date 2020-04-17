import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Evento } from '../models/evento';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventoService {


  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get(this.API_URL+'/evento');
  }

  getEvento(id: string){
    return this.http.get(this.API_URL+'/evento/'+id);
  }

  deleteEvento(id: string){
    return this.http.delete(this.API_URL+'/evento/'+id);
  }

  updateEvento(id: string | number, updatedEvento: Evento){
    return this.http.put(this.API_URL+'/evento/'+id, updatedEvento);
  }

  saveEvento(evento: Evento){
    return this.http.post(this.API_URL+'/evento/', evento);
  }
}
