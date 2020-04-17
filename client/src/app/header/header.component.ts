import { Component, OnInit } from '@angular/core';

//importando el gestor de vistas
//import { Router } from '@angular/router';

//Importando Servicios
//import { CommonService } from './../services/common.service';
//import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  

  title:string = '';

  constructor() {}

  ngOnInit() {     
  }

}