import { inject } from '@angular/core';
import {
  CanActivateFn,
  CanActivateChildFn,
  CanDeactivateFn,
  CanMatchFn,
  Router,
  Route,
  UrlTree,
} from '@angular/router';

export const authCanActivateGuard: CanActivateFn = (route, state) => {
  console.log('AuthGuard#canActivate called', { route, state });
  if (route?.data?.['requiresAuth']) {
    const router = inject(Router);
    console.log('Route requires authentication');
    return router.navigate(['/not-found'], { queryParams: { returnUrl: state.url } });
  }
  return true;
};

export const authCanActivateChildGuard: CanActivateChildFn = (route, state) => {
  console.log('AuthGuard#canActivateChild called', { route, state });
  return true;
};

export const authCanDeactivateGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  console.log('AuthGuard#canDeactivate called', {
    component,
    currentRoute,
    currentState,
    nextState,
  });
  return true;
};

export const authCanMatchGuard: CanMatchFn = (route, segments) => {
  console.log('AuthGuard#canMatch called', { route, segments });

  if (route?.data?.['requiresAdmin']) {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    return isAdmin;
  }

  return true;
};
