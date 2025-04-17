
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PointageComponent } from './pointage/pointage.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pointage', component: PointageComponent },
    { path: '**', redirectTo: 'login' }]
