
 // Esta es Interfaz que representa a un cliente
 export interface Cliente {
   readonly id: number; // Identificador que no se puede modificar
   nombre: string;      // Nombre del cliente
   telefono: string;    // Número de teléfono
   correo?: string;     // Correo electrónico opcional
 }
