import { Component, OnInit, HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { IngresoService } from '../services/ingreso.service';
import { Usuario } from '../models/usuario';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  usuario: Usuario = {
    id: 0,
    nombre: '',
    contrasena: ''
  };

  respuesta: any = [{
    nombre: '',
    contrasena: ''
  }];

  error:boolean = false;


  constructor(private usuarioService: IngresoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getsUsuario(){
    delete this.usuario.id;
    this.error = false;
    this.usuarioService.getoneUsuario(this.usuario.nombre, this.usuario.contrasena).subscribe(
      res => {
        this.respuesta = res;
        if (this.respuesta.nombre  == 'Usuario y/o contraseña incorrecto'){
          this.error = true;        
          this.usuario.nombre = '';
          this.usuario.contrasena = '';
          console.log('Error en Nombre de Usuario y/o contraseña');
          window.alert("Error en Nombre de Usuario y/o contraseña");
        }
        else {
          console.log(res);
          this.router.navigate(['/']);
        }
        
      },
      err => console.log(err)
    )
  }

}
