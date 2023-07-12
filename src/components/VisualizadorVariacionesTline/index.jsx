import React, { useState } from "react";
import {
  AppIntercambiador,
  ImgFondo,
  ImgFormato,
  ImgPerfil,
  Icono,
} from "./styles";
import Indicador from "../../assets/icons/open-indicator.svg";
import { Fondo, Formato20x120, Perfil_1_Bronce } from "./data";
import Menu from "./menu";

const ConfiguradorFormatosTine = () => {
  const [imagenFormato, setImagenFormato] = useState(null);
  const [imagenPerfil, setImagenPerfil] = useState(null);
  const [perfilSize, setPerfilSize] = useState(null);
  const [presionado, setPresionado] = useState(false);

  return (
    <AppIntercambiador>
      <div>
        <ImgFondo src={Fondo} alt='fondo' />
        <ImgFormato src={imagenFormato} />
        <ImgPerfil src={imagenPerfil} />
      </div>
      <Icono
        src={Indicador}
        alt='indicador'
        onClick={() => setPresionado(!presionado)}
      />
      {presionado && (
        <Menu
          presionado={presionado}
          setPresionado={setPresionado}
          imagenFormato={imagenFormato}
          setImagenFormato={setImagenFormato}
          imagenPerfil={imagenPerfil}
          setImagenPerfil={setImagenPerfil}
          perfilSize={perfilSize}
          setPerfilSize={setPerfilSize}
        />
      )}
    </AppIntercambiador>
  );
};
export default ConfiguradorFormatosTine;
