import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { routes } from './routing/app.routes';
import { JsonPipe } from '@angular/common';

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
