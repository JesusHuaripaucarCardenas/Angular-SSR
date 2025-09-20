import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  imports: [
    CommonModule,FormsModule]
})
export class Navbar implements OnInit, OnDestroy {
  searchQuery: string = '';
  placeholders: string[] = [
    'Buscar...',
    'Buscar productos...',
    'Buscar servicios...',
    'Buscar usuarios...'
  ];
  currentPlaceholder: string = this.placeholders[0];
  private placeholderInterval: any;
  notificationCount: number = 3;
  showProfileMenu: boolean = false;

  ngOnInit(): void {
    this.startPlaceholderRotation();
  }

  ngOnDestroy(): void {
    if (this.placeholderInterval) {
      clearInterval(this.placeholderInterval);
    }
  }

  private startPlaceholderRotation(): void {
    let currentIndex = 0;
    this.placeholderInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % this.placeholders.length;
      this.currentPlaceholder = this.placeholders[currentIndex];
    }, 3000);
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Búsqueda:', this.searchQuery);
    }
  }

  onLogoClick(): void {
    console.log('Logo clicked');
  }

  onNotificationClick(): void {
    console.log('Notificaciones clicked');
  }

  onProfileClick(): void {
    console.log('Perfil clicked');
  }

  onMenuClick(): void {
    console.log('Menú clicked');
  }

  goToProfile(): void {
    console.log('Ir a Mi Perfil');
    this.showProfileMenu = false;
  }

  logout(): void {
    console.log('Cerrar Sesión');
    this.showProfileMenu = false;
  }
}