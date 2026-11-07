
// Clase genérica es para administrar los registros
// T representa cualquier entidad que tenga un id numérico
export class Repositorio<T extends { readonly id: number }> {

  // Arreglo donde se guardan los registros
  private registros: T[] = [];

  // Agregar un nuevo registro
  agregar(registro: T): void {
    this.registros.push(registro);
  }

  // Buscar un registro por su identificador
  buscar(id: number): T | undefined {
    return this.registros.find(registro => registro.id === id);
  }

  // Eliminar un registro según su identificador
  eliminar(id: number): void {
    this.registros = this.registros.filter(registro => registro.id !== id);
  }

  // Filtrar registros según una condición
  filtrar(condicion: (registro: T) => boolean): T[] {
    return this.registros.filter(condicion);
  }
}
