import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Gabriela Goia' },
  { path: 'sobre', component: AboutComponent, title: 'Sobre Mim' },
  { path: '**', component: NotFoundComponent, title: 'Página Não Encontrada' },
];
