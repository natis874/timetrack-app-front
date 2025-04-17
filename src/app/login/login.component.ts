import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Ajout de FormGroup
import { Router } from '@angular/router';
import { LoginService } from '../core/services/login.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Login {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl:'./login.component.css'
})
export class LoginComponent {
  private fb: FormBuilder;

  loginForm: FormGroup; // Déclarez la variable de type FormGroup

  errorMessage = '';

  constructor(
    fb: FormBuilder, // Injection via constructeur
    private loginService: LoginService,
    private router: Router
  ) {
    this.fb = fb;

    // Initialisation du formulaire avec FormGroup
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const loginData: Login = this.loginForm.value;

    this.loginService.login(loginData).subscribe({
      next: (res) => {
        if (res.role === 'USER') {
          this.router.navigate(['/pointage']); // <- ici
        } else if (res.role === 'MANAGER') {
          this.router.navigate(['/pointage']);
        }
      },
      error: () => (this.errorMessage = 'Identifiants invalides')
    });
  }
}

