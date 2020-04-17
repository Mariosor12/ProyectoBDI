import { Component, OnInit, HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  productos: any = [];

  constructor(private productoService: ProductoService, private router: Router ) { }

  ngOnInit(): void {
    this.getProductos();
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
        console.log(res);
        this.getProductos();
        },
        err => console.log(err)
      )
    }
}
