import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointageService } from '../core/services/pointage.service';
import { AuthService } from '../core/services/login.service';
import { Pointage } from '../core/models/pointage.model';
import { User } from '../core/models/user.model';

@Component({
  standalone: true,
  selector: 'app-pointage',
  imports: [CommonModule],
  template: `
    <div class="pointage-container">
      <h2>Bonjour {{ user?.email }} ({{ user?.role }})</h2>

      <ng-container *ngIf="user?.role === 'user'">
        <button (click)="pointer('entrée')">Pointer Entrée</button>
        <button (click)="pointer('sortie')">Pointer Sortie</button>
        <div *ngIf="lastPointage">
          <p>Dernier pointage : {{ lastPointage.type }} à {{ lastPointage.time }}</p>
        </div>
      </ng-container>

      <ng-container *ngIf="user?.role === 'manager'">
        <p>Vous êtes manager. Vous verrez ici les pointages de vos collaborateurs (fonctionnalité à venir).</p>
      </ng-container>

      <button (click)="logout()">Se déconnecter</button>
    </div>
  `,
  styles: [`.pointage-container { padding: 2rem; display: flex; flex-direction: column; gap: 1rem; max-width: 500px; margin: auto; }`]
})
export class PointageComponent {
  user: User | null = null;
  lastPointage: Pointage | null = null;

  constructor(private pointageService: PointageService, private authService: AuthService) {
    this.user = this.authService.getCurrentUser();
  }

  pointer(type: 'entrée' | 'sortie') {
    this.pointageService.pointer(type);
    this.lastPointage = this.pointageService.getLastPointage();
  }

  logout() {
    this.authService.logout();
  }
}
