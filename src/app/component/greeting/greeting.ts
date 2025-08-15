import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  template: `
    <p>
      greeting works!
      {{ message() }}
    </p>
  `,
  styles: ``
})
export class Greeting {
  message = input('Hello')
}
