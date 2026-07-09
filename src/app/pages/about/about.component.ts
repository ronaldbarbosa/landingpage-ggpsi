import { afterNextRender, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { animate } from 'motion';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor() {
    afterNextRender(() => this.initAnimations());
  }

  private initAnimations() {
    const elements = document.querySelectorAll('.fade-up, .fade-up-slowly');
    elements.forEach((el, i) => {
      const isSlowly = el.classList.contains('fade-up-slowly');
      animate(el, { opacity: [0, 1], y: [isSlowly ? -50 : -20, 0] }, { duration: isSlowly ? 1.5 : 1, delay: i * 0.15 });
    });
  }
}
