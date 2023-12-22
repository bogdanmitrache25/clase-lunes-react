import React, { useState } from "react";

export const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);

  const fetchComentarios = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      setComentarios(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetch = () => {
    fetchComentarios();
  };

  return (
    <>
      <h1>Comentarios</h1>
      <ol>
        {comentarios.map((comentario) => (
          <li key={comentario.id}>
            Correo Electrónico: {comentario.email} <br /> Comentario :{" "}
            {comentario.body} <br /> <hr />
            {/* Agrega aquí más detalles de los comentarios si los necesitas */}
          </li>
        ))}
      </ol>
      <button onClick={handleFetch}>Llamar a la Api</button>
    </>
  );
};
