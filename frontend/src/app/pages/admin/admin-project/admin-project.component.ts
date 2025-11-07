import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-project',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-project.component.html',
  styleUrl: './admin-project.component.css'
})
export class AdminProjectComponent {
  constructor(private titleService: Title) {
    this.setTituloPagina('Proyectos | Administrador')
  }

  setTituloPagina(titulo: string) {
    this.titleService.setTitle(titulo);
  }
}
