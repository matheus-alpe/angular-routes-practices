import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-dashboard',
  templateUrl: './navigation-dashboard.html',
  styleUrl: './navigation-dashboard.css',
})
export class NavigationDashboard {
  private readonly router = inject(Router);

  addAdminAndNavigate() {
    localStorage.setItem('isAdmin', 'true');
    this.navigateToDashboard();
  }

  removeAdminAndNavigate() {
    localStorage.removeItem('isAdmin');
    this.navigateToDashboard();
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
