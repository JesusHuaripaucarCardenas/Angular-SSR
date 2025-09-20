import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-perfil-mercado',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './perfil-mercado.html',
  styleUrls: ['./perfil-mercado.scss']
})
export class PerfilMercado {

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
      // Aquí puedes implementar la lógica de búsqueda
      // Por ejemplo: this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    }
  }

  onLogoClick(): void {
    console.log('Logo clicked');
    // Navegar al inicio: this.router.navigate(['/']);
  }

  onNotificationClick(): void {
    console.log('Notificaciones clicked');
    // Aquí puedes abrir un modal o navegar a notificaciones
  }

  onProfileClick(): void {
    console.log('Perfil clicked');
  }

  onMenuClick(): void {
    console.log('Menú clicked');
    // Aquí puedes abrir/cerrar un sidebar
  }

  goToProfile(): void {
    console.log('Ir a Mi Perfil');
    // this.router.navigate(['/profile']);
    this.showProfileMenu = false;
  }

  logout(): void {
    console.log('Cerrar Sesión');
    // Implementar lógica de logout
    // this.authService.logout();
    this.showProfileMenu = false;
  }

}
