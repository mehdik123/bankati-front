import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
  standalone: true
})
export class PersonalInfoComponent {
  personalInfo = {
    fullName: 'Aicha Lahnouki',
    email: 'aicha@example.com',
    phone: '0636264622',
    address: 'Beni Mellal, Maroc',
  };
}
