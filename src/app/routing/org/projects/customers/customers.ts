import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.html',
})
export class Customers {
  private route = inject(ActivatedRoute);

  // without paramsInheritanceStrategy: 'always'
  // orgId = this.route.parent?.parent?.snapshot.params['orgId'];
  // projectId = this.route.parent?.snapshot.params['projectId'];
  // customerId = this.route.snapshot.params['customerId'];

  // with paramsInheritanceStrategy: 'always'
  orgId = this.route.snapshot.params['orgId'];
  projectId = this.route.snapshot.params['projectId'];
  customerId = this.route.snapshot.params['customerId'];
}
