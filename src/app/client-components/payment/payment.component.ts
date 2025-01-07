import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../services/payment.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  imports: [NgIf, FormsModule],
  standalone: true,
})
export class PaymentComponent implements OnInit {
  factureId: string = ''; // ID de la facture saisi par l'utilisateur
  logoUrl: string | null = null; // URL du logo du créancier
  factureName: string | null = null; // Nom de la facture
  clientId: number = 1; // Replace with dynamic logic to fetch the client ID
  message: string = ''; // Message to display after the payment
  messageType: 'success' | 'error' | null = null; // Success or error message type

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    // Récupérer les paramètres de la route
    this.route.queryParams.subscribe((params) => {
      this.logoUrl = params['logo'] || null;
      this.factureName = params['factureName'] || null;
    });
  }

  // Action pour effectuer le paiement de la facture
  payer(): void {
    if (!this.factureId.trim()) {
      this.showMessage('Veuillez entrer un ID de facture valide.', 'error');
      return;
    }

    this.paymentService.payInvoice(this.clientId, this.factureId).subscribe({
      next: (response) => {
        this.showMessage(`Paiement réussi : ${response}`, 'success');
      },
      error: (err) => {
        this.showMessage(
          'Une erreur est survenue lors du paiement. Veuillez réessayer.',
          'error'
        );
      },
    });
  }

  // Action pour effectuer le paiement par carte
  payerParCarte(): void {
    if (!this.factureId.trim()) {
      this.showMessage('Veuillez entrer un ID de facture valide.', 'error');
      return;
    }

    this.paymentService.payInvoice(this.clientId, this.factureId).subscribe({
      next: (response) => {
        this.showMessage(
          `Paiement par carte réussi : ${response}`,
          'success'
        );
      },
      error: (err) => {
        this.showMessage(
          'Une erreur est survenue lors du paiement par carte.',
          'error'
        );
      },
    });
  }

  // Helper function to show messages
  private showMessage(message: string, type: 'success' | 'error'): void {
    this.message = message;
    this.messageType = type;

    // Clear the message after 5 seconds
    setTimeout(() => {
      this.message = '';
      this.messageType = null;
    }, 5000);
  }
}
