export function ocultarNumeros(cuadrado, n) {
  let cantidadOcultar = Math.floor(n * 1.5);
  let posiciones = new Set();
  let esEditable = Array.from({ length: n }, () => new Array(n).fill(false));

  while (posiciones.size < cantidadOcultar) {
    let fila = Math.floor(Math.random() * n);
    let columna = Math.floor(Math.random() * n);
    let key = `${fila}-${columna}`;
    if (!posiciones.has(key)) {
      posiciones.add(key);
      esEditable[fila][columna] = true; // Marcar como editable
    }
  }

  let cuadradoModificado = cuadrado.map((fila, i) =>
    fila.map((valor, j) => (esEditable[i][j] ? null : valor))
  );

  return { cuadradoModificado, esEditable };
}
