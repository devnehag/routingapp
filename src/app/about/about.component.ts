import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  displayBob: boolean = true;

  toggleDisplayComponent() {
    this.displayBob = !this.displayBob;
  }
}
