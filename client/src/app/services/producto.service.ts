import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Producto } from '../models/producto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(this.API_URL+'/producto');
  }

  getProducto(id: string){
    return this.http.get(this.API_URL+'/producto/'+id);
  }

  deleteProducto(id: string){
    return this.http.delete(this.API_URL+'/producto/'+id);
  }

  updateProducto(id: string | number, updatedProducto: Producto){
    return this.http.put(this.API_URL+'/producto/'+id, updatedProducto);
  }

  saveProducto(producto: Producto){
    return this.http.post(this.API_URL+'/producto/', producto);
  }
}