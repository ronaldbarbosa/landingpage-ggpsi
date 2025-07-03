import { Component } from '@angular/core';
import { PageTitleComponent } from "../../components/page-title/page-title.component";
import { Title } from '../../interfaces/Title';
import { ContactCardComponent } from "../../components/contact-card/contact-card.component";
import { Contact } from '../../interfaces/Contact';

@Component({
  selector: 'app-contact',
  imports: [PageTitleComponent, ContactCardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactTitle: Title = {
    title: 'Contato',
    subtitle: 'Informações de contato para atendimento on-line e presencial'
  };

  contactList: Contact[] = [
    { title: 'Telefone', subtitle: '(19) 99999-9999', icon: 'bi bi-telephone' },
    { title: 'E-mail', subtitle: 'email@email.com', icon: 'bi bi-envelope' },
    { title: 'Cuidare Clínica de Psicologia', subtitle: 'Rua Doutor Sampaio Peixoto 146, Cambuí - Campinas	', icon: 'bi bi-geo-alt' }
  ];
}
