import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../models/leave-request.model';  //Import de modele ça marche pas je sais pas pourquoi 

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private readonly http: HttpClient) {}

  // Méthode pour soumettre une demande de congé
  submitLeaveRequest(leaveRequest: LeaveRequest): Observable<LeaveRequest> {
    return this.http.post<LeaveRequest>('/api/leave-requests', leaveRequest);
  }

  // Méthode pour obtenir toutes les demandes de congé
  getAllLeaveRequests(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>('/api/leave-requests');
  }
}
