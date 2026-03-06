import { Component, computed, inject, signal } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
  NavigationError,
  Router,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { routes } from './routing/app.routes';
import { JsonPipe } from '@angular/common';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

export interface OutletConfig {
  layout: string;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-routes-practices');
  readonly routes = routes;
  readonly outletConfig: OutletConfig = {
    layout: 'default',
  };
  private router = inject(Router);
  private lastFailedUrl = signal('');
  private navigationErrors = toSignal(
    this.router.events.pipe(
      map((event) => {
        if (event instanceof NavigationError) {
          this.lastFailedUrl.set(event.url);
          if (event.error) {
            console.error('>> Navigation error', event.error);
          }
          return 'Navigation failed. Please try again.';
        }
        return '';
      }),
    ),
    { initialValue: '' },
  );
  isNavigating = computed(() => !!this.router.currentNavigation());
  errorMessage = this.navigationErrors;

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.trackPageView(event.url);
      }
    });
  }

  private trackPageView(url: string) {
    console.log('Tracking page view for:', url);
    // Here you would integrate with your analytics service, e.g.:
    // analyticsService.trackPageView(url);
  }

  retryNavigation() {
    if (this.lastFailedUrl()) {
      this.router.navigateByUrl(this.lastFailedUrl());
    }
  }

  onActivate(event: any) {
    console.log('Activated route:', event);
  }

  onDeactivate(event: any) {
    console.log('Deactivated route:', event);
  }

  onAttach(event: any) {
    console.log('Attached route:', event);
  }

  onDetach(event: any) {
    console.log('Detached route:', event);
  }
}
