import React from "react";

const CosasAprendidas = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? "✅" : "❌"}
    </li>
  );
};

export const ListadoApp = () => {
  return (
    <>
      <h1>ListadoApp</h1>
      <ol>
        <CosasAprendidas
          nombre="Instalación programas"
          visto={true}
        ></CosasAprendidas>
        <CosasAprendidas
          nombre="Uso de Vite con React"
          visto={true}
        ></CosasAprendidas>
        <CosasAprendidas nombre="Componentes" visto={true}></CosasAprendidas>
        <CosasAprendidas
          nombre="Variables en JSX"
          visto={true}
        ></CosasAprendidas>
        <CosasAprendidas
          nombre="Fragment en JSX"
          visto={true}
        ></CosasAprendidas>
        <CosasAprendidas
          nombre="Estilos en React"
          visto={true}
        ></CosasAprendidas>
        <CosasAprendidas nombre="Props" visto={true}></CosasAprendidas>
        <CosasAprendidas nombre="Eventos" visto={true}></CosasAprendidas>
        <CosasAprendidas nombre="useState" visto={true}></CosasAprendidas>
        <CosasAprendidas
          nombre="Condicionales y ternarios"
          visto={true}
        ></CosasAprendidas>
        <CosasAprendidas nombre="Map" visto={false}></CosasAprendidas>
      </ol>
    </>
  );
};
