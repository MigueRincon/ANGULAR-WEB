import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  standalone: true,
  templateUrl: './saludo.html',
  styleUrl: './saludo.css',
})
export class Saludo {
  nombre: string = 'Mundo';
}
