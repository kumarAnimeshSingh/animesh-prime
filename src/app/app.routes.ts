import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Animesh Kumar | Software Engineer' },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services | Animesh Info — Software, AI & Cloud Solutions',
  },
  { path: '**', redirectTo: '' },
];
