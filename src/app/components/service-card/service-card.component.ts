import { afterNextRender, Component, Input } from '@angular/core';
import { animate } from 'motion';
import { ServiceCard } from '../../interfaces/ServiceCard';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceCard;

  constructor() {
      afterNextRender(() => this.initAnimations());
    }

    private initAnimations() {
      animate('.fade-up', { opacity: [0, 1], y: [-20, 0] }, { duration: 1 });
      animate('.fade-up-slowly', { opacity: [0, 1], y: [-50, 0] }, { duration: 1.5 });
    }
}
