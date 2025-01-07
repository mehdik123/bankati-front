import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule]
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Exemple d'animation JS
    const textElement = document.getElementById('welcome-text');
    if (textElement) {
      textElement.style.transition = 'transform 1s ease-in-out';
      textElement.style.transform = 'translateY(0)';
    }

  }
  onLogin() {
    // Exemple de logique avant la redirection
    console.log('Utilisateur connecté');
    this.router.navigate(['/login']);
  }
}
