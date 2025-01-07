import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private apiUrl = 'http://localhost:8080/api/clients'; // URL du backend

    constructor(private http: HttpClient) {}

    getClients(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}`);
    }

    createClient(clientData: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, clientData);
    }

    deleteClient(clientId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${clientId}`);
    }
}
