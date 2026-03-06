import { TestBed } from '@angular/core/testing';

import Profile from './profile';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

describe('Profile', () => {
  it('should display user ID from route parameters', async () => {
    TestBed.configureTestingModule({
      imports: [Profile],
      providers: [provideRouter([{ path: 'users/:id', component: Profile }])],
    });

    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/users/1', Profile);

    expect(harness.routeNativeElement?.textContent).toContain('"id": 1');
  });
});
