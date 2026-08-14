import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  nombre: string = 'Miguel Rincon';
  edad: number = 23;
  activo: boolean = true;
}
