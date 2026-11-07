
// Importamos Component de Angular
import { Component } from '@angular/core';

// Importamos la interfaz Cancha
import type { Cancha } from '../models/Cancha';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

  // Nombre y descripción del proyecto
  nombreProyecto: string = 'Sistema de Reservas de Canchas';
  descripcion: string = 'Sistema para administrar canchas deportivas, clientes, reservas y pagos.';

  // Registro de ejemplo utilizando la interfaz Cancha
  canchaEjemplo: Cancha = {
    id: 1,
    nombre: 'Cancha Norte',
    tipo: 'futbol',
    precio: 15000
  };

  // Getter que devuelve el nombre de la cancha
  get nombreCancha(): string {
    return this.canchaEjemplo.nombre;
  }
}

