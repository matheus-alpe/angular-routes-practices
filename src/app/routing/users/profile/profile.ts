import { JsonPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { User } from '../../../core/types/user';

@Component({
  selector: 'app-profile',
  imports: [JsonPipe, RouterOutlet],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export default class Profile {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly user = input.required<User>();

  navigateBack() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  navigateToProfile(id: number) {
    this.router.navigate(['/users', id], {
      queryParams: { from: this.route.snapshot.params['id'] },
    });
  }

  navigateToPosts() {
    this.router.navigate(['posts'], { relativeTo: this.route });
  }
}
