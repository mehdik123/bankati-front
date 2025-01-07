import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-app-client',
  standalone: true,
  imports: [SidebarComponent,
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './app-client.component.html',
  styleUrl: './app-client.component.css'
})
export class AppClientComponent {

}
