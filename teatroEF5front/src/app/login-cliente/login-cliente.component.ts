import { Component } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrl: './login-cliente.component.css'
})
export class LoginClienteComponent {

  username: string = ''
  clave: string = ''
  error: string = ''

  constructor(private clienteService: ClienteService,
    private router: Router
  ){}

  login() {
    this.clienteService.login(this.username, this.clave).subscribe(
      response => {
        console.log('Login exitoso:', response);
        this.router.navigate(['/main']);
      },
      error => {
        console.error('Error en el login:', error);
        this.error = 'Correo electrónico o contraseña incorrectos.';
    }
  );
  }
}
