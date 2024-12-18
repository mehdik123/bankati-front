import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeycloakService } from './keycloak.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private keycloakService: KeycloakService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const token = this.keycloakService.getToken();
        const role = this.keycloakService.getRole();

        console.log('AuthGuard - Token:', token);
        console.log('AuthGuard - Role:', role);

        if (!token) {
            console.warn('No token found. Redirecting to login.');
            this.router.navigate(['/']);
            return false;
        }

        // Check token expiration
        const isTokenExpired = this.isTokenExpired(token);
        if (isTokenExpired) {
            console.warn('Token is expired. Clearing storage and redirecting to login.');
            this.keycloakService.logout(); // Clear token and role
            this.router.navigate(['/']);
            return false;
        }

        // Get the expected role from route data
        const expectedRole = route.data['role'];
        console.log('AuthGuard - Expected role for route:', expectedRole);

        if (expectedRole && role !== expectedRole) {
            console.warn('Role mismatch. Redirecting to login.');
            this.router.navigate(['/']);
            return false;
        }

        console.log('AuthGuard - Access granted.');
        return true;
    }

    private isTokenExpired(token: string): boolean {
        try {
            const decoded: any = jwtDecode(token);
            const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
            console.log('AuthGuard - Token expiration time:', decoded.exp);
            console.log('AuthGuard - Current time:', currentTime);
            return decoded.exp < currentTime; // Token is expired if `exp` < current time
        } catch (error) {
            console.error('AuthGuard - Error decoding token:', error);
            return true; // Assume token is expired if decoding fails
        }
    }
}
