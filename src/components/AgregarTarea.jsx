import React, { useState } from "react";

export const AgregarTarea = ({ agregarTarea }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    "";
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    agregarTarea(inputValue);

    // Aquí puedes realizar la lógica para manejar la presentación de la nueva tarea
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingresa tarea nueva"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
