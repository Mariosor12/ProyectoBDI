import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Router } from '@angular/router';
import { RolService } from './../services/rol.service';
import { CommonService } from './../services/common.service';
import { PrivilegioService } from './../services/privilegio.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-privilegio-data-table',
  templateUrl: './privilegio-data-table.component.html',
  styleUrls: ['./privilegio-data-table.component.css']
})
  export class PrivilegioDataTableComponent implements OnInit {
    @ViewChild(DataTableDirective, {})
    dtElement: DataTableDirective; 
  
    dtOptions: DataTables.Settings = {};
  
    index:number = 0;
  
    privilegios:any = [{
      id:0,
      tipo:''
    }];
  
    nopriv:any = [{
      id:0,
      tipo:''
    }]
  
    nombreRol:string = '';
    vista:string = '';
  
    dtTrigger:Subject<any> = new Subject();

  constructor(private common:CommonService, private router:Router, private priv:PrivilegioService, private rol: RolService) { 
    this.nombreRol = this.common.rolNombre;
    this.vista = this.common.vista;
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    if(this.common.vista == 'rolPri'){
      this.getrolPrivilegios();
    }
    else if(this.common.vista == 'AddPri'){
      this.getNoRolPri();  // me busca los privilegios que NO tiene un Rol
    }
    else{
      this.getPrivilegios();
    }

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

  eliminar(rol:any){
    if(this.vista == 'AddPri'){
      this.index = this.nopriv.indexOf(rol);
      console.log("index es: ", this.index);
      this.nopriv.splice(this.index, 1);
      this.rerender();
    }
    else {
      this.index = this.privilegios.indexOf(rol);
      console.log("index es: ", this.index);
      this.privilegios.splice(this.index, 1);
      this.rerender();
    }
    
  }

  getNoRolPri(){
    this.rol.getPrivilegiosNoRol(this.common.rolId).subscribe(
      res => {
        this.nopriv = res;
        console.log("lo que obtuvo: ",this.nopriv);
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }
  
  getrolPrivilegios(){
    this.rol.getrolPri(this.common.rolId).subscribe(
      res => {
        this.privilegios = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  getPrivilegios(){
    this.rol.getPrivilegios().subscribe(
      res => {
        this.privilegios = res;
        this.dtTrigger.next();
      },
      err => console.log("error al obtener los roles")
    )
  }

  deletePrivilegio(privilegio:any){
    this.rol.deletePrivilegio({
      privilegio: privilegio.clave,
      rol: this.common.rolId
    }).subscribe(
      res => {
        this.eliminar(privilegio);
        this.getrolPrivilegios();
      },
      err => console.log("error al obtener los roles")
    )
  }

  // deleteRol(privilegio: any){
  //   this.rol.deletePrivilegio({privilegio: privilegio.id,
  //     rol: this.common.rolId}).subscribe(
  //     res => {
  //     console.log(res);
  //     this.getrolPrivilegios();
  //     },
  //     err => console.log(err)
  //   )
  // }

  gotoAgregarPrivilegio(){
    this.common.vista = 'AddPri';
    this.vista = this.common.vista;
    this.getNoRolPri();
    //this.router.navigate(['/privilegios/list']);
  }

  addPrivilegio(privilegio:any){
    this.rol.createRolPri({
      privilegio: privilegio.clave,
      rol: this.common.rolId
    }).subscribe(
      res => {
        console.log(privilegio);
        this.eliminar(privilegio);
        this.priv.evaluar(this.priv.idRolActual);
        this.router.navigate(['/privilegios/list']);
      },
      err => console.log("error al obtener los roles")
    )   
  }

}
