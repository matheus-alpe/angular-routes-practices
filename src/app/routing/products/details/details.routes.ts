import { Routes } from '@angular/router';
import { delay, from } from 'rxjs';

export const PRODUCTS_DETAILS_ROUTES: Routes = [
  {
    path: 'info',
    title: 'Product Info',
    loadComponent: () => import('./info/info'),
  },
  {
    path: 'reviews',
    title: 'Product Reviews',
    loadComponent: () => from(import('./reviews/reviews')).pipe(delay(2000)),
  },
  {
    path: 'price',
    title: 'Product Price',
    loadComponent: () => import('./price/price'),
    outlet: 'footer',
  },
];
