import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

/* Es indispensable tener esta interface para el CRUD de los Proyectos
   It is essential to have this interface for the CRUD of the Projects 
*/
export interface Documento {
  id: number | null,
  clave_proyecto: string | null,
  tipo: string | null,
  estacion: number | null,
  nom_micro: string | null,
  proyecto_name: string | null,
  created_at: string | null,
  updated_at: string | null,
}

@Injectable({
  providedIn: 'root'
})


export class ProyectosService {
  private generarDocumento = 'http://localhost:8000/api/docx/'; // URL para generar el documento | URL to generate the document
  private listaProyectos = 'http://localhost:8000/api/projects/'; // URL para el CRUD de los Proyectos | URL for the CRUD of the Projects
  private createProyectoUrl = 'http://localhost:8000/api/create_project/'; // URL para crear un nuevo Proyecto | URL to create a new Project
  private updateProyectoUrl = 'http://localhost:8000/api/update_project/'; // URL para actualizar un Proyecto | URL to update a Project
  // private deleteProyectoUrl = 'http://localhost:8000/api/delete_project/'; // URL para eliminar un Proyecto | URL to delete a Project

  constructor(private http: HttpClient) { }

  // service.ts
  enviarDatosUsuarioDescargar(datos: any) {
    return this.http.post(
      `${this.generarDocumento}?descargar=true`,
      datos,
      { responseType: 'blob' } // 👈 blob si descarga
    );
  }

  enviarDatosUsuarioVistaPrevia(datos: any) {
    return this.http.post(
      `${this.generarDocumento}?descargar=false`,
      datos,
      { responseType: 'json' } // 👈 json si solo se muestra las vista previa
    )
  }

  /* Mostrar el CRUD de los Proyectos | Show the CRUD of the Projects */
  obtenerProyectos(): Observable<Documento[]> {
    return this.http.get<Documento[]>(this.listaProyectos);
  }

  agregarProyecto(document: any): Observable<any> {
    return this.http.post<any>(this.createProyectoUrl, document);
  }

  obtenerProyecto(id: number): Observable<Documento> {
    return this.http.get<Documento>(`${this.listaProyectos}${id}/`);
  }

  obtenerProyectoActualizar(id: number): Observable<Documento> {
    return this.http.get<Documento>(`${this.updateProyectoUrl}${id}/`);
  }

  actualizarProyecto(id: number, user: Partial<Documento>): Observable<Documento> {
    return this.http.put<Documento>(`${this.updateProyectoUrl}${id}/`, user);
  }

  private proyectoSeleccionado = new BehaviorSubject<Documento | null>(null);
  proyectoSeleccionado$ = this.proyectoSeleccionado.asObservable();

  setProyectoSeleccionado(proyecto: Documento | null) {
    this.proyectoSeleccionado.next(proyecto);
  }


  /*
  eliminarProyecto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteProyectoUrl}${id}/`);
  }
  */
}
