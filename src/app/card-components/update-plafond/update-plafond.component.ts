import { Component } from '@angular/core';
import { CardService } from '../../services/card.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-update-plafond',
    standalone: true, // Standalone component
    imports: [CommonModule, FormsModule],
    templateUrl: './update-plafond.component.html',
})
export class UpdatePlafondComponent {
    cardId: number = 1; // Example card ID
    userId: number = 1; // Example user ID
    plafond: number | null = null; // User input for plafond
    message: string | null = null; // Success or error message
    isLoading: boolean = false; // Loading indicator

    constructor(private cardService: CardService) {}

    updatePlafond() {
        if (this.plafond === null || this.plafond <= 0) {
            this.message = 'Erreur: Veuillez entrer un plafond valide.';
            return;
        }
    
        this.isLoading = true;
        this.message = null;
    
        this.cardService.updatePlafond(this.cardId, this.userId, this.plafond).subscribe({
            next: (response) => {
                this.isLoading = false;
                this.message = response.message; // Display the success message from backend
            },
            error: (err) => {
                this.isLoading = false;
                console.error('Error updating plafond:', err);
                this.message = err.error?.message || 'Échec de la mise à jour du plafond.'; // Display the error message from backend
            },
        });
    }
    
}
