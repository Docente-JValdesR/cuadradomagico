import React from "react";
import { Avatar } from "@nextui-org/react";

export default function App(props) {
  const customTheme = {
    marydark: {
      background: "bg-slate-600",
      color: "text-zinc-200",
      buttonGenerate: "text-zinc-200 bg-slate-900 mb-2",
      buttonVerify: "text-zinc-200 bg-slate-900",
      creador: "Mariajose Rojas - 4to Medio B",
      cuadradoColor: "bg-slate-900",
      selectColor: "primary",
      emoji: false,
    },
    marylight: {
      background: "bg-teal-400",
      color: "text-white",
      buttonGenerate: "bg-sky-500 text-white mb-2",
      buttonVerify: "bg-sky-500 text-white",
      creador: "Mariajose Rojas - 4to Medio B",
      cuadradoColor: "bg-sky-500",
      selectColor: "primary",
      emoji: false,
    },
    mathew: {
      background: "bg-zinc-600",
      color: "text-rose-50	",
      buttonGenerate: "bg-pink-800 text-rose-50 mb-2",
      buttonVerify: "bg-pink-800	text-rose-50",
      creador: "Mathew Silva - 3ro Medio A",
      cuadradoColor: "bg-pink-800 text-rose-50",
      selectColor: "danger",
      hCuadradoColor: "",
      emoji: true,
    },
    karolay: {
      background: "bg-gray-900",
      color: "text-white",
      buttonGenerate: "bg-yellow-200 text-black hover:bg-yellow-300 mb-2",
      buttonVerify: "bg-yellow-200 text-black hover:bg-yellow-300",
      creador: "Karolay Piña - 3ro Medio A",
      cuadradoColor: "bg-yellow-200 hover:bg-yellow-300",
      cuadradoTexto: "text-black",
      selectColor: "warning",
      emoji: true,
    },
    ricardo: {
      background: "bg-indigo-900	",
      color: "#333",
      buttonGenerate: "bg-purple-700	",
      buttonVerify: "bg-purple-700	",
      creador: "Ricardo Vera - 4to Medio A",
      cuadradoColor: "bg-purple-700	",
      cuadradoTexto: "text-white",
      selectColor: "secondary",
    },
    ignacio: {
      background: "bg-teal-400		",
      color: "#333",
      buttonGenerate: "bg-teal-900		",
      buttonVerify: "bg-teal-900		",
      creador: "Ricardo Vera - 4to Medio A",
      cuadradoColor: "bg-teal-900		",
      cuadradoTexto: "text-white",
      selectColor: "success",
    },
    brihanna: {
      background: "bg-orange-500",
      color: "text-white",
      buttonGenerate: "bg-red-800			",
      buttonVerify: "bg-red-800			",
      creador: "Ricardo Vera - 4to Medio A",
      cuadradoColor: "bg-red-800		",
      cuadradoTexto: "text-white",
      selectColor: "danger",
    },
  };
  return (
    <div className="flex flex-col gap-4 items-center">
      {props.avatarItems?.map((item) => (
        <div key={item.key} className="grid grid-cols-2 gap-2">
          {" "}
          <Avatar
            color={item.color}
            src={item.src}
            isBordered
            size={item.size}
            onClick={() => {
              props.setTema(customTheme[item.key]);
            }}
          />
          {item.key}
        </div>
      ))}
    </div>
  );
}
