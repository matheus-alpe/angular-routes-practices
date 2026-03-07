import { Component, input } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './projects.html',
})
export class Projects {
  projectId = input.required<string>();
}
