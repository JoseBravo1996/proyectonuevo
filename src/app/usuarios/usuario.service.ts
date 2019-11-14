import { Injectable } from '@angular/core';
import { Usuario } from './usuario/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable()
export class UsuarioService {

  private urlEndPoint:string= 'http://localhost:8080/api/usuarios'

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlEndPoint);
  }

  create(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndPoint,usuario,{headers: this.httpHeaders})
  }

  getUsuario(id): Observable<Usuario>{
     return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`);
  }

  updateUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.urlEndPoint}/${usuario.id}`,usuario,{headers: this.httpHeaders});
 }

 delete(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders}); 
 }

 subirFoto(archivo: File, id){
 
  let formData = new FormData();
   formData.append("archivo", archivo);
   formData.append("id", id);
   return this.http.post(`${this.urlEndPoint}/upload/img/${id}`,formData, {headers: this.httpHeaders}).pipe(
     map( (response: any) => response.usuario as Usuario),
     catchError(e => {
       console.error(e.error.mensaje);
       Swal.fire(e.error.mensaje, e.error.error,'error');
       return throwError(e);
     })
   );
  }
}
