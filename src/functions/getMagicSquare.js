export function generarCuadradoMagicoImpar(n) {
  if (n % 2 === 0) {
    throw "El número debe ser impar";
  }

  let cuadrado = Array.from({ length: n }, () => new Array(n).fill(0));
  let num = 1;
  let fila = 0;
  let columna = Math.floor(n / 2);

  while (num <= n * n) {
    cuadrado[fila][columna] = num++;
    let nuevaFila = (fila - 1 + n) % n;
    let nuevaColumna = (columna + 1) % n;

    if (cuadrado[nuevaFila][nuevaColumna] !== 0) {
      fila = (fila + 1) % n;
    } else {
      fila = nuevaFila;
      columna = nuevaColumna;
    }
  }

  // Función para mezclar filas o columnas
  function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Crear arrays de índices de filas y columnas
  let indicesFilas = Array.from({ length: n }, (_, i) => i);
  let indicesColumnas = Array.from({ length: n }, (_, i) => i);

  // Mezclar los índices de las filas y las columnas
  mezclar(indicesFilas);
  mezclar(indicesColumnas);

  // Aplicar la mezcla a las filas y columnas
  let cuadradoMezclado = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      cuadradoMezclado[i][j] = cuadrado[indicesFilas[i]][indicesColumnas[j]];
    }
  }

  return cuadradoMezclado;
}

export function generarCuadradoMagico4k(n) {
  if (n % 4 !== 0) {
    throw "El tamaño debe ser múltiplo de 4";
  }

  let cuadrado = Array.from({ length: n }, () => new Array(n).fill(0));
  let num = 1;
  for (let fila = 0; fila < n; fila++) {
    for (let columna = 0; columna < n; columna++, num++) {
      // Aplicar el patrón de Strachey
      if (fila % 4 === columna % 4 || (fila % 4) + (columna % 4) === 3) {
        cuadrado[fila][columna] = n * n + 1 - num;
      } else {
        cuadrado[fila][columna] = num;
      }
    }
  }

  // Función para mezclar bloques de filas y columnas
  function mezclarBloques(array) {
    let blockSize = n / 2; // Tamaño de los bloques para permutar
    for (let i = 0; i < n; i += blockSize) {
      const j = Math.floor(Math.random() * (n / blockSize)) * blockSize;
      for (let k = 0; k < blockSize; k++) {
        [array[i + k], array[j + k]] = [array[j + k], array[i + k]];
      }
    }
  }

  // Crear arrays de índices de filas y columnas
  let indicesFilas = Array.from({ length: n }, (_, i) => i);
  let indicesColumnas = Array.from({ length: n }, (_, i) => i);

  // Mezclar los bloques de índices de las filas y las columnas
  mezclarBloques(indicesFilas);
  mezclarBloques(indicesColumnas);

  // Aplicar la mezcla a los bloques de filas y columnas
  let cuadradoMezclado = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      cuadradoMezclado[i][j] = cuadrado[indicesFilas[i]][indicesColumnas[j]];
    }
  }

  return cuadradoMezclado;
}
