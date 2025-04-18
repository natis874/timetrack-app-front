import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PointageComponent } from './pointage/pointage.component';
import { AuthGuard } from './core/guard/auth.guard';
import { RoleGuard } from './core/guard/role.guard';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'pointage',
    component: PointageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard('manager')],
  },
  { path: '**', redirectTo: '' },
];
