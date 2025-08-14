import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './component/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, Header],
  template: `
  <app-header></app-header>
  <main>
  <app-home></app-home>
  </main>
  <router-outlet></router-outlet>
  `,
  styles: [
    `
    main {
      padding: 16px;
    }
    `
  ],
})
export class App {
  protected readonly title = signal('first-bg-app');
}
