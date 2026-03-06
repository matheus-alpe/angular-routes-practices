import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDashboard } from './navigation-dashboard';

describe('NavigationDashboard', () => {
  let component: NavigationDashboard;
  let fixture: ComponentFixture<NavigationDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
