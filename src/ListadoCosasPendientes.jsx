import React, { useState } from "react";

const Lista = ({ nombre, estado }) => {
  return (
    <li>
      {nombre} {estado}
    </li>
  );
};

export const ListadoCosasPendientes = () => {
  let listaPendientes = [
    { nombre: "Map", estado: " 🔜" },
    { nombre: "className", estado: " 🔜" },
    { nombre: "Formulario", estado: " 🔜" },
    { nombre: "Comunicación entre componentes", estado: " 🔜" },
    { nombre: "Envío de información desde child", estado: " 🔜" },
    { nombre: "useEffect y Feth", estado: " 🔜" },
    { nombre: "CustomHook", estado: " 🔜" },
    { nombre: "BootStrap", estado: " 🔜" },
    { nombre: "useCounter", estado: " 🔜" },
    { nombre: "Formulario con Hook", estado: " 🔜" },
    { nombre: "Fetch con Hook", estado: " 🔜" },
    { nombre: "useRef", estado: " 🔜" },
    { nombre: "useMemo", estado: " 🔜" },
    { nombre: "useCallback", estado: " 🔜" },
    { nombre: "Reducer", estado: " 🔜" },
    { nombre: "React Router Dom", estado: " 🔜" },
    { nombre: "Use context", estado: " 🔜" },
    { nombre: "Aplicación de Clima", estado: " 🔜" },
    { nombre: "Buscador de peliculas", estado: " 🔜" },
    { nombre: "Carrito de compras", estado: " 🔜" },
  ];

  const [array, setArray] = useState(listaPendientes);

  return (
    <>
      <h1> Listado Cosas Pendientes React</h1>
      <ol>
        {array.map((x) => (
          <Lista key={x.nombre} nombre={x.nombre} estado={x.estado}></Lista>
        ))}
      </ol>
    </>
  );
};
