import React from "react";
import { useState } from "react";

export const OtroContador = ({ value }) => {
  const [contador, setContador] = useState(value);
  const clicar = () => {
    setContador(contador + 100);
  };

  return (
    <>
      <h1>Contador de 100 en 100</h1>
      <p>{contador}</p>
      <button onClick={clicar}>Haz click</button>
    </>
  );
};
