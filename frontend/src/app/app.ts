
// Importamos Component de Angular
import { Component } from '@angular/core';

// Importamos los tres componentes del sistema
import { Encabezado } from './encabezado/encabezado';
import { Inicio } from './inicio/inicio';
import { PiePagina } from './pie-pagina/pie-pagina';

@Component({
  selector: 'app-root',
  imports: [Encabezado, Inicio, PiePagina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

