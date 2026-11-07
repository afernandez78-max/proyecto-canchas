
// Importamos la interfaz Reserva
import type { Reserva } from "../models/Reserva.js";

// Regla 1: evitar reservas duplicadas para la misma cancha
export function canchaDisponible(
  reservas: Reserva[],
  nuevaReserva: Reserva
): boolean {
  return !reservas.some(reserva =>
    reserva.canchaId === nuevaReserva.canchaId &&
    reserva.fecha === nuevaReserva.fecha &&
    reserva.hora === nuevaReserva.hora &&
    reserva.estado !== "cancelada"
  );
}

// Regla 2: verificar que la fecha no sea anterior a hoy
export function fechaValida(
  reserva: Reserva,
  fechaActual: string
): boolean {
  return reserva.fecha >= fechaActual;
}
