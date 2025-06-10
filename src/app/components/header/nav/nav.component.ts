import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  showMenu = false;
  links = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Formação & Experiências', path: '/experiencia' },
    { label: 'Contato', path: '/contato' }
  ];
}
