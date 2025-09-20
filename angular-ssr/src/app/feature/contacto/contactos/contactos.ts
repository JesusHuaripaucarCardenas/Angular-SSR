import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Navbar } from "../../../shared/navbar/navbar";

@Component({
  selector: 'app-contactos',
  imports: [CommonModule, Navbar], 
  templateUrl: './contactos.html', 
  styleUrls: ['./contactos.scss'] 
})
export class Contactos implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Contactos | Mi Aplicación');
    this.metaService.updateTag({ name: 'description', content: 'Página de contactos de supermercados y mercados' });
    this.metaService.updateTag({ name: 'author', content: 'FundoSmart' });
  }
}
