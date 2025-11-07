import { Component, OnInit } from '@angular/core';
import { RouterModule, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Offcanvas } from 'bootstrap';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

declare var bootstrap: any;

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  username: string | null = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.username = user.name; // o user.username según tu preferencia
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/mayma/login']);
  }

  cerrarOffcanvas() {
      const offcanvasElement = document.getElementById('offcanvasNavbar'); // ID real de tu offcanvas
      if (offcanvasElement) {
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvas) {
          offcanvas.hide(); // Cierra el offcanvas
        }
      }
    }

   procesarComando(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();

      const input = event.target as HTMLInputElement;
      const output = document.getElementById('terminal-output');
      const terminalBody = document.getElementById('terminal-body');

      if (!output || !terminalBody) return;

      const comando = input.value.trim();

      if (comando) {
        output.innerHTML += `mayma/admin/@usuario~$ ${comando}\n`;
        
        switch (comando) {
          case 'clear': /* Limpiar pantalla de la terminal */
          case 'cls': /* Limpiar pantalla de la terminal */
            output.innerHTML = '';
            break;
          case 'help': /* Mostrar los comandos disponibles en la terminal */
            output.innerHTML += 'Comandos disponibles:\n'
                              + '  clear/cls: Limpiar la pantalla\n'
                              + '  help: Mostrar ayuda y muestra los comandos disponibles en la terminal\n'
                              + '  datetime: Mostrar la fecha y hora actual\n'
                              + '  time: Mostrar la hora actual\n'
                              + '  date: Mostrar la fecha actual\n'
                              + '  info: Muestra la informacion del sistema\n'
                              + '  userinfo: Muestra la informacion del usuario\n'
                              + '  chapter: Muestra la informacion del capitulo que se esta desarrollando\n'
                              + '  chapterinfo: Muestra la informacion del capitulo que se esta desarrollando\n'
                              + '  contributions: Muestra la informacion de las contribuciones en los proyectos\n'
                              ;
            break;
          
          /* MOSTRAR LA FECHA Y HORA */ 
          case 'datetime': /* Mostrar la fecha actual */
          case 'datetime /d': /* Mostrar la fecha actual */
          case 'datetime /d': /* Mostrar la fecha actual */
            output.innerHTML += this.getFecha();
            break;
          case 'time':
          case 'datetime /t': /* Mostrar la hora actual */
          case 'datetime -t': /* Mostrar la hora actual */
            output.innerHTML += this.getHora();
            break;
          case 'datetime': /* Mostrar la fecha y hora actual */
            output.innerHTML += this.getDatetime();
            break;
          default: /* Cuando el comando es incorrecto */
          output.innerHTML += `El comando --${comando}-- no existe.\n`
                            + 'Si necesita ayuda escriba el comando help.\n\n';
          break;  
        }

      } else { // Cuando solo de da enter
        output.innerHTML += 'mayma/admin/@usuario~$ \n';
      }

      input.value = '';

      // Scroll automático al final
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }

  /* ########################################################################################################################################### */
  /* METODOS PARA LA FECHA Y HORA ACTUAL */

  private getFecha(): string {
    const date = new Date();
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const dia = dias[date.getDay()];
    const mes = meses[date.getMonth()];
    const diaNum = date.getDate();
    const anio = date.getFullYear();

    return `Fecha Actual: ${dia} ${diaNum} de ${mes} del ${anio}\n\n`;
  }

  private getHora(): string {
    const date = new Date();
    const hora = date.getHours();
    const minutos = date.getMinutes();

    const horaFormat = String(hora).padStart(2, '0');
    const minutosFormat = String(minutos).padStart(2, '0');

    return `Hora Actual: ${horaFormat} : ${minutosFormat}\n\n`;
  }

  private getDatetime(): string {
    const date = new Date();
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const dia = dias[date.getDay()];
    const mes = meses[date.getMonth()];
    const diaNum = date.getDate();
    const anio = date.getFullYear();

    const hora = date.getHours();
    const minutos = date.getMinutes();

    const horaFormat = String(hora).padStart(2, '0');
    const minutosFormat = String(minutos).padStart(2, '0');

    return `Fecha Actual: ${dia} ${diaNum} de ${mes} del ${anio}\n`
          + `Hora Actual: ${horaFormat} : ${minutosFormat}\n\n`;  
  }
  

  /* ########################################################################################################################################### */
  /* MUESTRA LA INFORMACION DEL SISTEMA DESARROLLADO */


}
