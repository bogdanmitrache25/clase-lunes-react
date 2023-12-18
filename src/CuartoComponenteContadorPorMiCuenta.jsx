//atajos de snippets que nos interesan. Son códigos cortos que autocompletan lo que necesitamos. Como lo que es ! para HTML . El primero y muy importante : rafc (React Arrow Function Component). Te importa con función flecha

import React from "react";

import { useState } from "react";

export const CuartoComponenteContadorPorMiCuenta = ({ value }) => {
  const [contador, setContador] = useState(value);
  const clicar = () => {
    setContador(contador + 50);
  };
  return (
    <>
      <h1>Contador de 50 en 50</h1>
      <p>{contador}</p>
      <button onClick={clicar}>Haz click</button>
    </>
  );
};
