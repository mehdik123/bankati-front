import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Add this flag
  imports: [RouterModule], // Import RouterModule to enable router-outlet
  template: `

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
