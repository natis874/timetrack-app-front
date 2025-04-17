
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthResponse, Login } from '../models/login.model';
import { of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoginService {
  private tokenKey = 'auth_token';
  private currentUserRole = new BehaviorSubject<'USER' | 'MANAGER' | null>(null);

  constructor(private http: HttpClient) {}

  login(loginData: Login): Observable<AuthResponse> {
    if (loginData.email === 'user@test.com' && loginData.password === '123456') {
      const token = 'fake-user-token';
      const response: AuthResponse = { token, userId: 1, role: 'USER' };
      this.setSession(response);
      return of(response);
    } else if (loginData.email === 'manager@test.com' && loginData.password === 'admin123') {
      const token = 'fake-manager-token';
      const response: AuthResponse = { token, userId: 2, role: 'MANAGER' };
      this.setSession(response);
      return of(response);
    } else {
      return throwError(() => new Error('Invalid credentials'));
    }
  }
  
  private setSession(auth: AuthResponse) {
    localStorage.setItem(this.tokenKey, auth.token);
    localStorage.setItem('user_role', auth.role);
    this.currentUserRole.next(auth.role);
  }
  

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.currentUserRole.next(null);
  }

  getRole(): Observable<'USER' | 'MANAGER' | null> {
    return this.currentUserRole.asObservable();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}