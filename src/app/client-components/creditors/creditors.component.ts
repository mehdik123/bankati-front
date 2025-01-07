import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-creditors',
  templateUrl: './creditors.component.html',
  styleUrls: ['./creditors.component.css'],
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class CreditorsComponent implements OnInit {
  viewMode: 'creditors' | 'history' = 'creditors';
  creditors = [
    {
      id: 1,
      name: 'AMENDIS TANGER',
      type: 'facture',
      category: 'Factures Amendis Tanger',
      logoUrl: 'assets/amendis-tanger.png',
      factures: ['Facture Eau', 'Facture Assainissement'],
    },
    {
      id: 2,
      name: 'IAM FACTURES',
      type: 'facture',
      category: 'Produit Internet SIM, Produit Fixe SIM, Produit Mobile SIM',
      logoUrl: 'assets/iam-factures.png',
      factures: ['Produit Internet SIM', 'Produit Fixe SIM', 'Produit Mobile SIM'], // Liste des factures
    },
    {
      id: 3,
      name: 'IAM RECHARGES',
      type: 'recharge',
      category: 'Téléphonie et Internet SIM',
      logoUrl: 'assets/iam-factures.png',
      recharges: ['Recharge Internet', 'Recharge Nationale', 'Recharge Internationale'], // Catégories de recharges
    },
    {
      id: 4,
      name: 'REDAL',
      type: 'facture',
      category: 'Factures REDAL',
      logoUrl: 'assets/redal.png',
      factures: ['Facture Eau', 'Facture Électricité'], // Liste des factures
    },
    {
      id: 5,
      name: 'LYDEC',
      type: 'facture',
      category: 'Factures LYDEC',
      logoUrl: 'assets/lydec.png',
      factures: ['Facture Eau', 'Facture Gaz'],
    },
  ];
  history = [
    { date: '2023-12-01', amount: 50, type: 'Recharge Internet' },
    { date: '2023-12-02', amount: 100, type: 'Facture Eau' },
    { date: '2023-12-03', amount: 20, type: 'Recharge Nationale' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
