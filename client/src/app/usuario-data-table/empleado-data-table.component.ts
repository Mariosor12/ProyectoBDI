import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { CommonService } from '../services/common.service';
import { IngresoService } from '../services/ingreso.service';
import { CarritoService } from './../services/carrito.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-empleado-data-table',
  templateUrl: './empleado-data-table.component.html',
  styleUrls: ['./empleado-data-table.component.css']
})
export class EmpleadoDataTableComponent implements OnInit {
  @ViewChild(DataTableDirective, {})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  loading:boolean = true;

  usuarios:any = [{
    id: 0,
    nombre: '',
    contrasena: '', 
    rol: ''
  }];

  edit: boolean;

  dtTrigger:Subject<any> = new Subject();

  index:number = 0;

  constructor(private common:CommonService, private router:Router, private usuario: IngresoService, private activatedRoute: ActivatedRoute, private cart: CarritoService) { }

  ngOnInit(): void {
    this.common.title = "Usuarios";
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.edit = true;
    this.getUsuarios();
  
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

  getUsuarios(){
    this.usuario.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
        this.dtTrigger.next();
        this.loading = false;
      },
      err => console.log(err)
    )
  }

  gotoProductos(cliente:any){
    this.cart.idCliente = cliente.id;
    this.router.navigate(['/productos']);
  }
  
  gotoAgregarUsuario(){
    this.router.navigate(['/usuarios/add']);
  }

  deleteUser(usuario:any){

  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  eliminar(usuario:any){
    this.index = this.usuarios.indexOf(usuario);
    console.log("index es: ", this.index);
    this.usuarios.splice(this.index, 1);
    this.rerender();
  }

  eliminarUsuario(usuario:any){
    this.usuario.deleteUsuario(usuario.id).subscribe(
      res => {        
        console.log("Borrado exitoso");
        this.eliminar(usuario);
      },
      err => console.log(err)
    )
  }

}
