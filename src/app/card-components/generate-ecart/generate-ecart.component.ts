import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../../services/card.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generate-ecart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './generate-ecart.component.html',
  styleUrls: ['./generate-ecart.component.css'],
})
export class GenerateEcartComponent {
  isLoading = false; // State to show a loading spinner
  createdCardId: number | null = null; // Store the created card ID

  constructor(private router: Router, private cardService: CardService) {}

  requestVirtualCard() {
    const userId = 1; // Replace with dynamic user ID if applicable
    this.isLoading = true;

    this.cardService.createCard(userId).subscribe({
      next: (response) => {
        console.log('Card created successfully:', response);
        this.createdCardId = response.id; // Capture the card ID from the response
        this.isLoading = false;
        this.goToConditions(); // Navigate after successful creation
      },
      error: (err) => {
        console.error('Error creating card:', err);
        this.isLoading = false;
        alert('Failed to create card. Please try again later.');
      },
    });
  }

  goToConditions() {
    // Pass the created card ID as a query parameter
    this.router.navigate(['/app-client/conditions'], {
      queryParams: { cardId: this.createdCardId },
    });
  }
}
