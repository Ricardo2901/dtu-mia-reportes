
import { Component, OnInit } from '@angular/core';
import { RouterModule, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Offcanvas } from 'bootstrap';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-spradm-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './spradm-home.component.html',
  styleUrl: './spradm-home.component.css'
})
export class SpradmHomeComponent {

  username: string | null = '';
  
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.username = user.name; // o user.username según tu preferencia
    }
  }
}
