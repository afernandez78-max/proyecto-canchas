
// Interfaz que define cómo se procesa el pago
export interface MetodoPago {
  procesarPago(monto: number): string;
}

// Clase que implementa la interfaz MetodoPago
export class PagoEfectivo implements MetodoPago {

  // Devuelve el mensaje al registrar el pago
  procesarPago(monto: number): string {
    return "Pago en efectivo registrado: " + monto;
  }
}

// Otra clase que implementa la misma interfaz
export class PagoTransferencia implements MetodoPago {

  // Devuelve un mensaje al registrar el pago
  procesarPago(monto: number): string {
    return "Pago por transferencia registrado: " + monto;
  }
}
