
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ServicioGeneralService } from './../services/servicio-general.service';
import { CommonService } from './../services/common.service';
//import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {

  caso:string = 'Agregar';
  tipo:string = 'tipo';
  edit:boolean = false;
  desactivar:boolean = null;

  cliente:any = [{
    id: 0,
    lugar: '',
    ci: '',
    nombre: '',
    apellido: '',
    telefono: 0,
    genero: ''
  }];

  estados:any = [{
    clave: 0,
    nombre: '',
    tipo: '',
    fk_direccion: ''
  }];

  municipios: any = [{
    clave: 0,
    nombre: '',
    tipo: '',
    fk_direccion: ''
  }];

  parroquias: any = [{
    clave: 0,
    nombre: '',
    tipo: '',
    fk_direccion: ''
  }];

  estado:any = [{
    id: 0,
    clave: 0,
    nombre: '',
    tipo: '',
    fk_direccion: ''
  }];

  municipio: any = [{
    clave: 0,
    nombre: '',
    tipo: '',
    fk_direccion: ''
  }];

  parroquia: any = [{
    clave: 0,
    nombre: '',
    tipo: '',
    fk_direccion: ''
  }];

  separacion: any;
  constructor(private activatedRouter:ActivatedRoute, private router:Router, private sg:ServicioGeneralService, private common:CommonService) {
    this.common.title = "Agregar Cliente";
   }

   ngOnInit() {

    const params = this.activatedRouter.snapshot.params;
    if(params.id){
      this.caso = 'Modificar';
      this.sg.getCliente(params.id).subscribe(
        res => {
          this.cliente = res;
          console.log("El cliente es: ",this.cliente);
          this.getEstados();
          console.log(this.cliente[0].lugar);
          this.sg.getDireccion(this.cliente[0].lugar).subscribe(res => {
            this.estado[0].nombre = res[0].e_clave+"-"+res[0].estado; 
            this.estado[0].clave = res[0].e_clave;
            this.buscarMunicipios();
            this.municipio[0].nombre = res[0].m_clave+"-"+res[0].municipio;
            this.buscarParroquias();            
            this.parroquia[0].nombre = res[0].p_clave+"-"+res[0].parroquia;                        
          })
        },
        err => console.log(err)
      )
    }

    this.getEstados();

  }

  agregarEmpleado(){
    this.separacion = this.parroquia[0].nombre.split("-");
    this.cliente[0].lugar = this.separacion[0];  // asigno el id de parroquia        
    this.sg.saveEmpleado(this.cliente[0]).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/clientes/list']);
      },
      err => console.error(err)
    );          
    
  }

  getEstados(){
    this.sg.getEstados().subscribe(
      res => {
        this.estados = res; 
        //console.log(this.estados);        
      },
      err => console.log(err)
    )
  }

  buscarMunicipios(){ 
    
      console.log("el nombre es: ", this.estado[0].nombre);
      this.separacion = this.estado[0].nombre.split("-");      
      console.log("separacion es: ",this.separacion[0]);
      for(let est of this.estados){
        if (est.l_nombre == this.estado[0].nombre){
          this.estado[0].id = est.id;
        }
      }
                
    this.sg.getMunicipios(this.separacion[0]).subscribe(
      res => {
        this.municipios = res; 
        console.log("ahora municipios: ", this.municipios);
        this.parroquias = [{
          id: 0,
          nombre: '',
          tipo: '',
          fk_direccion: ''
        }];       
      },
      err => console.log(err)
    )
  }

  buscarParroquias(){    
    this.separacion = this.municipio[0].nombre.split("-");   
    this.sg.getParroquias(this.separacion[0]).subscribe(
      res => {
        this.parroquias = res;        
      },
      err => console.log(err)
    )
  }

  agregarCliente(){
    this.separacion = this.parroquia[0].nombre.split('-');    
    this.sg.saveCliente({
      id: 0,
      lugar: this.separacion[0],
      ci: this.cliente[0].ci,
      nombre: this.cliente[0].nombre,
      apellido: this.cliente[0].apellido,
      telefono: this.cliente[0].telefono,
      genero: this.cliente[0].genero
    }).subscribe(
      res => {
        this.router.navigate(['/clientes/list']);
      },
      err => console.log(err)
    )
  }

  modificarCliente(){
    this.separacion = this.parroquia[0].nombre.split('-');
    const params = this.activatedRouter.snapshot.params;
    this.sg.updateCliente({
      id: params.id,
      lugar: this.separacion[0],
      ci: this.cliente[0].ci,
      nombre: this.cliente[0].nombre,
      apellido: this.cliente[0].apellido,
      telefono: this.cliente[0].telefono,
      genero: this.cliente[0].genero
    }).subscribe(
      res => {
        this.router.navigate(['/clientes/list']);
      },
      err => console.log(err)
    )
  }

}
