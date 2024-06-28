import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/api/clientes';
  constructor(private http: HttpClient) { }
  login(username: string, clave: string) {
    return this.http.post<any>(`${this.baseUrl}/login?username=${username}&clave=${clave}`, {});
  }
  registrarCliente(cliente: Cliente): Observable<Cliente> {
    console.log(cliente)
    return this.http.post<Cliente>(`${this.baseUrl}/registrar`, cliente);
  }
}
