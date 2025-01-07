import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../../services/payment.service'; // Import the PaymentService

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css'],
  imports: [NgIf, FormsModule],
  standalone: true,
})
export class RechargeComponent implements OnInit {
  logoUrl: string | null = null; // Logo of the provider
  rechargeName: string | null = null; // Name of the recharge provider
  phoneNumber: string = ''; // Phone number entered by the user
  amount: number | null = null; // Amount entered by the user
  clientId: number = 1; // Replace with dynamic client ID if needed
  message: string | null = null; // Message to display feedback

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService // Inject the PaymentService
  ) {}

  ngOnInit(): void {
    // Get route parameters
    this.route.queryParams.subscribe((params) => {
      this.logoUrl = params['logo'] || null;
      this.rechargeName = params['rechargeName'] || null;
    });
  }

  // Perform the recharge action
  effectuerRecharge() {
    if (!this.phoneNumber || !this.amount || this.amount <= 0) {
      alert('Veuillez entrer un numéro de téléphone et un montant valide.');
    } else {
      this.paymentService.rechargePhone(this.clientId, this.amount, this.phoneNumber).subscribe({
        next: (response) => {
          this.message = response; // Use the plain string or JSON message
          alert(this.message);
        },
        error: (err) => {
          this.message = err.error?.message || 'Échec de la recharge. Veuillez réessayer.';
          alert(this.message);
          console.error(err);
        },
      });
    }
  }
  
}
