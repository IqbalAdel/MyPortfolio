import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {

  visible: boolean = false;

  constructor() { }

  show(): void {
    this.visible = true;
    setTimeout(() => this.visible = false, 3000); // Snackbar verschwindet nach 3 Sekunden
  }

}
