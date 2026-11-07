
 // Esta Interfaz que representa una cancha deportiva
 export interface Cancha {
   readonly id: number; // Identificador que no se puede modificar
   nombre: string;      // Nombre de la cancha
   tipo: "futbol" | "tenis"; // Tipo de deporte
   precio: number;      // Precio por hora
 }
