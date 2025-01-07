import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-root',
  standalone: true, // Add this flag
  imports: [RouterModule, CommonModule], // Import RouterModule to enable router-outlet
  template: `

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
