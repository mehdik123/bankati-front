import { Component } from '@angular/core';
import { KeycloakService } from '../keycloak.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [FormsModule, CommonModule],
    selector: 'app-login',
    template: `
        <div class="background-container">
            <div class="container d-flex justify-content-center align-items-center vh-100">
                <div class="login-card shadow-lg p-4">
                    <div class="text-center mb-4">
                        <h1 class="logo text-gold fw-bold">Bankati</h1>
                        <p class="slogan text-muted">Your e-banking solution anytime, anywhere</p>
                    </div>
                    <form (ngSubmit)="login()" #loginForm="ngForm">
                        <div class="mb-3">
                            <label for="username" class="form-label text-dark fw-bold">Username</label>
                            <input
                                    type="text"
                                    id="username"
                                    [(ngModel)]="username"
                                    name="username"
                                    class="form-control"
                                    placeholder="Enter your username"
                                    required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label text-dark fw-bold">Password</label>
                            <input
                                    type="password"
                                    id="password"
                                    [(ngModel)]="password"
                                    name="password"
                                    class="form-control"
                                    placeholder="Enter your password"
                                    required
                            />
                        </div>
                        <div *ngIf="error" class="text-danger mb-3 text-center">{{ error }}</div>
                        <div class="d-grid">
                            <button type="submit" class="btn btn-gold fw-bold" [disabled]="loading || !loginForm.valid">
                                <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
                                {{ loading ? 'Logging in...' : 'Login' }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .background-container {
                background: url('../../assets/images/bank.jpg') no-repeat center center fixed;
                background-size: cover;
                height: 100vh;
            }
            .login-card {
                background-color: rgba(255, 255, 255, 0.9);
                border-radius: 12px;
                width: 100%;
                max-width: 400px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
            .logo {
                color: #e3ba3a;
                font-size: 2rem;
                letter-spacing: 2px;
            }
            .slogan {
                font-size: 0.9rem;
                color: #6c757d;
            }
            .form-control {
                border-radius: 8px;
                padding: 0.6rem;
            }
            .btn-gold {
                background-color: #e3ba3a;
                border: none;
                color: white;
                padding: 0.7rem;
                border-radius: 8px;
                font-size: 1rem;
                transition: background-color 0.3s ease;
            }
            .btn-gold:hover {
                background-color: #d1a326;
            }
        `
    ],
})
export class LoginComponent {
    username = '';
    password = '';
    error = '';
    loading = false;

    constructor(private keycloakService: KeycloakService, private router: Router) {}

    login() {
        if (!this.username || !this.password) {
            this.error = 'Username and password are required.';
            return;
        }

        this.loading = true;
        this.error = '';

        this.keycloakService
            .login(this.username, this.password)
            .then(() => {
                const role = this.keycloakService.getRole();
                if (role === 'admin') {
                    this.router.navigate(['/admin']);
                } else if (role === 'agent') {
                    this.router.navigate(['/agent']);
                } else if (role === 'client') {
                    this.router.navigate(['/client']);
                } else {
                    this.error = 'Invalid role.';
                }
            })
            .catch(() => {
                this.error = 'Login failed. Please check your credentials.';
            })
            .finally(() => {
                this.loading = false;
            });
    }
}
