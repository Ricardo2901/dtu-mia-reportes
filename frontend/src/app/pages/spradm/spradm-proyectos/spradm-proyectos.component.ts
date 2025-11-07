import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ProyectosService, Documento } from '../../../services/proyectos/proyectos.service';
import { FormGroup, FormsModule, FormControl } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-spradm-proyectos',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './spradm-proyectos.component.html',
  styleUrl: './spradm-proyectos.component.css'
})
export class SpradmProyectosComponent implements OnInit {
  proyecto: Documento[] = [];

  projectForm = new FormGroup({
    clave_proyecto: new FormControl(''),
    tipo: new FormControl(''),
    estacion: new FormControl(''),
    nom_micro: new FormControl(''),
    proyecto_name: new FormControl(''),
    created_at: new FormControl(''),
    updated_at: new FormControl(''),
  });

  updateProjectForm = new FormGroup({
    id: new FormControl<number | undefined>(undefined),
    clave_proyecto: new FormControl(''),
    tipo: new FormControl(''),
    estacion: new FormControl<number | null>(null),
    nom_micro: new FormControl(''),
    proyecto_name: new FormControl(''),
    updated_at: new FormControl(''),
  })

  /*
  deleteProjectForm = new FormGroup({
    id: new FormControl<number | undefined>(undefined),
  })
  */

  mensajeServidor: string | null = null;

  constructor(private proyectosService: ProyectosService, private router: Router) {}

  generarDescargar() {
    this.proyectosService.enviarDatosUsuarioDescargar(this.proyecto)
    .subscribe({
      next: (data: Blob) => {
        const url = window.URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.projectForm.get('nombre_proyecto') || 'documento'}.docx`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Error al generar documento:', err);
        alert('No se pudo generar el documento');
      }
    });
  }

  soloGenerar() {
    this.proyectosService.enviarDatosUsuarioVistaPrevia(this.proyecto)
      .subscribe({
        next: (response: any) => {
          console.log('Vista previa recibida:', response.mensaje);
          this.mensajeServidor = response.mensaje; // 👈 se mostrará en el HTML
        },
        error: (err) => {
          console.error('Error en vista previa:', err);
          this.mensajeServidor = 'Ocurrió un error al generar el documento.';
        }
      });
  }

  ngOnInit(): void {
    this.proyectosService.obtenerProyectos().subscribe({
      next: (data) => this.proyecto = data,
      error: (e) => console.error(e)
    });
  }

  verProyecto(id: number | null) {
    this.router.navigate(['mayma/auth/spradm/project', id, 'details']);
  }

  agregarProyecto() {
      if(this.projectForm.valid) {
        this.proyectosService.agregarProyecto(this.projectForm.value).subscribe({
          next: (user) => {
            this.ngOnInit()
            console.log('Usuario agregado:', user)
          },
          error: (err) => {
            console.error('Error al agregar usuario:', err)
          },
        });
      }
    }
  
    abrirModalUpdate(documento: Documento) {
      this.updateProjectForm.patchValue({
        id: documento.id,
        clave_proyecto: documento.clave_proyecto,
        tipo: documento.tipo,
        estacion: documento.estacion,
        nom_micro: documento.nom_micro,
        proyecto_name: documento.proyecto_name,
      })
    }
  
    actualizarProyecto() {
      const id = Number(this.updateProjectForm.value.id); // convierte null a NaN si no hay valor
      if (!id) return; // seguridad, no enviamos si no hay id válido
  
      this.proyectosService.actualizarProyecto(id, this.updateProjectForm.value).subscribe({
        next: (proyecto) => {
          this.ngOnInit()
          console.log('Proyecto actualizado:', proyecto);
          // cerrar modal y refrescar lista
        },
        error: (err) => console.error('Error al actualizar los datos:', err)
      });
    }
  
    /*
    abrirModalDelete(usuario: User) {
      this.deleteProjectForm.patchValue({
        id: usuario.id,
      })
    }
  
    eliminarProyecto() {
      const id = Number(this.deleteProjectForm.value.id); // convierte null a NaN si no hay valor
      if (!id) return; // seguridad, no enviamos si no hay id válido
  
      // clonamos el formulario y eliminamos id para enviar solo los datos
      this.proyectosService.eliminarProyecto(id).subscribe({
        next: (user) => {
          this.ngOnInit();
          console.log('Usuario eliminado', user);
          // cerrar modal y refrescar lista
        },
        error: (err) => console.error('Error al eliminar usuario:', err)
      });
    }
    */
}
