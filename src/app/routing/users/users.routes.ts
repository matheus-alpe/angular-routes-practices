import { Routes } from '@angular/router';
import { authCanActivateGuard } from '../../core/guards/auth-guard';

export const USERS_ROUTES: Routes = [
  {
    path: 'users',
    title: (route) => `User ${route.params['id']}`,
    loadComponent: () => import('./users'),
    canActivate: [authCanActivateGuard],
    data: { requiresAuth: true },
  },
  {
    path: 'users/:id',
    title: (route) => `User ${route.params['id']}`,
    loadComponent: () => import('./profile/profile'),
    data: { requiresAuth: true },
  },
];
