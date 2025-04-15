// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';  // Importer le modèle User

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly  http: HttpClient) {}

  // Méthode pour se connecter
  login(username: string, password: string): Observable<User> {
    return this.http.post<User>('/api/login', { username, password });
  }
}
