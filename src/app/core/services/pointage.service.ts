import { Injectable } from '@angular/core';
import { Pointage } from '../models/pointage.model';

@Injectable({
  providedIn: 'root',
})
export class PointageService {
  private lastPointage: Pointage | null = null;

  pointer(type: 'entrée' | 'sortie') {
    const now = new Date().toLocaleString();
    this.lastPointage = { type, time: now };
  }

  getLastPointage(): Pointage | null {
    return this.lastPointage;
  }
}
