import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-spradm-about',
  standalone: true,
  imports: [NgIf],
  templateUrl: './spradm-about.component.html',
  styleUrl: './spradm-about.component.css'
})
export class SpradmAboutComponent {
  username: string | null = '';
    
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.username = user.name; // o user.username según tu preferencia
    }
  }
}
