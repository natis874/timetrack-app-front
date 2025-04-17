
export interface Login {
    email: string;
    password: string;
  }

  export interface AuthResponse {
    token: string;
    userId: number;
    role: 'USER' | 'MANAGER';
  }
  