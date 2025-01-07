import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl = 'http://localhost:8087/api/payment'; // Update with your backend URL

  constructor(private http: HttpClient) {}


  // Transfer money
transferMoney(senderId: number, receiverName: string, receiverRib: string, amount: number): Observable<string> {
    return this.http.post(`${this.apiUrl}/transfer`, null, {
      params: new HttpParams()
        .set('senderId', senderId.toString())
        .set('receiverName', receiverName)
        .set('receiverRib', receiverRib)
        .set('amount', amount.toString()),
      responseType: 'text', // Specify responseType to handle plain text responses
    });
  }
  

  // Recharge phone
rechargePhone(clientId: number, amount: number, phoneNumber: string): Observable<string> {
    return this.http.post(`${this.apiUrl}/recharge`, null, {
      params: new HttpParams()
        .set('clientId', clientId.toString())
        .set('amount', amount.toString())
        .set('phoneNumber', phoneNumber),
      responseType: 'text', // Expect a plain text response
    });
  }
  

  // Get invoice details
  getInvoiceDetails(clientId: number, invoiceReference: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/invoice`, {
      params: new HttpParams()
        .set('clientId', clientId.toString())
        .set('invoiceReference', invoiceReference),
    });
  }

  // Pay invoice
  payInvoice(clientId: number, invoiceReference: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/payInvoice`, null, {
      params: new HttpParams()
        .set('clientId', clientId.toString())
        .set('invoiceReference', invoiceReference),
    });
  }
}
