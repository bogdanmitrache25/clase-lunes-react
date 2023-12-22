import React, { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

const Lista = ({ nombre, estado }) => {
  return (
    <li>
      {nombre} {estado}
    </li>
  );
};

export const ListadoCosasPendientes = () => {
  let listaPendientes = [
    { id: 1, nombre: "Map", estado: " 🔜" },
    { id: 2, nombre: "className", estado: " 🔜" },
    { id: 3, nombre: "Formulario", estado: " 🔜" },
    { id: 4, nombre: "Comunicación entre componentes", estado: " 🔜" },
    { id: 5, nombre: "Envío de información desde child", estado: " 🔜" },
    { id: 6, nombre: "useEffect y Feth", estado: " 🔜" },
    { id: 7, nombre: "CustomHook", estado: " 🔜" },
    { id: 8, nombre: "BootStrap", estado: " 🔜" },
    { id: 9, nombre: "useCounter", estado: " 🔜" },
    { id: 10, nombre: "Formulario con Hook", estado: " 🔜" },
    { id: 11, nombre: "Fetch con Hook", estado: " 🔜" },
    { id: 12, nombre: "useRef", estado: " 🔜" },
    { id: 13, nombre: "useMemo", estado: " 🔜" },
    { id: 14, nombre: "useCallback", estado: " 🔜" },
    { id: 15, nombre: "Reducer", estado: " 🔜" },
    { id: 16, nombre: "React Router Dom", estado: " 🔜" },
    { id: 17, nombre: "Use context", estado: " 🔜" },
    { id: 18, nombre: "Aplicación de Clima", estado: " 🔜" },
    { id: 19, nombre: "Buscador de peliculas", estado: " 🔜" },
    { id: 20, nombre: "Carrito de compras", estado: " 🔜" },
  ];

  const [arreglo, setArreglo] = useState(listaPendientes);

  const onAgregarTarea = (val) => {
    if (val < 1) return;

    const envio = {
      id: arreglo.length + 1,
      nombre: val,
      visto: false,
    };
    setArreglo([...arreglo, envio]);
  };

  return (
    <>
      <h1> Listado Cosas Pendientes React</h1>
      <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
      <ol>
        {arreglo.map((x) => (
          <Lista key={x.id} nombre={x.nombre} estado={x.estado}></Lista>
        ))}
      </ol>
    </>
  );
};
