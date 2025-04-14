export interface Tracking {
    id: number;
    userId: number;  // Référence à l'utilisateur qui a effectué le pointage
    date: string;     // Date du pointage
    timeIn: string;   // Heure d'entrée
    timeOut: string;  // Heure de sortie
    hoursWorked: number;  // Nombre d'heures travaillées
  }