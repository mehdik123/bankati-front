import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private baseUrl = 'http://localhost:8081/cartes'; 

  constructor(private http: HttpClient) {}

  getCardDetails(cardId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getdetails?id=${cardId}`, {});
  }
  
  validateCard(cardId: number, otp: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/valider-otp?id=${cardId}&otp=${otp}`, {}, { responseType: 'text' });
  }
  

  createCard(userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/creer?utilisateurId=${userId}`, {});
  }

  updatePlafond(cardId: number, userId: number, plafond: number): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/update-plafond?userId=${userId}&id=${cardId}&plafond=${plafond}`,
      {}
    );
  }

  rechargeCard(cardId: number, userId: number, amount: number): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/${cardId}/recharge?userId=${userId}&amount=${amount}`,
      {}
    );
  }

  handleFacture(cardId: number, userId: number, factureId: string, amount: number): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/${cardId}/facture?userId=${userId}&factureId=${factureId}&amount=${amount}`,
      {}
    );
  }

  makeDonation(cardId: number, senderId: number, receiverAccountId: number, amount: number): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/${cardId}/donation?senderId=${senderId}&receiverAccountId=${receiverAccountId}&amount=${amount}`,
      {}
    );
  }
}
