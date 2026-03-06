import { Routes } from '@angular/router';
import { PRODUCTS_ROUTES } from './products/products.routes';
import { USERS_ROUTES } from './users/users.routes';
import { authCanActivateGuard } from '../core/guards/auth-guard';
import { DASHBOARD_ROUTES } from './dashboard/dashboard.routes';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./home/home'),
    canActivate: [authCanActivateGuard],
    canActivateChild: [authCanActivateGuard],
    canDeactivate: [authCanActivateGuard],
    canMatch: [authCanActivateGuard],
    data: {
      requireAuth: true,
    },
  },
  ...USERS_ROUTES,
  ...PRODUCTS_ROUTES,
  ...DASHBOARD_ROUTES,
  {
    path: 'error',
    title: 'Error',
    loadComponent: () => import('./error/error'),
  },
  {
    path: 'not-found',
    title: 'Not Found',
    loadComponent: () => import('./not-found/not-found'),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
