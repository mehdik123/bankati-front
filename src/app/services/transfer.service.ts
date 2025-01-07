import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private apiUrl = 'http://localhost:8087/api/payment/transfer'; // URL backend

  constructor(private http: HttpClient) {}

  transferMoney(senderId: number, receiverName: string, receiverRib: string, amount: number): Observable<string> {
    return this.http.post<string>(this.apiUrl, null, {
      params: {
        senderId: senderId.toString(),
        receiverName,
        receiverRib,
        amount: amount.toString(),
      },
    });
  }
}
