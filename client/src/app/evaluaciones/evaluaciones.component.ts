import { Component, OnInit } from '@angular/core';

import { CommonService } from './../services/common.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent implements OnInit {

  constructor(private common:CommonService, private router:Router) { }

  ngOnInit(): void {
  }


gotoEvaluacion(){
  this.router.navigate(['/evaluacion']);
}

gotoEvaluacionFinal(){
  this.router.navigate(['/evaluacionfinal']);
}

gotoEvaluaciones(){
  this.router.navigate(['/evaluacionproveedor']);
}

gotoRenovacion(){
  this.router.navigate(['/renovacion']);
}

}
