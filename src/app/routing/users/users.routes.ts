import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  {
    path: 'users',
    title: (route) => `User ${route.params['id']}`,
    loadComponent: () => import('./users'),
    data: { requiresAuth: true },
  },
  {
    path: 'users/:id',
    title: (route) => `User ${route.params['id']}`,
    loadComponent: () => import('./profile/profile'),
    data: { requiresAuth: true },
  },
];
