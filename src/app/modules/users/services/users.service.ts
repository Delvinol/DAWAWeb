import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewUser, User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlBase = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlBase}/user/findAllUsers`);
  }

  deleteUser(userId: number): Observable<any> {
    const deleteUrl = `${this.urlBase}/user/delete/${userId}`;
    return this.http.delete(deleteUrl);
  }

  crearUsuario(usuario: NewUser): Observable<any> {
    const crearUsuarioUrl = `${this.urlBase}/auth/register`;
    return this.http.post(crearUsuarioUrl, usuario).pipe(
      catchError(error => {
        throw error;
      })
    );
  }

  editarUsuario(userId: number, usuario: User): Observable<any> {
    const editarUsuarioUrl = `${this.urlBase}/user/editUser/${userId}`;
    return this.http.put(editarUsuarioUrl, usuario).pipe(
      catchError(error => {
        throw error;
      })
    );
  }
}
