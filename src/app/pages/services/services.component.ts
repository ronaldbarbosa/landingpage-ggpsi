import { afterNextRender, Component } from '@angular/core';
import { animate } from 'motion';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { ServiceCard } from '../../interfaces/ServiceCard';

@Component({
  selector: 'app-services',
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: ServiceCard[] = [
    {
      title: "Atendimento psicoterapêutico individual",
      subtitle: "Adolescentes, adultos e idosos",
      icon: "bi-person-hearts"
    },
    {
      title: "Orientação e aconselhamento em decorrência da pandemia",
      subtitle: "Apoio emocional e estratégias de enfrentamento",
      icon: "bi-heart-pulse"
    },
    {
      title: "Psicoterapia para mulheres vítimas de violência doméstica",
      subtitle: "Acolhimento, fortalecimento emocional e reconstrução da autoestima",
      icon: "bi-shield-check"
    },
    {
      title: "Psicoterapia para o público Trans",
      subtitle: "Apoio psicológico voltado à identidade de gênero e inclusão social",
      icon: "bi-person-check"
    },
    {
      title: "Avaliação Psicológica e Perícia",
      subtitle: "Esferas civil e criminal, com emissão de laudos e pareceres técnicos",
      icon: "bi-file-earmark-text"
    },
    {
      title: "Mediadora e Conciliadora",
      subtitle: "Resolução de conflitos familiares, conjugais e interpessoais",
      icon: "bi-diagram-3"
    },
    {
      title: "Atendimento psicoterápico",
      subtitle: "Adolescentes, adultos e idosos em situação de vulnerabilidade social",
      icon: "bi-people"
    }
  ];

  constructor() {
    afterNextRender(() => this.initAnimations());
  }

  private initAnimations() {
    const elements = document.querySelectorAll('.fade-up, .fade-up-slowly');
    elements.forEach((el, i) => {
      const isSlowly = el.classList.contains('fade-up-slowly');
      animate(el, { opacity: [0, 1], y: [isSlowly ? -50 : -20, 0] }, { duration: isSlowly ? 1.5 : 1, delay: i * 0.1 });
    });
  }
}
