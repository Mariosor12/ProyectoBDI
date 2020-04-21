import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from './../services/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  caso:string = '';

  roles:any = [{
    id:0,
    nombre:''
  }]

  constructor(private rol:RolService, private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    const params = this.activatedRouter.snapshot.params;
    if (params.id){
      this.rol.getRol(params.id).subscribe(
        res => {
          console.log(res);
          this.roles = res;          
          this.caso = 'Modificar';          
        },
        err => console.log("entro por el error")
      )
    }
    else{
      this.caso = 'Agregar';
    }
  }

  agregarRol(){
    if (this.caso == 'Agregar'){
      this.rol.saveRol({        
        nombre:this.roles[0].nombre
      }).subscribe(
        res => {
          this.roles = res;
          this.router.navigate(['roles/list']);
        },
        err => console.log("Error al traer rol")
      )
    }
    else {
      const params = this.activatedRouter.snapshot.params;
      this.rol.updateRol({
        id:params.id,
        nombre: this.rol[0].nombre
      }).subscribe(
        res => {
          this.roles = res;
          this.router.navigate(['roles/list']);
        },
        err => console.log("Error al traer rol")
      )
    }
  }

}
