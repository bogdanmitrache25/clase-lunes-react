//atajos de snippets que nos interesan. Son códigos cortos que autocompletan lo que necesitamos. Como lo que es ! para HTML . El primero y muy importante : rafc (React Arrow Function Component). Te importa con función flecha

import React from "react";

// Esto hace que poniendo event en la propiedad de la función te indique todo sobre el click.
// export const TercerComponenteContadorApp = () => {
//   return (
//     <>
//       <h1 className="contador">ContadorApp</h1>
//       <h1>Contador:</h1>
//       <button
//         onClick={function (event) {
//           console.log(event);
//         }}
//       >
//         Haz Click
//       </button>
//     </>
//   );
// };

// Aqui vamos a utilizar el primer Hook , el useState.
//import {useState} from "react";
//const [cosa, setCosa] = useState(cosa)

import { useState } from "react";

export const TercerComponenteContadorApp = ({ value }) => {
  const [contador, setContador] = useState(value);

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h1 className="contador">ContadorApp</h1>
      <p className="numeritoContador">{contador}</p>
      <h1>Contador de 1 en 1:</h1>
      <button onClick={handleClick}>Haz Click</button>
    </>
  );
};
