import { Component, OnInit, HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { IngresoService } from '../services/ingreso.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

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

  savedUsuario(){
    this.usuarioService.saveUsuario(this.usuario)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

}
