import { afterNextRender, Component } from '@angular/core';
import { animate } from 'motion';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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
