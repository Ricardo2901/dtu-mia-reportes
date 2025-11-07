import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpradmService, SuperAdministrador } from '../../../services/spradm/spradm.service';
import { FormGroup, FormsModule, FormControl } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-spradm-spradm',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './spradm-spradm.component.html',
  styleUrl: './spradm-spradm.component.css'
})
export class SpradmSpradmComponent implements OnInit {
  superusuarios: SuperAdministrador[] = [];

  spradmForm = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('password'),
    is_active: new FormControl(0),
    type_user: new FormControl('Superusuario')
  });

  updateSpradmForm = new FormGroup({
    id: new FormControl<number | undefined>(undefined),
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('password'),
    is_active: new FormControl(0),
    type_user: new FormControl('UsuarSuperusuarioio')
  });

  deleteSpradmForm = new FormGroup({
    id: new FormControl<number | undefined>(undefined),
  });
  
  constructor(private spradmService: SpradmService) { }

  ngOnInit(): void {
    this.spradmService.obtenerSuperusuarios().subscribe({
      next: (data) => this.superusuarios = data,
      error: (e) => console.error(e)
    });
  }

  agregarSuperusuario() {
    if(this.spradmForm.valid) {
      this.spradmService.agregarSuperusuario(this.spradmForm.value).subscribe({
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

  abrirModalUpdate(usuario: SuperAdministrador) {
    this.updateSpradmForm.patchValue({
      id: usuario.id,
      username: usuario.username,
      name: usuario.name,
      email: usuario.email,
      password: '',
      is_active: usuario.is_active,
      type_user: usuario.type_user
    })
  }

  actualizarSuperusuario() {
    const id = Number(this.updateSpradmForm.value.id); // convierte null a NaN si no hay valor
    if (!id) return; // seguridad, no enviamos si no hay id válido

    // clonamos el formulario y eliminamos id para enviar solo los datos
    const data = { ...this.updateSpradmForm.value };
    if (!data.password) delete data.password;

    this.spradmService.actualizarSuperusuario(id, data).subscribe({
      next: (user) => {
        this.ngOnInit()
        console.log('Usuario actualizado:', user);
        // cerrar modal y refrescar lista
      },
      error: (err) => console.error('Error al actualizar usuario:', err)
    });
  }

  abrirModalDelete(usuario: SuperAdministrador) {
    this.deleteSpradmForm.patchValue({
      id: usuario.id,
    })
  }

  eliminarSuperusuario() {
    const id = Number(this.deleteSpradmForm.value.id); // convierte null a NaN si no hay valor
    if (!id) return; // seguridad, no enviamos si no hay id válido

    // clonamos el formulario y eliminamos id para enviar solo los datos
    this.spradmService.eliminarSuperusuario(id).subscribe({
      next: (user) => {
        this.ngOnInit();
        console.log('Usuario eliminado', user);
        // cerrar modal y refrescar lista
      },
      error: (err) => console.error('Error al eliminar usuario:', err)
    });
  }
}
