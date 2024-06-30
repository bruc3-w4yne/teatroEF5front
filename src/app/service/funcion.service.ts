import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcion } from '../model/funcion';

@Injectable({
  providedIn: 'root'
})
export class FuncionService {
  
  private urlBase = 'http://localhost:8080/api/funciones';

  constructor(private http : HttpClient) { }

  public listar() : Observable<Funcion[]>{
    return this.http.get<Funcion[]>(this.urlBase + '/listar');
  }
  public buscar(id : number) : Observable<Funcion>{
    return this.http.get<Funcion>(this.urlBase + '/' + id);
  }
  public registrar(funcion : Funcion) : Observable<any>{
    return this.http.post<Funcion>(this.urlBase + '/agregarFuncion', funcion);
  }
  public eliminar(id : number) : Observable<any>{
    return this.http.delete<any>(this.urlBase + '/eliminar' + id);
  }
}
