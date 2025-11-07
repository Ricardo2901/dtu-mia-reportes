import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { ProyectosService, Documento } from '../../../../../services/proyectos/proyectos.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-spradm-proyectos-about-capitulo1',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './spradm-proyectos-about-capitulo1.component.html',
  styleUrl: './spradm-proyectos-about-capitulo1.component.css'
})
export class SpradmProyectosAboutCapitulo1Component {
  proyecto: Documento | null = null;  
  
  constructor(private route: ActivatedRoute, private proyectosService: ProyectosService) {}

  ngOnInit(): void {
    this.proyectosService.proyectoSeleccionado$.subscribe(proyecto => {
      this.proyecto = proyecto;
    });
  }

  /*
  ngOnInit(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    if (!idStr) return;

    const id = Number(idStr);
    if (isNaN(id)) return;

    this.proyectosService.obtenerProyecto(id).subscribe({
      next: (data) => this.proyecto = data,
      error: (err) => console.error('Error al cargar proyecto:', err)
    });
  }
  */
}
