import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrl: './registrar-cliente.component.css'
})
export class RegistrarClienteComponent {

  nuevoCliente: Cliente = {
    idcli: 0,
    nomcli: '',
    apecli: '',
    dni: '',
    username: '',
    clave: '',
    };
    error: string = '';

    constructor(private clienteService: ClienteService, private router: Router) {}
      registrarCliente() {
        this.clienteService.registrarCliente(this.nuevoCliente)
        .subscribe(
        response => {
          console.log('Cliente registrado:', response);
          this.router.navigate(['/login']);
          },
          error => {
            console.error('Error al registrar cliente:', error);
            this.error = 'Mensaje de Error';
          }
        );
      }
}
