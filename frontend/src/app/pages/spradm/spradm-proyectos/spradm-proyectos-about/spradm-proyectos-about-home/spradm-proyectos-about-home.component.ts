import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { ProyectosService, Documento } from '../../../../../services/proyectos/proyectos.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-spradm-proyectos-about-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spradm-proyectos-about-home.component.html',
  styleUrl: './spradm-proyectos-about-home.component.css'
})
export class SpradmProyectosAboutHomeComponent {
  proyecto: Documento | null = null;  
  
    constructor(private route: ActivatedRoute, private proyectosService: ProyectosService, private router: Router) {}
  
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

    /* 
    ===========================================================================
      NAVEGACION ENTRE RUTAS DEL PROYECTO
    ===========================================================================
    */
    verCapitulo1() {
      this.router.navigate(['../capitulo-1'], { relativeTo: this.route });
    }

    verCapitulo2() {
      this.router.navigate(['../capitulo-2'], { relativeTo: this.route });
    }

    verCapitulo3() {
      this.router.navigate(['../capitulo-3'], { relativeTo: this.route });
    }

    verCapitulo4() {
      this.router.navigate(['../capitulo-4'], { relativeTo: this.route });
    }

    verCapitulo5() {
      this.router.navigate(['../capitulo-5'], { relativeTo: this.route });
    }

    verCapitulo6() {
      this.router.navigate(['../capitulo-6'], { relativeTo: this.route });
    }

    verCapitulo7() {
      this.router.navigate(['../capitulo-7'], { relativeTo: this.route });
    }

    verCapitulo8() {
      this.router.navigate(['../capitulo-8'], { relativeTo: this.route });
    }

    verCapitulo9() {
      this.router.navigate(['../capitulo-9'], { relativeTo: this.route });
    }

    verCapitulo10() {
      this.router.navigate(['../capitulo-10'], { relativeTo: this.route });
    }

    verCapitulo11() {
      this.router.navigate(['../capitulo-11'], { relativeTo: this.route });
    }

    verCapitulo12() {
      this.router.navigate(['../capitulo-12'], { relativeTo: this.route });
    }

    verCapitulo13() {
      this.router.navigate(['../capitulo-13'], { relativeTo: this.route });
    }

    verCapitulo14() {
      this.router.navigate(['../capitulo-14'], { relativeTo: this.route });
    }

    verCapitulo15() {
      this.router.navigate(['../capitulo-15'], { relativeTo: this.route });
    }

    verCapitulo16() {
      this.router.navigate(['../capitulo-16'], { relativeTo: this.route });
    }

    verCapitulo17() {
      this.router.navigate(['../capitulo-17'], { relativeTo: this.route });
    }
}
