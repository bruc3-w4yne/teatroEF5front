import { Component, OnInit } from '@angular/core';
import { EventosService } from '../service/eventos.service';
import { Eventos } from '../model/eventos';
import { subscribe } from 'diagnostics_channel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-eventos-mantenimiento',
  templateUrl: './eventos-mantenimiento.component.html',
  styleUrls: ['./eventos-mantenimiento.component.css']
})
export class EventosMantenimientoComponent implements OnInit {

  // OBJETOS
  nuevoEvento: Eventos = {
    idevento: 0,
    nomevento: '',
    desevento: '',
    idcat: 0,
    objCategoria: { idcat: 1, nomcat: 'eventos' }
  };

  categorias = [
    { idcat: 1, nomcat: 'Comedia' }, 
    { idcat: 2, nomcat: 'Romance' }, 
    { idcat: 3, nomcat: 'Drama' },
    { idcat: 4, nomcat: 'Música' }
  ];

  eventos: Eventos[] = [];

  // Constructor
  constructor(private eventosService: EventosService, 
    private router: Router
  ) {}
  



  ngOnInit(): void {
    this.listarEventos();
  }

  listarEventos(): void {
    this.eventosService.listar().subscribe(data => {
      this.eventos = data;
    });
  }

  agregarEventos(): void {
    this.eventosService.agregarEventos(this.nuevoEvento).subscribe(response => {
      console.log('Evento registrado con éxito:', response);
      this.eventos.push(response); // Agrega el nuevo evento a la lista
      this.nuevoEvento = {
        idevento: 0,
        nomevento: '',
        desevento: '',
        idcat: 0,
        objCategoria: { idcat: 1, nomcat: 'eventos' }
      }
      this.router.navigate(['eventos']);
      this.listarEventos();
      
    }, error => {
      console.error('Error al registrar el evento:', error);
    });
  }
  buscarEvento(id: number) {
    this.eventosService.buscar(id).subscribe(data =>{
      this.nuevoEvento = data
      console.log(this.nuevoEvento);
    })
  }

  eliminarEvento(id: number): void {
    this.eventosService.eliminar(id).subscribe(response => {
      console.log('Evento eliminado:' + Response);
      this.listarEventos;
      this.router.navigate(['eventos']);
    }, 
    error => {
      console.error('Error al registrar el evento:', error);
    });
  }


}
