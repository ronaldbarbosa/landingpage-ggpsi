import { afterNextRender, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { animate } from 'motion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {
    afterNextRender(() => this.initAnimations());
  }

  private initAnimations() {
    animate('.fade-up', { opacity: [0, 1], y: [-20, 0] }, { duration: 1 });
    animate('.fade-up-slowly', { opacity: [0, 1], y: [-50, 0] }, { duration: 1.5 });
  }
}
