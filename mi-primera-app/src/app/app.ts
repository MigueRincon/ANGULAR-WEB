import { Component, signal } from '@angular/core';
import { Saludo } from './components/saludo/saludo';
import { Usuario } from './components/usuario/usuario';

@Component({
  selector: 'app-root',
  imports: [Saludo, Usuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-primera-app');
}
