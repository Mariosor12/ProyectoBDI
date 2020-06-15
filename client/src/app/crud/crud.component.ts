import { Component, OnInit } from '@angular/core';

import { CommonService } from './../services/common.service'

import { Router } from '@angular/router';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  vista:string = '';

  constructor(private common:CommonService, private router:Router) { }

  ngOnInit(): void {
    this.vista = this.common.crudVista;    
    this.common.title = "CRUD";
    console.log("La CRUD vista es: ",this.common.crudVista);
    console.log("La vista es: ", this.vista);
  }

  gotoConsulta(){
      this.common.vista = '';
      if (this.common.crudVista === "Productos"){
        this.router.navigate(['/producto']);
      }
      else if(this.common.crudVista === "Usuarios"){
        this.router.navigate(['/usuario/list']);
      }
      else if(this.common.crudVista === "Aliados"){
        this.router.navigate(['/aliado/list']);
      }
      else if(this.common.crudVista === "Roles"){
        this.router.navigate(['/roles/list']);
      }
  }

  gotoAgrega(){
      this.common.vista = '';
      if (this.common.crudVista === "Productos"){
        this.router.navigate(['/producto/add']);
      }
      else if(this.common.crudVista === "Usuarios"){
        this.router.navigate(['/usuarios/add']);
      }
      else if(this.common.crudVista === "Eventos"){
        this.router.navigate(['/evento/add']);
      }
      else if(this.common.crudVista === "Roles"){
        this.router.navigate(['/rol/add']);
      }
  }  

  gotoVender(){
      this.common.vista = "Venta";
      this.router.navigate(['/clientes/list']);
  }

  gotoComprar(){

  }


  gotoFactP(){
      this.router.navigate(['/facturas/pendiente']);
  }

  cambiaVista(){
    this.vista = 'Roles';
    this.common.crudVista = 'Roles';
  }

  gotoConsultaP(tipo:string){
    this.common.vista = tipo;
    this.router.navigate(['/proyectos/list']);
    /*if(tipo == "Terminado"){
      
    }
    else if(tipo == "Ejecucion"){
    }
    else if(tipo == "Por Iniciar"){
    }*/
  }

}
