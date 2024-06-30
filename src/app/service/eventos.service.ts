import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eventos } from '../model/eventos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private urlBase = 'http://localhost:8080/api/eventos';
  constructor(private http: HttpClient) { }

  // METODOS

  public listar(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(this.urlBase + '/listar');
  }

  public agregarEventos(eventos: Eventos): Observable<Eventos> {
    return this.http.post<Eventos>(this.urlBase + '/agregarEventos', eventos);
  }

  public buscar(id: number): Observable<Eventos> {
    return this.http.get<Eventos>(this.urlBase + '/' + id);
  }

  public eliminar(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBase + '/eliminar/' + id);
  }
 
}
