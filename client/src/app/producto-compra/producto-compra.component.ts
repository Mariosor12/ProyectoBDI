import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../models/producto';
import { CommonService } from './../services/common.service';
import { ServicioGeneralService } from './../services/servicio-general.service';
import { CarritoService } from './../services/carrito.service'
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-producto-compra',
  templateUrl: './producto-compra.component.html',
  styleUrls: ['./producto-compra.component.css']
})
export class ProductoCompraComponent implements OnInit {

  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective; 

  dtOptions: DataTables.Settings = {};

  vista:string = '';
  cantidad:number = 0;

  producto: any = {
    id: 0,
    nombre: '',
    proveedor:0
  };

  aliados: any = {
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
    proveedor:0
  }

  pedido: any;

  dtTrigger:Subject<any> = new Subject();


  constructor(private sg:ServicioGeneralService, private common:CommonService, private router:Router, private cart:CarritoService, private activatedRoute: ActivatedRoute) {
    this.vista = this.common.vista;
    this.vista = "Compra";
   }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
           this.aliados ={
             id: params.id,
             razon: params.razon,
             pagina: params.pagina,
             tel: params.tel,
             activo: params.activo,
             membresia: params.membresia,
             lugar: params.lugar
           };     
    }
    console.log("la vista dice que es: ",this.vista);  
    console.log(this.cart.idAliadoActual);
     
    this.common.title = "Productos";
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getProveedor(this.aliados);

    this.getPresentaciones();
  }

  ngOnDestroy(): void {    
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  getProveedor(aliados){
    this.sg.getAliProveedores().subscribe(
      res => {
        this.aliados = res;
      },
      err => console.log(err)
    )
  }

  getPresentaciones(){
    this.sg.getIngredientes().subscribe(
      res => {
        this.ingredientes = res;     
        this.buscarPre(this.aliados);
      },
      err => console.log(err)
    )
  }

  buscarPre(aliados:any){
    console.log("El id que se pasa es: ",aliados.id);
    console.log("El nombre que se pasa es: ",aliados.razon);
    console.log("todo completo: ",aliados);
    this.aliados = aliados;
    this.sg.getIngre(aliados.id).subscribe(
      res => {
        console.log(this.ingredientes);
        this.ingredientes = res;
        console.log(this.ingredientes);
        if (this.ingredientes == "Sin resultados"){
          this.ingredientes = [{
            id: 0,
            nombre: '',
            proveedor: 0
          }];
        }
      },
      err => console.log(err)
    )
  }

  agregarProducto(producto:any, cantidad:number){
    console.log("indice de compra es: ",this.cart.indiceCompra);   
    this.cart.monto = this.cart.monto + (cantidad * producto.precio);  
    if (cantidad > 0){
      if (this.cart.indiceCompra == 0){     
        this.cart.pedido[0].id = producto.id;      
        this.cart.pedido[0].nombre = producto.nombre;
        this.cart.pedido[0].total = this.cart.monto;
        this.cart.pedido[0].precio = producto.precio;
        this.cart.pedido[0].fecha = this.cart.hoyFecha();
        this.cart.pedido[0].cantidad = cantidad;
        console.log(this.cart.pedido[0]);
      }
      else {
          console.log("No Le voy a pasar el id: ", producto.id);
          this.cart.pedido.push({
          aliado: this.cart.aliadoActual,
          id: producto.id,
          nombre: producto.nombre,
          total: this.cart.monto,
          precio: producto.precio,
          fecha: this.cart.hoyFecha(),
          cantidad: cantidad
          })
      }
      this.cart.indiceCompra = this.cart.indiceCompra + 1;
    }
    
    console.log(this.cart.pedido);
    
  }

  FactPrev(){
    this.router.navigate(['/factura/compra']);
  }

}
