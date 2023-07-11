import React from "react";
import { AppIntercambiador } from "./styles";
import { Fondo, Formato20x120 } from "./data";

const ConfiguradorFormatosTine = () => {
  return (
    <AppIntercambiador>
      <div>
        <img
          src={Fondo}
          alt='fondo'
        />
        <img
          src={Formato20x120[0].imagen}
          alt='Capa'
          style={{ position: "absolute", top: "0", left: "0", zIndex: "1" }}
        />
      </div>
      <div>menus</div>
    </AppIntercambiador>
  );
};

export default ConfiguradorFormatosTine;
