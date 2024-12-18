import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class KeycloakService {
    private token: string = '';
    private role: string = '';
    private userDetails: any = null;

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Promise<void> {
        console.log('Attempting login with username:', username);

        const body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);

        return this.http
            .post<any>('http://localhost:8085/api/auth/login', body.toString(), {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                }),
            })
            .toPromise()
            .then((response) => {
                console.log('Login response:', response);
                this.token = response.token;
                this.role = response.role;
                this.userDetails = response.userDetails;

                localStorage.setItem('token', this.token);
                localStorage.setItem('role', this.role);
                localStorage.setItem('userDetails', JSON.stringify(this.userDetails));

                console.log('Token stored:', this.token);
                console.log('Role stored:', this.role);
                console.log('User details stored:', this.userDetails);
            })
            .catch((error) => {
                console.error('Login failed with error:', error);
                throw error;
            });
    }

    getToken(): string | null {
        const token = this.token || localStorage.getItem('token');
        console.log('Retrieved token:', token);
        return token;
    }

    getRole(): string | null {
        const role = this.role || localStorage.getItem('role');
        console.log('Retrieved role:', role);
        return role;
    }

    getUserDetails(): any {
        if (this.userDetails) {
            console.log('Retrieved user details from memory:', this.userDetails);
            return this.userDetails;
        }
        const storedDetails = localStorage.getItem('userDetails');
        console.log('Retrieved user details from storage:', storedDetails);
        return storedDetails ? JSON.parse(storedDetails) : null;
    }

    logout(): void {
        console.log('Logging out. Clearing token, role, and user details.');
        this.token = '';
        this.role = '';
        this.userDetails = null;
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('userDetails');
    }
}
