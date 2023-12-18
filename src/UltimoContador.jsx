import React from "react";
import { useState } from "react";
import "./ultimocontador.css";

export const UltimoContador = ({ value }) => {
  const [contador, setContador] = useState(value);
  const clicar = () => {
    setContador(contador + 100);
  };
  return (
    <>
      <h1>UltimoContador</h1>

      <button id="botoncito" onClick={clicar}>
        {" "}
        Haz click aquí{" "}
      </button>
      <p> {contador}</p>
    </>
  );
};
