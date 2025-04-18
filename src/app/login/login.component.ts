import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <h2>Connexion</h2>
      <form (ngSubmit)="onLogin()">
        <input [(ngModel)]="email" name="email" placeholder="Email" required />
        <input [(ngModel)]="password" name="password" type="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
        <p *ngIf="errorMessage">{{ errorMessage }}</p>
      </form>
    </div>
  `,
  styles: [`.login-container { padding: 2rem; max-width: 300px; margin: auto; display: flex; flex-direction: column; gap: 1rem; }`]
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(['/pointage']);
    } else {
      this.errorMessage = 'Identifiants incorrects';
    }
  }
}
