import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <p>Hello WORLD</p>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('first-bg-app');
}
