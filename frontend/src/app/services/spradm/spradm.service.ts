import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SuperAdministrador {
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
export class SpradmService {
  // Cambia la URL según tu configuración del backend
  // Asegúrate de que el backend esté corriendo en el puerto 8000 o en el de tu preferencia
  private listaSuperusuario = 'http://localhost:8000/api/root-benutzername/';
  private createSuperusuarioUrl = 'http://localhost:8000/api/register_test_user/';
  private updateSuperusuarioUrl = 'http://localhost:8000/api/update_test_user/';
  private deleteSuperusuarioUrl = 'http://localhost:8000/api/delete_test_user/';

  constructor(private http: HttpClient) { }

  obtenerSuperusuarios(): Observable<SuperAdministrador[]> {
    return this.http.get<SuperAdministrador[]>(this.listaSuperusuario);
  }

  agregarSuperusuario(spradm: any): Observable<any> {
    return this.http.post<any>(this.createSuperusuarioUrl, spradm);
  }

  obtenerSuperusuario(id: number): Observable<SuperAdministrador> {
    return this.http.get<SuperAdministrador>(`${this.updateSuperusuarioUrl}${id}/`);
  }

  actualizarSuperusuario(id: number, spradm: Partial<SuperAdministrador>): Observable<SuperAdministrador> {
    return this.http.put<SuperAdministrador>(`${this.updateSuperusuarioUrl}${id}/`, spradm);
  }

  eliminarSuperusuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteSuperusuarioUrl}${id}/`);
  }
}
