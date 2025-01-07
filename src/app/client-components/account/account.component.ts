import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  imports :[
    CommonModule,
    FormsModule
  ],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  standalone: true,
})
export class AccountComponent implements OnInit {
  accountBalance: number | null = null; // Solde du compte

  constructor(private walletService: WalletService) {}

  ngOnInit() {
    const userId = 1; // Replace with the actual user ID
    this.fetchBalance(userId);
  }

  fetchBalance(userId: number) {
    this.walletService.getWalletBalance(userId).subscribe({
      next: (balance) => {
        this.accountBalance = balance;
      },
      error: (error) => {
        console.error('Failed to fetch wallet balance:', error);
      },
    });
  }
}