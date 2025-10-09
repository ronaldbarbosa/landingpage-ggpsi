import { afterNextRender, Component } from '@angular/core';
import { animate } from 'motion';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor() {
      afterNextRender(() => this.initAnimations());
    }

    private initAnimations() {
      animate('.fade-up', { opacity: [0, 1], y: [-20, 0] }, { duration: 1 });
      animate('.fade-up-slowly', { opacity: [0, 1], y: [-50, 0] }, { duration: 1.5 });
    }
}
