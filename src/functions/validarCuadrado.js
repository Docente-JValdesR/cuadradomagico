export function validarCuadrado(cuadrado, cuadradoOriginal) {
  const n = cuadrado.length;
  let esCorrecto = true;

  // Verificar si todos los números introducidos son correctos
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (cuadrado[i][j] !== cuadradoOriginal[i][j]) {
        esCorrecto = false;
      }
    }
  }

  if (!esCorrecto) {
    return {
      esCorrecto,
      mensaje: "Algunos valores son incorrectos. Vuelve a Intentarlo",
    };
  }

  // Verificar propiedades del cuadrado mágico si todos los valores son correctos
  const suma = (n * (n * n + 1)) / 2;
  let sumaFila, sumaColumna;

  // Suma de filas y columnas
  for (let i = 0; i < n; i++) {
    sumaFila = 0;
    sumaColumna = 0;
    for (let j = 0; j < n; j++) {
      sumaFila += cuadrado[i][j];
      sumaColumna += cuadrado[j][i];
    }
    if (sumaFila !== suma || sumaColumna !== suma) {
      return {
        esCorrecto: false,
        mensaje: "Las sumas de las filas o columnas no son correctas.",
      };
    }
  }

  return {
    esCorrecto: true,
    mensaje: "¡Felicitaciones! El cuadrado es correcto y mágico.",
  };
}
