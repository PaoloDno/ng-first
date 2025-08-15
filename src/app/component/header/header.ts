import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  template: `
    <header>
      My first Angular APP
      <nav>
        <span></span>
      </nav>
      <ul>
        <li>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            Home
          </a>
        </li>
        <li>
          <a routerLink="/todos" routerLinkActive="active"> Todos </a>
        </li>
      </ul>
    </header>
  `,
  styles: `
  header {
  background: #f8f9fa;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  a.active {
    color: #1976d2;
    border-bottom: 1px solid #1976d2;
  }
  `,
})
export class Header {}
