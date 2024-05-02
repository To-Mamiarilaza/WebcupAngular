import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from './components/layout/nav-header/nav-header.component';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavHeaderComponent, RouterModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'homes';

  constructor(private router: Router) {}

  isLoginRoute() {
    return this.router.url == '/login';
  }
}
