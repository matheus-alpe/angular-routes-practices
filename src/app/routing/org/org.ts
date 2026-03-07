import { Component, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-org',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './org.html',
})
export class Org {
  orgId = input.required<string>();
}
