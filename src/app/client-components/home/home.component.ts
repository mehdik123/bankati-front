import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  clientName = 'Aicha Lahnouki';
  clientBalance = 10000;
  notifications = [
    'Votre facture d\'électricité est due le 25/12/2023.',
    'Offre spéciale : Rechargez et obtenez 10% de cashback !'
  ]; // Notifications (exemple)
  recentTransfers = [
    { recipient: 'Aicha', amount: 2000 },
    { recipient: 'Mouiz', amount: 1000 },
  ]; // Virements récents (exemple)
  recentRecharges = [
    { type: 'Internet', amount: 100 },
    { type: 'National', amount: 50 },
  ]; // Recharges récentes (exemple)
}
