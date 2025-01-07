import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    NgIf
  ],
  standalone: true
})
export class NavbarComponent {
  clientName: string = 'John Doe'; // Nom du client
  clientEmail: string = 'john.doe@example.com'; // Email du client
  showProfileMenu: boolean = false; // Contrôle l'affichage du menu profil

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }
}
