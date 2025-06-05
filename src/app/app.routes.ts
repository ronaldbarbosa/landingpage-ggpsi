import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Gabriela Goia' },
  { path: 'sobre', component: AboutComponent, title: 'Sobre Mim' },
  { path: 'servicos', component: ServicesComponent, title: 'Serviços' },
  { path: 'experiencia', component: ExperiencesComponent, title: 'Formação & Experiências' },
  { path: 'contato', component: ContactComponent, title: 'Contato' },
  { path: '**', component: NotFoundComponent, title: 'Página Não Encontrada' },
];
