import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conditions',
  imports: [CommonModule, FormsModule],
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css'],
  standalone :true
})
export class ConditionsComponent implements OnInit {
  cardId: number | null = null; // Store the received card ID

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.cardId = params['cardId'] ? Number(params['cardId']) : null;
      console.log('Received cardId:', this.cardId);
    });
  }

  goToOtpValidation() {
    this.router.navigate(['/app-client/validate-otp'], {
      queryParams: { cardId: this.cardId },
    });
  }
}
