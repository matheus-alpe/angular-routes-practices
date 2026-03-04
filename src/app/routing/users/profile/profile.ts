import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [JsonPipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export default class Profile {
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  private userId = signal<string | null>(null);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      console.log('Route parameters changed:', params);
      const id = params.get('id');
      this.userId.set(id);
    });
  }

  readonly changeUserId = effect(() => {
    console.log('User ID changed:', this.userId());
  });

  navigateBack() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  navigateToProfile(id: number) {
    this.router.navigate(['/users', id], {
      queryParams: { from: this.route.snapshot.params['id'] },
    });
  }
}
