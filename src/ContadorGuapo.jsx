import React from "react";
import { useState } from "react";

export const ContadorGuapo = ({ value }) => {
  const [contador, setContador] = useState(value);
  const clicar = () => {
    setContador(contador + 200);
  };

  return (
    <>
      <h1>Contador de 250 en 250</h1>
      <p>{contador}</p>

      <button onClick={clicar}>Haz Click</button>
    </>
  );
};
