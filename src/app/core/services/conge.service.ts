
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Conge } from '../models/conge.model';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private demandesConge: Conge[] = [
    { id: 1, utilisateurId: 1, debut: new Date('2025-05-01'), fin: new Date('2025-05-05'), statut: 'En attente', commentaire: 'Vacances été' },
    { id: 2, utilisateurId: 2, debut: new Date('2025-06-10'), fin: new Date('2025-06-15'), statut: 'En attente', commentaire: 'Congé maladie' }
  ];

  constructor() {}

  // Récupère les demandes de congé pour l'utilisateur ou pour le manager
  getDemandesConge(utilisateurId: number): Observable<Conge[]> {
    return of(this.demandesConge.filter(conge => conge.utilisateurId === utilisateurId || conge.statut === 'En attente'));
  }

  // Soumettre une nouvelle demande de congé
  ajouterDemandeConge(conge: Conge): void {
    this.demandesConge.push(conge);
  }

  // Valider une demande de congé (par le manager)
  validerDemande(id: number, statut: 'Approuvé' | 'Refusé'): void {
    const demande = this.demandesConge.find(conge => conge.id === id);
    if (demande) {
      demande.statut = statut;
    }
  }
}
