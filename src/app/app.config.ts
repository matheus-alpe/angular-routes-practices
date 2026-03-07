import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  Router,
  TitleStrategy,
  withComponentInputBinding,
  withDebugTracing,
  withNavigationErrorHandler,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';

import { routes } from './routing/app.routes';
import { CustomTitleStrategy } from './core/strategies/custom-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
        paramsInheritanceStrategy: 'always',
        defaultQueryParamsHandling: 'merge',
      }),
      withComponentInputBinding(),
      withNavigationErrorHandler((error) => {
        const router = inject(Router);
        console.error('Navigation Error:', error?.error?.message || error);
        router.navigate(['/error']);
      }),
      withDebugTracing(),
      withViewTransitions(),
    ),
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ],
};
