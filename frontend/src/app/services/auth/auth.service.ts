import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import MD5 from 'crypto-js/md5';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = 'http://localhost:8000/api/login_plain/'; // URL del endpoint de autenticación

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const hashedPassword = MD5(password).toString(); // Hashea la contraseña con MD5
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl, { username, password: hashedPassword }, { headers }).pipe(
      tap(user => {
        // Guardamos usuario completo en localStorage para el navbar
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('token', user.token); // Guarda el token en el almacenamiento local
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
  }

  guardarToken(token: string) {
    localStorage.setItem('token', token); // Guarda el token en el almacenamiento local
  }

  guardarUsuario(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  obtenerUsuario() {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
  }

  obtenerToken() {
    return localStorage.getItem('token'); // Obtiene el token del almacenamiento local
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}
