import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  Router,
  TitleStrategy,
  withComponentInputBinding,
  withNavigationErrorHandler,
} from '@angular/router';

import { routes } from './routing/app.routes';
import { CustomTitleStrategy } from './core/strategies/custom-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withNavigationErrorHandler((error) => {
        const router = inject(Router);
        console.error('Navigation Error:', error?.error?.message || error);
        router.navigate(['/error']);
      }),
    ),
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ],
};
