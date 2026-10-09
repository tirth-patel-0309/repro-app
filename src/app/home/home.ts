import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <h1>Welcome</h1>
    <p>This is a simple Angular website with a reactive form.</p>
    <a routerLink="/contact" class="button">Contact us</a>
  `,
})
export class Home {}
