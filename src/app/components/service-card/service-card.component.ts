import { Component, input } from '@angular/core';
import { Service } from '../../interfaces/Service';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
  service = input.required<Service>();
}
