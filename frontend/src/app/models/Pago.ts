
// Esta es Interfaz que representa el pago de una reserva
export interface Pago {
  readonly id: number; // Identificador del pago
  reservaId: number;   // Reserva a la que pertenece
  monto: number;       // Cantidad de dinero que se paga
  estado: "pendiente" | "pagado"; // Estado del pago
}
