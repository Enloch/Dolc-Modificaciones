import React, { useState } from "react";
import {
  AppIntercambiador,
  ImgFondo,
  ImgFormato,
  ImgPerfil,
  ImgSvg,
  Icono,
} from "./styles";
import Indicador from "../../assets/icons/open-indicator.svg";
import { Fondo, Formato20x120, Perfil_1_Bronce } from "./data";
import {
  SVG20,
  SVG30,
  SVG40,
  SVG45,
  SVG50,
  SVG60,
  SVG80,
  SVGMODULAR1,
  SVGMODULAR4,
  SVGMODULAR5,
  SVGMODULAR9,
} from "./perfilesSvg";
import Menu from "./menu";
const ConfiguradorFormatosTine = () => {
  const [imagenFormato, setImagenFormato] = useState(null);
  const [imagenPerfil, setImagenPerfil] = useState(null);
  const [imagenSvg, setImagenSvg] = useState(null);
  const [perfilSize, setPerfilSize] = useState(null);
  const [presionado, setPresionado] = useState(false);
  const [color, setColor] = useState("#c83636"); // Estado para almacenar el color, inicializado en negro (#000000)
  console.log("Imagen SVG?", imagenSvg);
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  return (
    <AppIntercambiador>
      <div>
        <ImgFondo src={Fondo} alt='fondo' />
        <ImgFormato src={imagenFormato} />
        <ImgPerfil src={imagenPerfil} />
        {/* <ImgSvg href={imagenSvg} color={color} /> */}
        <ImgSvg>
          {imagenSvg === "20x120" && <SVG20 fill={color} />}
          {imagenSvg === "30x60" && <SVG30 fill={color} />}
          {imagenSvg === "30x90" && <SVG30 fill={color} />}
          {imagenSvg === "30x120" && <SVG30 fill={color} />}
          {imagenSvg === "40x80" && <SVG40 fill={color} />}
          {imagenSvg === "40x120" && <SVG40 fill={color} />}
          {imagenSvg === "45x90" && <SVG45 fill={color} />}
          {imagenSvg === "50x100" && <SVG50 fill={color} />}
          {imagenSvg === "50x120" && <SVG50 fill={color} />}
          {imagenSvg === "60x60" && <SVG60 fill={color} />}
          {imagenSvg === "60x90" && <SVG60 fill={color} />}
          {imagenSvg === "60x120" && <SVG60 fill={color} />}
          {imagenSvg === "80x80" && <SVG80 fill={color} />}
          {imagenSvg === "Modular1" && <SVGMODULAR1 fill={color} />}
          {imagenSvg === "Modular2" && <SVG60 fill={color} />}
          {imagenSvg === "Modular3" && <SVG30 fill={color} />}
          {imagenSvg === "Modular4" && <SVGMODULAR4 fill={color} />}
          {imagenSvg === "Modular5" && <SVGMODULAR5 fill={color} />}
          {imagenSvg === "Modular6" && <SVG30 fill={color} />}
          {imagenSvg === "Modular9" && <SVGMODULAR9 fill={color} />}
        </ImgSvg>
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
          imagenSvg={imagenSvg}
          setImagenSvg={setImagenSvg}
          handleColorChange={handleColorChange}
          color={color}
        />
      )}
    </AppIntercambiador>
  );
};
export default ConfiguradorFormatosTine;
