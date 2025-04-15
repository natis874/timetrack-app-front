import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planning } from '../models/planning.model';  // Importer le modèle Planning

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  constructor(private readonly http: HttpClient) {}

  // Méthode pour obtenir les plannings
  getAllPlannings(): Observable<Planning[]> {
    return this.http.get<Planning[]>('/api/plannings');
  }

  // Méthode pour ajouter une tâche au planning
  addPlanning(planning: Planning): Observable<Planning> {
    return this.http.post<Planning>('/api/plannings', planning);
  }
}
