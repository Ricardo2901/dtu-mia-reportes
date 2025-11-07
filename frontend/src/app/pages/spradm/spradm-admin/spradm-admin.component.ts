import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService, Administrator } from '../../../services/admin/admin.service';
import { FormGroup, FormsModule, FormControl } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-spradm-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './spradm-admin.component.html',
  styleUrl: './spradm-admin.component.css'
})

export class SpradmAdminComponent implements OnInit {
  administradores: Administrator[] = [];

  adminForm = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('password'),
    is_active: new FormControl(0),
    type_user: new FormControl('Administrador')
  });

  updateAdminForm = new FormGroup({
    id: new FormControl<number | undefined>(undefined),
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('password'),
    is_active: new FormControl(0),
    type_user: new FormControl('Administrador')
  });

  deleteAdminForm = new FormGroup({
    id: new FormControl<number | undefined>(undefined),
  });

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.obtenerAdministradores().subscribe({
      next: (data) => this.administradores = data,
      error: (e) => console.error(e)
    });
  }

  agregarAdministrador() {
    if(this.adminForm.valid) {
      this.adminService.agregarAdministrador(this.adminForm.value).subscribe({
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

  abrirModalUpdate(usuario: Administrator) {
      this.updateAdminForm.patchValue({
        id: usuario.id,
        username: usuario.username,
        name: usuario.name,
        email: usuario.email,
        password: '',
        is_active: usuario.is_active,
        type_user: usuario.type_user
      })
    }

  actualizarAdministrador() {
    const id = Number(this.updateAdminForm.value.id); // convierte null a NaN si no hay valor
    if (!id) return; // seguridad, no enviamos si no hay id válido

    // clonamos el formulario y eliminamos id para enviar solo los datos
    const data = { ...this.updateAdminForm.value };
    if (!data.password) delete data.password;

    this.adminService.actualizarAdministrador(id, data).subscribe({
      next: (user) => {
        this.ngOnInit()
        console.log('Usuario actualizado:', user);
      },
      error: (err) => {
        console.error('Error al actualizar usuario:', err)
      },
    });
  }

  abrirModalDelete(usuario: Administrator) {
    this.deleteAdminForm.patchValue({
      id: usuario.id,
    })
  }

  eliminarAdministrador() {
    const id = Number(this.deleteAdminForm.value.id); // convierte null a NaN si no hay valor
    if (!id) return; // seguridad, no enviamos si no hay id válido

    this.adminService.eliminarAdministrador(id).subscribe({
      next: (user) => {
        this.ngOnInit();
        console.log('Usuario eliminado', user);
      },
      error: (err) => {
        console.error('Error al eliminar usuario:', err)
      },
    });
  }
}
