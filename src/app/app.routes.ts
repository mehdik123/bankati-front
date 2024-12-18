import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { role: 'admin' }, // Protect the route and allow only admins
    },
    {
        path: 'client',
        component: ClientComponent,
        canActivate: [AuthGuard],
        data: { role: 'client' }, // Protect the route and allow only clients
    },
    {
        path: 'agent',
        component: ClientComponent,
        canActivate: [AuthGuard],
        data: { role: 'agent' }, // Protect the route and allow only agents
    },
    { path: '**', redirectTo: '' }, // Redirect unknown paths to login
];
