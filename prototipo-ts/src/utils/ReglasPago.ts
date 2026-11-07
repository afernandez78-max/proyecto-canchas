
// Importamos la interfaz Pago
import type { Pago } from "../models/Pago.js";

// Regla 1: verificar que el monto sea mayor que cero
export function montoValido(pago: Pago): boolean {
  return pago.monto > 0;
}

// Regla 2: evitar pagar dos veces la misma reserva
export function pagoDisponible(
  pagos: Pago[],
  nuevoPago: Pago
): boolean {
  return !pagos.some(pago =>
    pago.reservaId === nuevoPago.reservaId &&
    pago.estado === "pagado"
  );
}
