import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  cardId: number | null = null;

  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard'], { queryParams: { cardId: this.cardId } });
  }
}
