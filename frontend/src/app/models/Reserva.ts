
 // Esta es Interfaz que representa una reserva de cancha
 export interface Reserva {
   readonly id: number; // Identificador de la reserva
   clienteId: number;   // Cliente que realiza la reserva
   canchaId: number;    // Cancha que se reserva
   fecha: string;       // Fecha de la reserva
   hora: string;        // Hora de la reserva
   estado: "pendiente" | "confirmada" | "cancelada"; // Estado
 }
