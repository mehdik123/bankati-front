import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Creditor} from '../models/creditor.model';
import {Transaction} from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  // Récupérer la liste des créanciers
  getCreditors(): Observable<Creditor[]> {
    return this.http.get<Creditor[]>(`${this.baseUrl}/api/creditors`);
  }

  // Enregistrer une transaction (facture ou recharge)
  makeTransaction(transaction: { date: string; amount: number; creditorName: string; type: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/payments`, transaction);
  }

  // Récupérer l'historique des transactions
  getTransactionHistory(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/api/history`);
  }
}
