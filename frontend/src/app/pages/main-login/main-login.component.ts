import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-login',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './main-login.component.html',
  styleUrl: './main-login.component.css'
})

export class MainLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Redirige automáticamente si ya hay usuario logueado
    const user = this.authService.getCurrentUser();
    if (user) {
      this.redirigirSegunTipo(user.type_user);
    }
  }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (user) => {
        this.redirigirSegunTipo(user.type_user);
      },
      error: (error) => {
        this.errorMessage = 'Credenciales incorrectas. Por favor, inténtelo de nuevo.';
        console.error('Error de autenticación:', error);
      }
    });
  }

  private redirigirSegunTipo(type_user: string) {
    if (type_user === 'Superusuario') {
      this.router.navigate(['/mayma/auth/spradm']);
    } else if (type_user === 'Administrador') {
      this.router.navigate(['/mayma/auth/admin']);
    } else if (type_user === 'Usuario') {
      this.router.navigate(['/mayma/auth/usr']);
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/mayma/login']);
  }
}
