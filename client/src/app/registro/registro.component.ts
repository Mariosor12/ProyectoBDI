import { Component, OnInit, HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CommonService } from './../services/common.service';
import { IngresoService } from '../services/ingreso.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  @HostBinding('class') classes = 'row';

  usuario: any = {
    id: 0,
    nombre: '',
    contrasena: ''
  };

  caso:string = 'Agregar';
  edit:boolean = false;
  tipos:any = [];
  idRol:any;

  error:boolean = false;

  constructor(private usuarioService: IngresoService, private router: Router, private activatedRoute: ActivatedRoute, private common: CommonService) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.usuario ={
        id: params.id,
        nombre: params.nombre,
        contrasena: params.contrasena
      }
      this.usuarioService.getUsuario(params.id).subscribe(
        res => {     
          console.log(res);
          this.usuario[0] = res;
          this.edit = true;
          this.caso = 'Modificar';        
        },
        err => console.log("entro por el error")
      )      
            
    }

  }


  agregarUsuario(){
    delete this.usuario.id;
    console.log("el usuario",this.usuario);
    this.usuarioService.saveUsuario(this.usuario)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/usuario/list']);
      },
      err => console.log(err)
    )
  }

  updatedUsuario(){
    const params = this.activatedRoute.snapshot.params;
    console.log("el usuario",this.usuario);
    if(params.id){
    this.usuarioService.updateUsuario(params.id, this.usuario)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/usuario/list']);
      },
      err => console.log(err)
    )
    }
  }

}
