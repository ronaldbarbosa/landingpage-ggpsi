import { Component, Input } from '@angular/core';
import { ServiceCard } from '../../interfaces/ServiceCard';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceCard;
}
