import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  {
    path: 'users/:id',
    title: (route) => `User ${route.params['id']}`,
    loadComponent: () => import('./users'),
    data: { requiresAuth: true },
  },
];
