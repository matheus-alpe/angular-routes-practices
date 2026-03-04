import { Routes } from '@angular/router';
import { PRODUCTS_ROUTES } from './products/products.routes';
import { USERS_ROUTES } from './users/users.routes';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./home/home'),
  },
  {
    path: 'home',
    redirectTo: '',
  },
  ...USERS_ROUTES,
  ...PRODUCTS_ROUTES,
  {
    path: '**',
    title: 'Not Found',
    loadComponent: () => import('./not-found/not-found'),
  },
];
