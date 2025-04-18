import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-container">
      <h2>Zone réservée aux managers 👑</h2>
      <p>Ici tu pourras gérer les pointages des utilisateurs.</p>
    </div>
  `,
  styles: [`.admin-container { padding: 2rem; text-align: center; }`]
})
export class AdminComponent {}