import { Injectable } from '@angular/core';
import { RolService } from './rol.service';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PrivilegioService {

  idRolActual:number = 0;

  consultar:boolean = false;
  insertar:boolean = false;
  modificar:boolean = false;
  eliminar:boolean = false;
  comprar:boolean = false;
  vender:boolean = false;
  crear_proyecto:boolean = false;
  generar_reporte:boolean = false;

  privilegios:any = [{
    id:0,
    tipo:''
  }]

  roles:any = [{
    id:0,
    nombre:''
  }]

  i:number = 0;

  constructor(private rol: RolService, private activatedRoute:ActivatedRoute) { }

  asignarPrivilegios(rol:number){
    switch(rol){
      case 1: 
        this.consultar = true;
        this.insertar = true;
        this.modificar = true;
        this.eliminar = true;
        this.comprar = true;
        this.vender = true;
        this.crear_proyecto = true;
        this.generar_reporte = true;
        break;
      case 2:
          this.consultar = true;
          this.insertar = true;
          this.modificar = true;          
          this.comprar = true;
          this.vender = true;
          this.crear_proyecto = true;
          this.generar_reporte = true;
          break;
      case 3:
          this.consultar = true;
          this.insertar = true;                  
          this.comprar = true;
          this.vender = true;          
          this.generar_reporte = true;
          break;
      case 4:
          this.consultar = true;          
          this.comprar = true;
          this.vender = true;          
          this.generar_reporte = true;
          break;
      case 5:
          this.consultar = true;          
          this.generar_reporte = true;
          break;
      default:
          this.evaluar(rol);
          break;
    }
  }

  setFalse(){
    this.consultar = false;
        this.insertar = false;
        this.modificar = false;
        this.eliminar = false;
        this.comprar = false;
        this.vender = false;
        this.crear_proyecto = false;
        this.generar_reporte = false;
  }

  evaluar(rol:number){
    this.rol.getrolPri(rol).subscribe(
      res => {
        //console.log(this.privilegios.id)
        this.privilegios = res;
        console.log("Privilegios: ",this.privilegios);
        this.setFalse();
        this.asignarP();
      },
      err => console.log("error")
    )
  }

  asignarP(){
    for(this.i = 0; this.i < this.privilegios.length; this.i = this.i + 1){      
      if(this.privilegios[this.i].nombre == 'Consultar'){
        this.consultar = true;
      }
      else if(this.privilegios[this.i].tipo == 'Insertar'){
        this.insertar = true;
      }
      else if(this.privilegios[this.i].tipo == 'Modificar'){
        this.modificar = true;
      }
      else if(this.privilegios[this.i].tipo == 'Eliminar'){
        this.eliminar = true;
      }
      else if(this.privilegios[this.i].tipo == 'Comprar'){
        this.comprar = true;
      }
      else if(this.privilegios[this.i].tipo == 'Vender'){
        this.vender = true;
      }
      else if(this.privilegios[this.i].tipo == 'Crear Proyectos'){
        this.crear_proyecto = true;
      }
      else if(this.privilegios[this.i].tipo == 'Generar Reportes'){
        this.generar_reporte = true;
      }
    }
  }
}
