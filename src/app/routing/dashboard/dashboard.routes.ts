import { Routes } from '@angular/router';
import { authCanMatchGuard } from '../../core/guards/auth-guard';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'dashboard',
    title: 'Dashboard Admin',
    loadComponent: () => import('./admin-dashboard/admin-dashboard'),
    data: { requiresAdmin: true },
    canMatch: [authCanMatchGuard],
  },
  {
    path: 'dashboard',
    title: 'Dashboard Default',
    loadComponent: () => import('./default-dashboard/default-dashboard'),
    canMatch: [authCanMatchGuard],
  },
];
