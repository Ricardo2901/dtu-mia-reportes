import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { NgIf } from '@angular/common';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-admin-about',
  standalone: true,
  imports: [NgIf],
  templateUrl: './admin-about.component.html',
  styleUrl: './admin-about.component.css'
})
export class AdminAboutComponent {
  username: string | null = '';
  name: string | null = '';
  email: string | null = '';
  createdAt: string | null = '';
  updatedAt: string | null = '';
  rol: string | null = '';
  
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.name = user.name; // o user.username según tu preferencia
      this.username = user.username; // o user.name según tu preferencia
      this.email = user.email;
      this.createdAt = user.created_at;
      this.updatedAt = user.updated_at;
      this.rol = user.type_user
    }
  }
}
