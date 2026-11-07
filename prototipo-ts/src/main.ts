
// Importamos las interfaces del sistema
import type { Cancha } from "./models/Cancha.js";
import type { Cliente } from "./models/Cliente.js";
import type { Reserva } from "./models/Reserva.js";
import type { Pago } from "./models/Pago.js";

// Importamos el repositorio genérico
import { Repositorio } from "./utils/Repositorio.js";

// Importamos las reglas de negocio
import { precioValido, nombreDisponible } from "./utils/ReglasCancha.js";
import { nombreClienteValido, telefonoDisponible } from "./utils/ReglasCliente.js";
import { canchaDisponible, fechaValida } from "./utils/ReglasReserva.js";
import { montoValido, pagoDisponible } from "./utils/ReglasPago.js";

// Importamos las clases para demostrar polimorfismo
import { PagoEfectivo, PagoTransferencia } from "./models/MetodoPago.js";
import type { MetodoPago } from "./models/MetodoPago.js";


// Cinco canchas de prueba
const canchas: Cancha[] = [
  { id: 1, nombre: "Cancha Norte", tipo: "futbol", precio: 15000 },
  { id: 2, nombre: "Cancha Sur", tipo: "futbol", precio: 12000 },
  { id: 3, nombre: "Cancha Central", tipo: "tenis", precio: 8000 },
  { id: 4, nombre: "Cancha Este", tipo: "futbol", precio: 14000 },
  { id: 5, nombre: "Cancha Oeste", tipo: "tenis", precio: 9000 }
];

// Cinco clientes de prueba
const clientes: Cliente[] = [
  { id: 1, nombre: "Carlos", telefono: "88881111" },
  { id: 2, nombre: "María", telefono: "88882222" },
  { id: 3, nombre: "José", telefono: "88883333" },
  { id: 4, nombre: "Ana", telefono: "88884444" },
  { id: 5, nombre: "Luis", telefono: "88885555" }
];

// Cinco reservas de prueba
const reservas: Reserva[] = [
  { id: 1, clienteId: 1, canchaId: 1, fecha: "2026-11-10", hora: "10:00", estado: "confirmada" },
  { id: 2, clienteId: 2, canchaId: 2, fecha: "2026-11-10", hora: "11:00", estado: "pendiente" },
  { id: 3, clienteId: 3, canchaId: 3, fecha: "2026-11-11", hora: "14:00", estado: "confirmada" },
  { id: 4, clienteId: 4, canchaId: 4, fecha: "2026-11-12", hora: "15:00", estado: "cancelada" },
  { id: 5, clienteId: 5, canchaId: 5, fecha: "2026-11-13", hora: "16:00", estado: "pendiente" }
];

// Cinco pagos de prueba
const pagos: Pago[] = [
  { id: 1, reservaId: 1, monto: 15000, estado: "pagado" },
  { id: 2, reservaId: 2, monto: 12000, estado: "pendiente" },
  { id: 3, reservaId: 3, monto: 8000, estado: "pagado" },
  { id: 4, reservaId: 4, monto: 14000, estado: "pendiente" },
  { id: 5, reservaId: 5, monto: 9000, estado: "pendiente" }
];

// Creamos un repositorio para cada entidad
const repoCanchas = new Repositorio<Cancha>();
const repoClientes = new Repositorio<Cliente>();
const repoReservas = new Repositorio<Reserva>();
const repoPagos = new Repositorio<Pago>();

// Agregamos los registros a sus repositorios
canchas.forEach(cancha => repoCanchas.agregar(cancha));
clientes.forEach(cliente => repoClientes.agregar(cliente));
reservas.forEach(reserva => repoReservas.agregar(reserva));
pagos.forEach(pago => repoPagos.agregar(pago));

// Probamos las operaciones del repositorio
console.log("SISTEMA DE RESERVAS DE CANCHAS");
console.log("");

// Buscar una cancha por su identificador
console.log("Buscar cancha 1:", repoCanchas.buscar(1));

// Filtrar las canchas de tenis
console.log(
  "Canchas de tenis:",
  repoCanchas.filtrar(cancha => cancha.tipo === "tenis")
);

// Eliminar una cancha de prueba
repoCanchas.eliminar(5);
console.log("Buscar cancha 5 después de eliminar:", repoCanchas.buscar(5));


// PRUEBAS DE LAS REGLAS DE NEGOCIO

console.log("\nREGLAS DE CANCHA");

// Regla 1: el precio debe ser mayor que cero
console.log("Precio válido:", precioValido(canchas[0]!));

// Regla 2: no repetir nombres de canchas
console.log("Nombre disponible:", nombreDisponible(canchas, "Cancha Nueva"));


console.log("\nREGLAS DE CLIENTE");

// Regla 1: el nombre no puede estar vacío
console.log("Nombre válido:", nombreClienteValido(clientes[0]!));

// Regla 2: no repetir números de teléfono
console.log("Teléfono disponible:", telefonoDisponible(clientes, "88889999"));


console.log("\nREGLAS DE RESERVA");

// Regla 1: verificar disponibilidad de cancha
console.log("Cancha disponible:", canchaDisponible(reservas, reservas[0]!));

// Regla 2: la fecha no puede ser anterior a hoy
console.log("Fecha válida:", fechaValida(reservas[0]!, "2026-11-06"));


console.log("\nREGLAS DE PAGO");

// Regla 1: el monto debe ser mayor que cero
console.log("Monto válido:", montoValido(pagos[0]!));

// Regla 2: evitar pagos duplicados
console.log("Pago disponible:", pagoDisponible(pagos, pagos[0]!));

// PRUEBA DE POLIMORFISMO

console.log("\nPRUEBA DE POLIMORFISMO");

// Creamos dos métodos de pago con la misma interfaz
const pagoEfectivo: MetodoPago = new PagoEfectivo();
const pagoTransferencia: MetodoPago = new PagoTransferencia();

// Ejecutamos el mismo método en ambas clases
console.log(pagoEfectivo.procesarPago(15000));
console.log(pagoTransferencia.procesarPago(12000));


