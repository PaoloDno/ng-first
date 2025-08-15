import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <div>
      <h3>Count: {{ count() }}</h3>
      <button (click)="increment()">+</button>
      <button (click)="decrement()" >-</button>
    </div>

  `,
  styles: `
    .button {
    margin-top: 1rem;
    }
  `
})
export class Counter {
  count = signal(0);
  min = 0;
  max = 10

  increment(): void {
    if (this.count() < this.max) {
      this.count.update(c => c + 1);
    }
  }

  decrement(): void {
    if (this.count() > this.min) {
      this.count.update(c => c - 1);
    }
  }

}
