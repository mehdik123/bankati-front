import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor } from './token.interceptor';

import { GenerateEcartComponent } from './card-components/generate-ecart/generate-ecart.component';
import { ConditionsComponent } from './card-components/conditions/conditions.component';
import { ValidateOtpComponent } from './card-components/validate-otp/validate-otp.component';
import { SuccessComponent } from './card-components/success/success.component';
import { DashboardComponent } from './card-components/dashboard/dashboard.component';
import { CreateCardComponent } from './card-components/create-card/create-card.component';
import { UpdatePlafondComponent } from './card-components/update-plafond/update-plafond.component';
import { HomeComponent } from './card-components/home/home.component';

@NgModule({
    declarations: [
        // Declare all components here
        GenerateEcartComponent,
        ConditionsComponent,
        ValidateOtpComponent,
        SuccessComponent,
        DashboardComponent,
        CreateCardComponent,
        UpdatePlafondComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule, // Enable two-way binding with ngModel
        AppRoutingModule, // Import the routing module
    ],
    providers: [
        // Add HTTP interceptors or other providers
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ],
    bootstrap: [GenerateEcartComponent], // Start the app from GenerateEcartComponent
})
export class AppModule {}
