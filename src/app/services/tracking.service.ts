import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tracking } from '../models/tracking.model';  // Importer le modèle Tracking

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private readonly http: HttpClient) {}

  // Méthode pour récupérer tous les pointages
  getAllTrackings(): Observable<Tracking[]> {
    return this.http.get<Tracking[]>('/api/trackings');
  }

  // Méthode pour enregistrer un nouveau pointage
  addTracking(tracking: Tracking): Observable<Tracking> {
    return this.http.post<Tracking>('/api/trackings', tracking);
  }
}
