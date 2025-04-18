
export interface Conge {
    id: number;
    utilisateurId: number;
    debut: Date;
    fin: Date;
    statut: 'En attente' | 'Approuvé' | 'Refusé';
    commentaire: string;
  }
  