import { Component, inject, Signal } from '@angular/core';
import { ROUTER_OUTLET_DATA } from '@angular/router';
import { OutletConfig } from '../../app';
import { NavigationDashboard } from '../../core/components/navigation-dashboard/navigation-dashboard';

@Component({
  selector: 'app-home',
  imports: [NavigationDashboard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {
  outletData = inject(ROUTER_OUTLET_DATA) as Signal<OutletConfig>;
}
