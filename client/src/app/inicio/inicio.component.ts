import { Component, OnInit } from '@angular/core';
import { EventoService} from '../services/evento.service';
import { Evento } from '../models/evento';
import { ProductoService} from '../services/producto.service';
import { Producto } from '../models/producto';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  eventos: any = [];
  productos: any = [];

  constructor(private eventoService: EventoService, private productoService: ProductoService, private router: Router ) { }

  ngOnInit(): void {
    this.getEventos();
    this.getProductos();
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

  editProducto(producto: Producto){
    console.log(producto);
    this.router.navigate(['/producto/edit', producto.id, producto.nombre, producto.descripcion, producto.precio_unitario, producto.fk_ale, producto.fk_lager])
  }
  
  getProductos(){
    this.productoService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.log(err)
    )
  }
  
    DeleteProducto(id: string){
      this.productoService.deleteProducto(id).subscribe(
        res => {
        console.log
        console.log(res);
        this.getProductos();
        },
        err => console.log(err)
      )
    }
}
