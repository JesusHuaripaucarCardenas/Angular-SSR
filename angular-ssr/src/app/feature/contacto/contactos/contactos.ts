import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from "../../../shared/navbar/navbar";

@Component({
  selector: 'app-contactos',
  standalone: true, 
  imports: [CommonModule, Navbar], 
  templateUrl: './contactos.html', 
  styleUrls: ['./contactos.scss'] 
})
export class Contactos { 
}