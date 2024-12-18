import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component'; // Ensure LoginComponent is imported
import { AuthGuard } from './auth.guard'; // Import the AuthGuard

const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard], // Protect route with AuthGuard
        data: { role: 'admin' }, // Specify required role
    },
    {
        path: 'client',
        component: ClientComponent,
        canActivate: [AuthGuard], // Protect route with AuthGuard
        data: { role: 'client' }, // Specify required role
    },
    {
        path: 'agent',
        component: ClientComponent,
        canActivate: [AuthGuard], // Protect route with AuthGuard
        data: { role: 'agent' }, // Specify required role
    },
    { path: '**', redirectTo: '' }, // Redirect unknown paths to login
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
