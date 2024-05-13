"use client";
import { useEffect, useState } from "react";
import {
  generarCuadradoMagico4k,
  generarCuadradoMagicoImpar,
} from "@/functions/getMagicSquare";
import { ocultarNumeros } from "@/functions/ocultarNumeros";
import { validarCuadrado } from "@/functions/validarCuadrado";
import Avatar from "@/components/ui/avatar";
import Accordion from "@/components/accordion";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import Swal from "sweetalert2";

export default function Home() {
  const [n, setN] = useState(3);
  const [cuadradoOriginal, setCuadradoOriginal] = useState([]);
  const [cuadrado, setCuadrado] = useState([]);
  const [esEditable, setEsEditable] = useState([]);
  const [errores, setErrores] = useState([]);
  const [tema, setTema] = useState();

  //generar cuadrado
  function generarCuadrado() {
    let cuadradoGen;
    switch (true) {
      case n % 2 !== 0:
        cuadradoGen = generarCuadradoMagicoImpar(n);
        break;
      case n % 4 === 0:
        cuadradoGen = generarCuadradoMagico4k(n);
        break;

        cuadradoGen = generarCuadradoMagico4kPlus2(n);
        break;
      default:
        alert("Tamaño de cuadrado no válido");
        return;
    }

    const { cuadradoModificado, esEditable } = ocultarNumeros(cuadradoGen, n);
    setCuadradoOriginal(cuadradoGen);
    setCuadrado(cuadradoModificado);
    setEsEditable(esEditable);
    setErrores(Array.from({ length: n }, () => Array(n).fill(false)));
  }

  //estado de los inputs
  function handleInput(e, i, j) {
    const nuevoCuadrado = [...cuadrado];
    nuevoCuadrado[i][j] =
      e.target.value === "" ? null : parseInt(e.target.value);
    setCuadrado(nuevoCuadrado);
  }

  function cambiarTamaño(e) {
    setN(parseInt(e.target.value));
  }
  //verificacion del cuadrado
  function verificarSolucion() {
    const nuevoErrores = Array.from({ length: n }, () => Array(n).fill(false));
    cuadrado.forEach((fila, i) => {
      fila.forEach((valor, j) => {
        if (valor !== null && valor !== cuadradoOriginal[i][j]) {
          nuevoErrores[i][j] = true;
        }
      });
    });
    setErrores(nuevoErrores);
    const resultado = validarCuadrado(cuadrado, cuadradoOriginal);
    Swal.fire({
      title: resultado.esCorrecto ? "¡Correcto!" : "¡Incorrecto!",
      text: resultado.mensaje,
      icon: resultado.esCorrecto ? "success" : "error",
      imageUrl: resultado.esCorrecto ? "emoji.gif" : "emojis.gif",
      imageWidth: 400, // Ancho del GIF
      imageHeight: 400, // Alto del GIF
      imageAlt: "Custom image",
    });
  }

  const accordionItems = [
    {
      key: "1",
      title: "Instrucción 1",
      content: "Selecciona el tamaño de tu cuadrado",
    },
    {
      key: "2",
      title: "Instrucción 2",
      content: "Genera el Cuadrado e intenta resolverlo",
    },
    {
      key: "3",
      title: "Instrucción 3",
      content: "Confirma tus resultados",
    },
  ];
  const avatarItems = [
    {
      key: "karolay",
      color: "default",
      src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      key: "marylight",
      color: "primary",
      src: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
    },
    {
      key: "marydark",
      color: "secondary",
      src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      key: "mathew",
      color: "success",
      src: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    },
    {
      key: "ricardo",
      color: "warning",
      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    },
    {
      key: "ignacio",
      color: "primary",
      src: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    },
    {
      key: "brihanna",
      color: "primary",
      src: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    },
  ];

  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between p-24 ${tema?.background} ${tema?.color}`}
    >
      <div className="grid grid-cols-6 gap-4 w-full">
        <div className="col-span-6">
          <h1 className="text-4xl font-bold text-center">Cuadrado Mágico</h1>
        </div>
        <div className="col-span-1">
          <Avatar avatarItems={avatarItems} setTema={setTema} />
        </div>
        <div className="grid grid-cols-subgrid gap-4 col-span-3 ">
          <div className="col-span-1">
            Selecciona el tamaño del cuadrado mágico
          </div>
          <div className="col-span-1">
            <Select
              onChange={cambiarTamaño}
              value={n}
              color={`${tema?.selectColor}`}
            >
              {[3, 4, 5, 7, 8, 9].map((size) => (
                <SelectItem key={size} value={size}>
                  {`${size}x${size}`}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="col-span-1">
            <Button onClick={generarCuadrado} className={tema?.buttonGenerate}>
              Generar Cuadrado
            </Button>
            <Button onClick={verificarSolucion} className={tema?.buttonVerify}>
              Verificar Cuadrado
            </Button>
          </div>
          <div className="flex justify-center col-span-3">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${n}, 1fr)`,
                gap: "8px",
              }}
            >
              {cuadrado.map((fila, i) =>
                fila.map((valor, j) =>
                  esEditable[i][j] ? (
                    <input
                      key={`${i}-${j}`}
                      type="number"
                      value={valor || ""}
                      onChange={(e) => handleInput(e, i, j)}
                      className={`flex items-center justify-center w-12 h-12 font-bold rounded text-center ${
                        errores[i][j]
                          ? "bg-red-500 text-white"
                          : ` ${tema?.cuadradoColor} ${tema?.cuadradoTexto}`
                      }`}
                    />
                  ) : (
                    <div
                      key={`${i}-${j}`}
                      className={`flex items-center justify-center w-12 h-12 ${tema?.cuadradoColor} ${tema?.cuadradoTexto} font-bold rounded`}
                    >
                      {valor}
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Accordion accordionItems={accordionItems} />
        </div>
      </div>
      {tema?.emoji ? (
        <div className="absolute bottom-20 right-0 p-4">
          <img
            src="emoji.gif"
            alt="Descripción del GIF"
            className="w-40 h-40"
          />
        </div>
      ) : null}
    </main>
  );
}
