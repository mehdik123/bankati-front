import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from '../keycloak.service';

@Component({
  standalone: true,
  selector: 'app-client',
  template: `
    <div class="container mt-5">
      <h2 class="text-center" style="color: #e3ba3a;">Client/Agent Interface</h2>
      <p class="text-center">Welcome! Access your resources here.</p>
      <div class="d-flex justify-content-center">
        <button class="btn btn-danger mt-3" (click)="logout()">Logout</button>
      </div>
    </div>
  `,
})
export class ClientComponent {
  constructor(private keycloakService: KeycloakService, private router: Router) {}

  logout() {
    this.keycloakService.logout();
    this.router.navigate(['/']);
  }
}
