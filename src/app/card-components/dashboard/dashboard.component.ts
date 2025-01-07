import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../services/card.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  card: any = {
    numeroCarte: null,
    expiration: null,
    plafond: null,
    statut: null,
  };

  isPlafondModalOpen = false; // Controls the visibility of the modal
  newPlafond: number | null = null; // User input for new plafond
  plafondMessage: string | null = null; // Message after update
  plafondMessageColor = 'red'; // Default color for messages
  cardId: number | null = null;

  constructor(private cardService: CardService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the card ID from query parameters
    this.route.queryParams.subscribe((params) => {
      this.cardId = params['cardId'] ? Number(params['cardId']) : null;
      if (this.cardId) {
        this.fetchCardDetails();
      } else {
        console.error('Card ID is missing in the query parameters.');
      }
    });
  }

  fetchCardDetails(): void {
    if (!this.cardId) {
      console.error('Card ID is not set.');
      return;
    }

    this.cardService.getCardDetails(this.cardId).subscribe({
      next: (card) => {
        this.card = {
          numeroCarte: card.numeroCarte,
          expiration: card.expiration,
          plafond: card.plafond || 0,
          statut: card.statut,
        };
      },
      error: (err) => {
        console.error('Failed to fetch card details:', err);
      },
    });
  }

  openPlafondModal(): void {
    this.isPlafondModalOpen = true;
    this.newPlafond = null; // Reset the input field
    this.plafondMessage = null; // Clear previous messages
  }

  closePlafondModal(): void {
    this.isPlafondModalOpen = false;
    this.plafondMessage = null; // Clear previous messages
  }

  updatePlafond(): void {
    if (!this.newPlafond || this.newPlafond <= 0) {
      this.plafondMessage = 'Please enter a valid plafond amount.';
      this.plafondMessageColor = 'red';
      return;
    }

    const userId = 1; // Replace with dynamic user ID if needed

    this.cardService.updatePlafond(this.cardId!, userId, this.newPlafond).subscribe({
      next: (response) => {
        this.card.plafond = this.newPlafond; // Update the local card plafond
        this.plafondMessage = response.message || 'Plafond updated successfully!';
        this.plafondMessageColor = 'green';
        this.newPlafond = null; // Reset the input
        setTimeout(() => this.closePlafondModal(), 2000); // Close the modal after a short delay
      },
      error: (err) => {
        this.plafondMessage = err.error?.message || 'Failed to update plafond.';
        this.plafondMessageColor = 'red';
      },
    });
  }

  goToPage(page: string): void {
    this.router.navigate([`/app-client/${page}`]);
  }
}
