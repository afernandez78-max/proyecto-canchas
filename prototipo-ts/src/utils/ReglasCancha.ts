
// Se impota la interfaz Cancha
import type { Cancha } from "../models/Cancha.js";

// Regla 1: verificar que el precio de la cancha sea mayor que cero
export function precioValido(cancha: Cancha): boolean {
  return cancha.precio > 0;
}

// Regla 2: verificar que no exista otra cancha con el mismo nombre
export function nombreDisponible(
  canchas: Cancha[],
  nombre: string
): boolean {
  return !canchas.some(cancha => cancha.nombre === nombre);
}
