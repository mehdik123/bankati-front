import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../services/card.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validate-otp',
  imports: [CommonModule, FormsModule],
  templateUrl: './validate-otp.component.html',
  styleUrls: ['./validate-otp.component.css'],
  standalone: true,
})
export class ValidateOtpComponent implements OnInit {
  otp: string = '';
  message: string | null = null;
  success = false;
  cardId: number | null = null; // Card ID passed as a query parameter

  constructor(private route: ActivatedRoute, private cardService: CardService, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.cardId = params['cardId'] ? Number(params['cardId']) : null;
      console.log('Received cardId for OTP validation:', this.cardId);
    });
  }

  validateOtp() {
    if (this.cardId === null) {
      alert('Card ID is missing.');
      return;
    }
  
    this.cardService.validateCard(this.cardId, this.otp).subscribe({
      next: (response) => {
        console.log('OTP Validation Response:', response);
        this.success = true;
        this.message = response; // Directly use the response text
        setTimeout(() => {
          // Navigate to dashboard with card ID as query parameter
          this.router.navigate(['/app-client/dashboard'], { queryParams: { cardId: this.cardId } });
        }, 2000);
      },
      error: (err) => {
        console.error('OTP Validation Error:', err);
        this.success = false;
        this.message = err.error ? err.error : 'Invalid OTP. Please try again.';
      },
    });
  }
  
  
  
}
