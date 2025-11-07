import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [NgIf],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent {
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
