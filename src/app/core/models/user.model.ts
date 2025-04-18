export type UserRole = 'user' | 'manager';

export interface User {
  id:number  
  email: string;
  password: string;
  role:UserRole
  }