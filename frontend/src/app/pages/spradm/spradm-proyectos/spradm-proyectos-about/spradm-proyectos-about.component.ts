import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProyectosService, Documento } from '../../../../services/proyectos/proyectos.service';
import { NgIf } from "../../../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-spradm-proyectos-about',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './spradm-proyectos-about.component.html',
  styleUrl: './spradm-proyectos-about.component.css'
})
export class SpradmProyectosAboutComponent {

  proyecto: Documento | null = null;

  constructor(private route: ActivatedRoute, private proyectosService: ProyectosService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.proyectosService.obtenerProyecto(+id).subscribe({
      next: (data) => {
        this.proyecto = data;
        this.proyectosService.setProyectoSeleccionado(data);
      },
      error: (err) => console.error(err)
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
