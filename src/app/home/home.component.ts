import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home Component</h1>
    <button (click)="navigateToAbout()">Go to About</button>
    <button (click)="navigateToContact()">Go to Contact</button>,
    <router-outlet></router-outlet> <!-- This will render AboutComponent or ContactComponent -->
  `,
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/home/about']);
  }

  navigateToContact() {
    this.router.navigate(['/home/contact']);
  }
}
