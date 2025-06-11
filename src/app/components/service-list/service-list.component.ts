import { Component } from '@angular/core';
import { Service } from '../../interfaces/Service';
import { ServiceCardComponent } from "../service-card/service-card.component";

@Component({
  selector: 'app-service-list',
  imports: [ServiceCardComponent],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent {
  serviceList: Service[] = [
    { name: "Depressão", icon: "bi bi-emoji-frown" },
    { name: "Ansiedade", icon: "bi bi-exclamation-circle" },
    { name: "Dificuldades no relacionamento", icon: "bi bi-people" },
    { name: "Alterações do humor", icon: "bi bi-arrow-repeat" },
    { name: "Ataque de pânico", icon: "bi bi-lightning-charge" },
    { name: "Transtorno depressivo", icon: "bi bi-cloud-drizzle" },
    { name: "Bullying", icon: "bi bi-emoji-angry" },
    { name: "Angústia", icon: "bi bi-emoji-dizzy" },
    { name: "Transtorno de déficit de atenção com hiperatividade (TDAH)", icon: "bi bi-lightbulb" },
    { name: "Fobias", icon: "bi bi-exclamation-triangle" },
    { name: "Transtorno do estresse pós traumático (TEPT)", icon: "bi bi-bandaid" },
    { name: "Baixa autoestima", icon: "bi bi-emoji-neutral" },
    { name: "Trauma psicológico", icon: "bi bi-heartbreak" },
    { name: "Processos de Luto", icon: "bi bi-emoji-tear" },
    { name: "Transtornos alimentares", icon: "bi bi-cup-straw" },
    { name: "Terapia de Casal", icon: "bi bi-heart" },
    { name: "Transtorno de Personalidade", icon: "bi bi-person-bounding-box" }
  ];
}
