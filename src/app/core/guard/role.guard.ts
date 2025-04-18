
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/login.service';

export const RoleGuard = (expectedRole: 'user' | 'manager'): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const role = authService.getUserRole();
    if (role === expectedRole) {
      return true;
    }

    router.navigate(['/']);
    return false;
  };
};
