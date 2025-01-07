import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { CreateCardComponent } from './card-components/create-card/create-card.component';
import { ValidateOtpComponent } from './card-components/validate-otp/validate-otp.component';
import { UpdatePlafondComponent } from './card-components/update-plafond/update-plafond.component';
import { GenerateEcartComponent } from './card-components/generate-ecart/generate-ecart.component';
import { ConditionsComponent } from './card-components/conditions/conditions.component';
import { SuccessComponent } from './card-components/success/success.component';
import { DashboardComponent } from './card-components/dashboard/dashboard.component';
import { HomeComponent } from './client-components/home/home.component';
import { TransferComponent } from './client-components/transfer/transfer.component';
import { AccountComponent } from './client-components/account/account.component';
import { PersonalInfoComponent } from './client-components/personal-info/personal-info.component';
import { RechargeComponent } from './client-components/recharge/recharge.component';
import { PaymentComponent } from './client-components/payment/payment.component';
import { HistoryComponent } from './client-components/history/history.component';
import { CreditorsComponent } from './client-components/creditors/creditors.component';

const routes: Routes = [
    // Root route - default redirects to generate E-cart
    { path: '', redirectTo: '/generate-ecart', pathMatch: 'full' },
    

    // Generate E-Cart flow
    { path: 'generate-ecart', component: GenerateEcartComponent }, // Initial page to request a virtual card
    { path: 'conditions', component: ConditionsComponent }, // Page to accept terms & conditions
    { path: 'validate-otp', component: ValidateOtpComponent }, // Page to validate OTP
    { path: 'success', component: SuccessComponent }, // Success confirmation page
    { path: 'dashboard', component: DashboardComponent }, // Dashboard to manage the card
    { path: 'Creditors', component: CreditorsComponent }, // Page par défaut : Liste des créanciers
    { path: 'history', component: HistoryComponent },
    { path: 'payment/:id', component: PaymentComponent },
    { path: 'recharge/:id', component: RechargeComponent },
    { path: 'personal-info', component: PersonalInfoComponent }, // Mes Informations Personnelles
    { path: 'account', component: AccountComponent }, // Mon Compte
    { path: 'transfer', component: TransferComponent },
    { path: '', component: HomeComponent },


    // Manage cards (CRUD operations)
    { path: 'create-card', component: CreateCardComponent }, // For creating a card
    { path: 'update-plafond', component: UpdatePlafondComponent }, // For updating the plafond

    // Wildcard route to redirect to the root on unknown paths
    { path: '**', redirectTo: '/generate-ecart' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
