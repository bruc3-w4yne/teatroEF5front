import { Component } from '@angular/core';
import { FuncionService } from '../service/funcion.service';
import { EventosService } from '../service/eventos.service';
import { Router } from '@angular/router';
import { Funcion } from '../model/funcion';
import { Eventos } from '../model/eventos';

@Component({
  selector: 'app-inicio-user',
  templateUrl: './inicio-user.component.html',
  styleUrl: './inicio-user.component.css'
})
export class InicioUserComponent {

  constructor(private funcionService: FuncionService,
    private eventoService: EventosService,
    private router: Router) { }

  funciones: Funcion[] = [];
  eventos: Eventos[] = [];


  ngOnInit(): void {
    this.listarEventos();
  }

  listarFunciones(id :number) {
    this.funcionService.buscarporEvento(id).subscribe(data => {
      this.funciones = data;
    });
  }

  listarEventos() {
    this.eventoService.listar().subscribe(data => {
      this.eventos = data;
    });
  }

}
