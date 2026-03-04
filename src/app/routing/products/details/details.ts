import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export default class Details {}
