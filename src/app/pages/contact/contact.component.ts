import { afterNextRender, AfterViewInit, Component } from '@angular/core';
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
    animate('.fade-up', { opacity: [0, 1], y: [-20, 0] }, { duration: 1 });
    animate('.fade-up-slowly', { opacity: [0, 1], y: [-50, 0] }, { duration: 1.5 });
  }
}
