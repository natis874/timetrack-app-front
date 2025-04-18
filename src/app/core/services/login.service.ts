import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User,UserRole } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | null = null;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // Pour le test, on détermine le rôle en fonction de l'email
    if (email === 'manager@test.com' && password === '1234') {
      this.currentUser = { id: 1, email,password:'password', role: 'manager' };
      return true;
    }

    if (email === 'user@test.com' && password === '1234') {
      this.currentUser = { id: 2,password:'password', email, role: 'user' };
      return true;
    }

    return false;
  }

  logout(): void {
    this.currentUser = null;
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  getUserRole(): UserRole | null {
    return this.currentUser?.role || null;
  }
}
