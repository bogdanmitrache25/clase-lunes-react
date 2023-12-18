import React from "react";
import ReactDOM from "react-dom/client";
import { PrimerComponente } from "./PrimerComponente";
import "./styles.css";
import { SegundoComponente } from "./SegundoComponente";
import { TercerComponenteContadorApp } from "./TercerComponenteContadorApp";
import { CuartoComponenteContadorPorMiCuenta } from "./CuartoComponenteContadorPorMiCuenta";
import { OtroContador } from "./OtroContador";
import { ContadorGuapo } from "./ContadorGuapo";
import { SextoContador } from "./SextoContador";
import { UltimoContador } from "./UltimoContador";
import { ListadoApp } from "./ListadoApp";
import { ListadoCosasPendientes } from "./ListadoCosasPendientes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <PrimerComponente />
    <hr />
    <SegundoComponente
      titulo="Esta sección es de props"
      subtitulo="Curso de react"
    /> */}
    {/* <hr />
    <TercerComponenteContadorApp value={0} />
    <hr />
    <CuartoComponenteContadorPorMiCuenta value={0} />
    <hr />
    <OtroContador value={0} />
    <hr />
    <ContadorGuapo value={0} />
    <hr />
    <SextoContador value={0} /> */}

    <hr />
    <UltimoContador value={0} />
    <hr />
    <ListadoApp />
    <hr />
    <ListadoCosasPendientes />
  </>
);
