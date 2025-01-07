import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WalletService {
    private baseUrl = 'http://localhost:8080/api/wallets'; // Base URL for wallet operations

    constructor(private http: HttpClient) {}

    // Get wallet balance for a specific user
    getWalletBalance(userId: number): Observable<number> {
        const payload = { userId: userId.toString() };
        return this.http.post<number>(`${this.baseUrl}/getbalance`, payload);
    }
}
