import { Component } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-create-card',
    standalone: true, // Standalone component
    imports: [CommonModule, FormsModule], // Import FormsModule here
    templateUrl: './create-card.component.html',
})
export class CreateCardComponent {
    utilisateurId: number = 12345; // Example user ID
    card: Card | null = null; // Explicitly initialize as null
    errorMessage: string | null = null; // Explicitly initialize as null

    constructor(private cardService: CardService) {}

    createCard() {
        this.card = null; // Reset card before making the request
        this.errorMessage = null; // Reset error message before making the request

        this.cardService.createCard(this.utilisateurId).subscribe({
            next: (data) => {
                this.card = data; // Set card data on success
                alert('Card created successfully!');
            },
            error: (err) => {
                console.error(err); // Log error for debugging
                this.errorMessage = err.error?.message || 'An unexpected error occurred.';
            },
        });
    }
}
