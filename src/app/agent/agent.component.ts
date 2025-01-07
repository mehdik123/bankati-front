import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-agent',
  template: `
    <div class="container mt-5">
      <h2>Agent/Client Login</h2>
      <form (ngSubmit)="login()">
        <div class="mb-3">
          <label for="role" class="form-label">Select Role</label>
          <select id="role" [(ngModel)]="role" name="role" class="form-select">
            <option value="agent">Agent</option>
            <option value="client">Client</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" id="username" [(ngModel)]="username" name="username" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" [(ngModel)]="password" name="password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-success">Login</button>
        <p *ngIf="error" class="text-danger mt-3">{{ error }}</p>
      </form>
    </div>
  `,
  imports: [FormsModule, CommonModule],
})
export class AgentComponent {
  username = '';
  password = '';
  role = 'agent'; // Default role is agent
  error = '';

  constructor(private router: Router) {}

  login() {
    // Static validation for demo purposes
    if (this.role === 'agent' && this.username === 'agent' && this.password === 'agent123') {
      alert('Agent Login Successful');
      this.router.navigate(['/agent-dashboard']); // Redirect to agent dashboard
    } else if (this.role === 'client' && this.username === 'client' && this.password === 'client123') {
      alert('Client Login Successful');
      this.router.navigate(['/client-dashboard']); // Redirect to client dashboard
    } else {
      this.error = 'Invalid credentials. Please try again.';
    }
  }
}
