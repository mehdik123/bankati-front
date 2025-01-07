import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [
    RouterLink
  ],
  standalone: true
})
export class SidebarComponent {
  clientName: string = 'John Doe'; // Nom du client
}
