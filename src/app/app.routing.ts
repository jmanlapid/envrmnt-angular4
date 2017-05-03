import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/auth-guard.service';

const routes: Routes = [
  // Add the redirect
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ AuthGuard ]
  }
];

export const routing = RouterModule.forRoot(routes);
