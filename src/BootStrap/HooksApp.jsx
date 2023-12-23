import React from "react";
import { ContadorComponent } from "./ContadorComponent";
import "./bootstrap.css";
export const HooksApp = () => {
  return (
    <>
      <h1 className="aplicaciondehooks">Aplicaciones</h1>
      <hr />
      <hr />
      <ContadorComponent></ContadorComponent>
    </>
  );
};
