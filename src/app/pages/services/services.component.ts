import { Component } from '@angular/core';
import { ServiceListComponent } from "../../components/service-list/service-list.component";
import { PageTitleComponent } from "../../components/page-title/page-title.component";
import { Title } from '../../interfaces/Title';

@Component({
  selector: 'app-services',
  imports: [ServiceListComponent, PageTitleComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  servicesTitle: Title = {
    title: 'Serviços',
    subtitle: null
  }

  serviceListTitle: Title = {
    title: 'Doenças Tratadas',
    subtitle: null
  };
}
