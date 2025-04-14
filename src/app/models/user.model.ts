export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: string;   // Par exemple : "admin", "user"
    isActive: boolean;  // Statut de l'utilisateur
  }