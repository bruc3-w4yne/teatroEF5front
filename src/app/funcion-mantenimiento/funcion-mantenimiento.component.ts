import { Component } from '@angular/core';
import { FuncionService } from '../service/funcion.service';
import { Router } from '@angular/router';
import { Funcion } from '../model/funcion';

@Component({
  selector: 'app-funcion-mantenimiento',
  templateUrl: './funcion-mantenimiento.component.html',
  styleUrl: './funcion-mantenimiento.component.css'
})
export class FuncionMantenimientoComponent {

  //constructor
  constructor(private funcionService : FuncionService,
              private router : Router
  ){}

  //Objetos
  nuevaFuncion : Funcion = {
    idfuncion : 0,
    idevento : 0,
    fecha : new Date(),
    horainicio : '',
    horafin : ''
  };

  



}
