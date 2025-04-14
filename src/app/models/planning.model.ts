export interface Planning {
    id: number;
    userId: number;  // Référence à l'utilisateur
    date: string;    // Date de la tâche
    task: string;    // Description de la tâche ou du planning
    status: string;  // Statut de la tâche : "à faire", "en cours", "terminé"
  }