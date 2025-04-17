import { Component } from '@angular/core';
import { PointageService } from '../core/services/pointage.service'; // Import du service
import { Pointage } from '../core/models/pointage.model'; // Import du modèle
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pointage',
  standalone: true, // Indique que ce composant est autonome
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.css'],
  imports: [FormsModule,CommonModule] // Assure-toi que FormsModule est bien importé
})
export class PointageComponent {
  entryTime: string = '';
  exitTime: string = '';
  pointages: Pointage[] = [];

  constructor(private pointageService: PointageService) {}

  // Ajouter un pointage
  addPointage() {
    if (this.entryTime && this.exitTime) {
      this.pointageService.addPointage(this.entryTime, this.exitTime);
      this.pointages = this.pointageService.getPointages(); // Mettre à jour la liste des pointages
      this.entryTime = '';
      this.exitTime = '';
    }
  }
}
