import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

export interface User {
  id?: number | null,
  username?: string | null,
  name?: string | null,
  email?: string | null,
  email_verified_at?: string | null,
  password?: string | null,
  created_at?: string | null,
  updated_at?: string | null,
  last_login?: string | null,
  is_active?: number | null,
  type_user?: string | null,
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  // Cambia la URL según tu configuración del backend
  // Asegúrate de que el backend esté corriendo en el puerto 8000 o en el de tu preferencia
  private listaUsuarios = 'http://localhost:8000/api/benutzername/';
  private createUserUrl = 'http://localhost:8000/api/register_test_user/';
  private updateUserUrl = 'http://localhost:8000/api/update_test_user/';
  private deleteUserUrl = 'http://localhost:8000/api/delete_test_user/';

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.listaUsuarios);
  }

  agregarUsuario(user: any): Observable<any> {
    return this.http.post<any>(this.createUserUrl, user);
  }

  obtenerUsuario(id: number): Observable<User> {
    return this.http.get<User>(`${this.updateUserUrl}${id}/`);
  }

  actualizarUsuario(id: number, user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.updateUserUrl}${id}/`, user);
  }

  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteUserUrl}${id}/`);
  }
}
