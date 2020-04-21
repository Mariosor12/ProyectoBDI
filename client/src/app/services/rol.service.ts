import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getRoles(){
    return this.http.get(this.API_URL+'/rol');
  }

  getRol(id: number){
    return this.http.get(this.API_URL+'/rol/'+id);
  }

  deleteRol(id: number){
    return this.http.delete(this.API_URL+'/rol/'+id);
  }

  updateRol(rol: any  ){
    return this.http.put(this.API_URL+'/rol/'+rol.id, rol);
  }

  saveRol(rol: any){
    return this.http.post(this.API_URL+'/rol/', rol);
  }

  getPrivilegios(){
    return this.http.get(this.API_URL+'/privilegio');
  }

  getrolPri(id:number){
    return this.http.get(this.API_URL+'/privilegio/rolpri/'+id);
  }

  createRolPri(body:any){
    console.log(body);
    return this.http.post(this.API_URL+'/rolpri/', body);
  }

  getPrivilegiosNoRol(id:number){
    return this.http.get(this.API_URL+'/privilegio/rolpri/no/'+id);
  }

  deletePrivilegio(body:any){
    return this.http.delete(this.API_URL+'/rolpri/'+body.privilegio+"/"+body.rol);
  }
}
