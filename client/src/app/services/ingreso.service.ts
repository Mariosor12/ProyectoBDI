import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(this.API_URL+'/usuario');
  }

  getUsuario(id: string){
    return this.http.get(this.API_URL+'/usuario/'+id);
  }

  deleteUsuario(id: string){
    return this.http.delete(this.API_URL+'/usuario/'+id);
  }

  updateUsuario(id: string | number, updatedUsuario: Usuario){
    return this.http.put(this.API_URL+'/usuario/'+id, updatedUsuario);
  }

  saveUsuario(usuario: Usuario){
    return this.http.post(this.API_URL+'/usuario/', usuario);
  }

  getoneUsuario(nombre: string | number, contrasena: string){
    return this.http.get(this.API_URL+'/login/'+nombre+'/'+contrasena);
  }
}
