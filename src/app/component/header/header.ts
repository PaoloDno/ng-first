import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  template: `
    <header>
      My first Angular APP
      <nav></nav>
    </header>
  `,
  styles: `
  header {
    display: flex;
    padding-inline: 16px;
    padding-block: 8px;
    background-color: #333;
    color: #fff;
    align-items: center;
  }
  `
})
export class Header {

}
