import { Routes } from '@angular/router';

export const ORG_ROUTES: Routes = [
  {
    path: 'org/:orgId',
    title: (route) => `Org ${route.params['orgId']}`,
    loadComponent: () => import('./org').then((m) => m.Org),
    children: [
      {
        path: 'projects/:projectId',
        title: (route) => `Project ${route.params['projectId']}`,
        loadComponent: () => import('./projects/projects').then((m) => m.Projects),
        children: [
          {
            path: 'customers/:customerId',
            title: (route) => `Customers of Project ${route.params['projectId']}`,
            loadComponent: () => import('./projects/customers/customers').then((m) => m.Customers),
          },
        ],
      },
    ],
  },
];
