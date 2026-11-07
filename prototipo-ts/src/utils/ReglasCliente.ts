
// Importamos la interfaz Cliente
import type { Cliente } from "../models/Cliente.js";

// Regla 1: verificar que el nombre del cliente no esté vacío
export function nombreClienteValido(cliente: Cliente): boolean {
  return cliente.nombre.trim().length > 0;
}

// Regla 2: verificar que no exista otro cliente con el mismo teléfono
export function telefonoDisponible(
  clientes: Cliente[],
  telefono: string
): boolean {
  return !clientes.some(cliente => cliente.telefono === telefono);
}
