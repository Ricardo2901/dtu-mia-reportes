import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Administrator {
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

export class AdminService {

  // Cambia la URL según tu configuración del backend
  // Asegúrate de que el backend esté corriendo en el puerto 8000 o en el de tu preferencia
  private listaAdministrador = 'http://localhost:8000/api/administrator/';
  private createAdministradorUrl = 'http://localhost:8000/api/register_test_user/';
  private updateAdministradorUrl = 'http://localhost:8000/api/update_test_user/';
  private deleteAdministradorUrl = 'http://localhost:8000/api/delete_test_user/';

  constructor(private http: HttpClient) { }

  obtenerAdministradores(): Observable<Administrator[]> {
    return this.http.get<Administrator[]>(this.listaAdministrador);
  }

  agregarAdministrador(admin: any): Observable<any> {
    return this.http.post<any>(this.createAdministradorUrl, admin);
  }

  obtenerAdministrador(id: number): Observable<Administrator> {
    return this.http.get<Administrator>(`${this.updateAdministradorUrl}${id}/`);
  }

  actualizarAdministrador(id: number, admin: Partial<Administrator>): Observable<Administrator> {
    return this.http.put<Administrator>(`${this.updateAdministradorUrl}${id}/`, admin);
  }

  eliminarAdministrador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteAdministradorUrl}${id}/`);
  }
}
