
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateFileService, Documento } from '../../../services/private-file/private-file.service';
import { AuthService } from '../../../services/auth/auth.service';
import { FormGroup, FormsModule, FormControl } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-spradm-private-files',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './spradm-private-files.component.html',
  styleUrl: './spradm-private-files.component.css'
})
export class SpradmPrivateFilesComponent implements OnInit {
  selectedFile: File | null = null;
  uploadMessage: string = '';
  documentos: Documento[] = [];

  deleteFilesForm = new FormGroup({
    id: new FormControl<number | undefined>(undefined),
  });

  constructor(
    private privateFileService: PrivateFileService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    const username = currentUser ? currentUser.username : 'anonimo';

    this.loadDocuments(username);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadSelectedFile() {
    if (!this.selectedFile) return;

    const currentUser = this.authService.getCurrentUser();
    const username = currentUser ? currentUser.username : 'anonimo';

    this.privateFileService.uploadFile(this.selectedFile, username).subscribe({
      next: doc => {
        console.log('Archivo subido:', doc);
        this.uploadMessage = `Archivo "${doc.name}" subido correctamente por ${username}`;
        this.selectedFile = null;
      },
      error: err => {
        console.error('Error al subir archivo', err);
        this.uploadMessage = 'Error al subir archivo';
      }
    });
  }

  loadDocuments(username: string) {
    this.privateFileService.getUserDocuments(username).subscribe({
      next: docs => {
        this.documentos = docs;
        console.log("Archivos del usuario:", docs);
      },
      error: err => {
        console.error("Error al cargar archivos", err);
      }
    });
  }

  abrirModalDelete(privateFile: Documento) {
    this.deleteFilesForm.patchValue({
      id: privateFile.id
    })
  }

  eliminarDocuments() {
    const id = Number(this.deleteFilesForm.value.id); // convierte null a NaN si no hay valor
    if (!id) return; // seguridad, no enviamos si no hay id válido

    // clonamos el formulario y eliminamos id para enviar solo los datos
    this.privateFileService.deleteFile(id).subscribe({
      next: (user) => {
        this.ngOnInit();
        console.log('Usuario eliminado', user);
        // cerrar modal y refrescar lista
      },
      error: (err) => console.error('Error al eliminar usuario:', err)
    });
  }

}
