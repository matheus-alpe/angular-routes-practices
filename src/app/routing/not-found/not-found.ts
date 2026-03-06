import { Component } from '@angular/core';
import { NavigationDashboard } from '../../core/components/navigation-dashboard/navigation-dashboard';

@Component({
  selector: 'app-not-found',
  imports: [NavigationDashboard],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export default class NotFound {}
