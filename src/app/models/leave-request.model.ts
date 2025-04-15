export interface LeaveRequest {
    id: number;
    userId: number;  // Référence à l'utilisateur
    startDate: string;  // Date de début
    endDate: string;    // Date de fin
    status: string;     // Statut de la demande : "approuvé", "en attente"
    type: string;       // Type de congé : "vacances", "maladie", etc.
  }