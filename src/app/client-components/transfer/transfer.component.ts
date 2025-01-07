import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../../services/payment.service'; // Import the service

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule],
})
export class TransferComponent {
  transferData = {
    senderId: 1,
    recipientName: '',
    cardNumber: '',
    amount: null,
  };

  message: string | null = null; // Message to show success or error
  messageType: 'success' | 'error' | null = null; // Message type

  constructor(private paymentService: PaymentService) {}

  submitTransfer() {
    const { senderId, recipientName, cardNumber, amount } = this.transferData;

    // Validate the input fields
    if (!recipientName || !cardNumber || !amount || amount <= 0) {
      this.message = 'Veuillez remplir tous les champs avec des données valides.';
      this.messageType = 'error';
      return;
    }

    // Call the transferMoney service
    this.paymentService.transferMoney(senderId, recipientName, cardNumber, amount).subscribe({
      next: (response) => {
        this.message = response; // Handle success response
        this.messageType = 'success';
        this.resetForm(); // Reset form after success
      },
      error: (err) => {
        this.message = err.error?.message || 'Une erreur est survenue lors du virement.';
        this.messageType = 'error';
      },
    });
  }

  resetForm() {
    this.transferData = {
      senderId: 1,
      recipientName: '',
      cardNumber: '',
      amount: null,
    };
  }
}
