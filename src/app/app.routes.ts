import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { AuthGuard } from './auth.guard';
import { CreateCardComponent } from './card-components/create-card/create-card.component';
import { ValidateOtpComponent } from './card-components/validate-otp/validate-otp.component';
import { UpdatePlafondComponent } from './card-components/update-plafond/update-plafond.component';
import { GenerateEcartComponent } from './card-components/generate-ecart/generate-ecart.component';
import { ConditionsComponent } from './card-components/conditions/conditions.component';
import { SuccessComponent } from './card-components/success/success.component';
//import { DashboardComponent } from './card-components/dashboard/dashboard.component';
//import { RechargeComponent } from './card-components/recharge/recharge.component';
import { FactureComponent } from './card-components/facture/facture.component';
import { DonationComponent } from './card-components/donation/donation.component';

import { TransferComponent } from './client-components/transfer/transfer.component';
import { AccountComponent } from './client-components/account/account.component';
import { PersonalInfoComponent } from './client-components/personal-info/personal-info.component';
import { RechargeComponent } from './client-components/recharge/recharge.component';
import { PaymentComponent } from './client-components/payment/payment.component';
import { HistoryComponent } from './client-components/history/history.component';
import { CreditorsComponent } from './client-components/creditors/creditors.component';
import { AppClientComponent } from './client-components/app-client/app-client.component';
import { SidebarComponent } from './client-components/sidebar/sidebar.component';
import { DashboardComponent } from './card-components/dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './client-components/home/home.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { 
      path: 'app-client', 
      component: AppClientComponent, // Load AppClient as the main layout
      children: [
          { path: '', component: HomeComponent }, // Default child route for `app-client`
          { path: 'account', component: AccountComponent },
          { path: 'Creditors', component: CreditorsComponent },
          { path: 'history', component: HistoryComponent },
          { path: 'payment/:id', component: PaymentComponent },
          { path: 'recharge/:id', component: RechargeComponent },
          { path: 'transfer', component: TransferComponent },
          { path: 'sidebar', component: SidebarComponent },
          { path: 'personal-info', component: PersonalInfoComponent },
          { path: 'update-plafond', component: UpdatePlafondComponent },
          { path: 'generate-ecart', component: GenerateEcartComponent },
          { path: 'conditions', component: ConditionsComponent },
          { path: 'validate-otp', component: ValidateOtpComponent },
          { path: 'success', component: SuccessComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'facture', component: FactureComponent },
          { path: 'donation', component: DonationComponent }
      ]
  }
];
