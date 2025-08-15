import { Component, signal } from '@angular/core';
import { Greeting } from '../component/greeting/greeting';
import { Counter } from '../component/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  standalone: true,
  template: `
    <p>
      home works!
      <app-greeting></app-greeting>
      {{ homeMessage()}}
       <app-counter></app-counter>
    </p>
  `,
  styles: ``
})
export class Home {
  homeMessage = signal('Hello, World! GoodDay');
}
