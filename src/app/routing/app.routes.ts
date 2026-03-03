import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'users/:id',
    title: (route) => `User ${route.params['id']}`,
    loadComponent: () => import('./users/users').then((m) => m.Users),
    data: { requiresAuth: true },
  },
  {
    path: '**',
    title: 'Not Found',
    loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound),
  },
];
