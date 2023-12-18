import React from "react";
import { useState } from "react";

export const SextoContador = ({ value }) => {
  const [contador, setContador] = useState(value);

  const clicar = () => {
    setContador(contador + 500);
  };

  return (
    <>
      <h1>Contador de 500 en 500</h1>
      <p>{contador}</p>
      <button onClick={clicar}>Haz Click</button>
    </>
  );
};
