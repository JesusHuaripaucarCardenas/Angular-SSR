import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Navbar } from "../../../shared/navbar/navbar";
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil-mercado',
  templateUrl: './perfil-mercado.html',
  styleUrls: ['./perfil-mercado.scss'],
  imports: [Navbar, RouterLink, RouterModule],
})
export class PerfilMercado implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Perfil de Mercado');
    this.meta.updateTag({ name: 'description', content: 'Descripción del perfil de mercado' });
  }
}
