import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'aicha' && this.password === 'aicha123') {
      this.router.navigate(['/app-client']); // Navigate to AppClientComponent
    } else {
      this.error = 'Invalid credentials. Please try again.';
    }
  }
}
