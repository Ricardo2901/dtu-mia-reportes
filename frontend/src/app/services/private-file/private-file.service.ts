import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

export interface Documento {
  id?: number | null,
  name?: string | null,
  path?: string | null,
  format?: string | null,
  size?: string | null,
  owner?: string | null; // username del propietario
  created_at?: string | null,
}

@Injectable({
  providedIn: 'root'
})
export class PrivateFileService {

  private listaPrivateFiles = 'http://localhost:8000/api/private_files/';
  private createPrivateFileUrl = 'http://localhost:8000/api/upload_private_files/';
  private deletePrivateFileUrl = 'http://localhost:8000/api/delete_private_files/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.obtenerToken(); // asegúrate de guardar el JWT al loguearte
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  uploadFile(file: File, username: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('username', username);
    return this.http.post(this.createPrivateFileUrl, formData);
  }

  getUserDocuments(username: string): Observable<Documento[]> {
    return this.http.get<Documento[]>(`${this.listaPrivateFiles}${username}`);
  }

  deleteFile(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deletePrivateFileUrl}${id}/`);
  }
}
