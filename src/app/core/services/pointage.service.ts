import { Injectable } from '@angular/core';
import { Pointage } from '../models/pointage.model';


@Injectable({ providedIn: 'root' })
export class PointageService {
  private pointages: Pointage[] = [];
  private idCounter = 1;

  constructor() {
    const saved = localStorage.getItem('pointages');
    this.pointages = saved ? JSON.parse(saved) : [];
    this.idCounter = this.pointages.length + 1;
  }
  

  addPointage(entryTime: string, exitTime: string): void {
    const totalHours = this.calculateHours(entryTime, exitTime);
    const pointage = {
      id: this.idCounter++,
      entryTime,
      exitTime,
      totalHours,
    };
    this.pointages.push(pointage);
    localStorage.setItem('pointages', JSON.stringify(this.pointages));
  }

  getPointages(): Pointage[] {
    return this.pointages;
  }


  
  private calculateHours(entry: string, exit: string): number {
    const start = new Date(entry).getTime();
    const end = new Date(exit).getTime();
    return Math.round((end - start) / (1000 * 60 * 60) * 100) / 100;
  }
}

