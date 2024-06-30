import { Component } from '@angular/core';
import { FuncionService } from '../service/funcion.service';
import { Router } from '@angular/router';
import { Funcion } from '../model/funcion';
import { EventosService } from '../service/eventos.service';
import { Eventos } from '../model/eventos';

@Component({
  selector: 'app-funcion-mantenimiento',
  templateUrl: './funcion-mantenimiento.component.html',
  styleUrl: './funcion-mantenimiento.component.css'
})
export class FuncionMantenimientoComponent {

  //constructor
  constructor(private funcionService: FuncionService,
    private eventoService: EventosService,
    private router: Router
  ) { }

  //Objetos
  nuevaFuncion: Funcion = {
    idfuncion: 0,
    idevento: 0,
    fecha: new Date(),
    horainicio: '',
    horafin: ''
  };

  funciones: Funcion[] = [];
  eventos: Eventos[] = [];
  mensaje = '';

  ngOnInit(): void {
    this.listarFunciones();
    this.listarEventos();
  }

  //Metodos
  listarFunciones() {
    this.funcionService.listar().subscribe(data => {
      this.funciones = data;
    });
  }

  listarEventos() {
    this.eventoService.listar().subscribe(data => {
      this.eventos = data;
    });
  }

  buscarFuncion(id: number) {
    this.funcionService.buscar(id).subscribe(data => {
      this.nuevaFuncion = data;
    });
  }

  registrarFuncion() {
    this.funcionService.registrar(this.nuevaFuncion).subscribe(Response => {
      this.nuevaFuncion = {
        idfuncion: 0,
        idevento: 0,
        fecha: new Date(),
        horainicio: '',
        horafin: ''
      }
      this.router.navigate(['funcionMantenimiento']);
      this.listarFunciones();

      this.mensaje = "Funcion registrada con exito";
        console.log(this.mensaje);
        setTimeout(() => {
          this.mensaje = ""; 
        }, 3000)
    },
    error => {
      console.log("Error al registrar la funcion: " + error);
      console.log(this.nuevaFuncion);
    }
  );
  }
  eliminarFuncion(id: number) {
    this.funcionService.eliminar(id).subscribe(Response => {
      this.router.navigate(['funcionMantenimiento']);
      this.listarFunciones();
      this.mensaje = "Funcion Eliminada con exito";
      setTimeout(() => {
        this.mensaje = ""; 
      }, 3000)
    },
    error => {
      console.log("Error al eliminar la funcion: " + error);
      console.log(this.nuevaFuncion);
    });
  }


}
