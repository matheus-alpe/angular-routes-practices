import { Routes } from '@angular/router';
import { delay, from } from 'rxjs';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: 'products',
    title: 'Products',
    loadComponent: () => from(import('./products')).pipe(delay(2000)),
  },
  {
    path: 'products/:id',
    title: (route) => `Product ${route.params['id']}`,
    loadComponent: () => import('./details/details'),
    loadChildren: () => import('./details/details.routes').then((m) => m.PRODUCTS_DETAILS_ROUTES),
  },
];
