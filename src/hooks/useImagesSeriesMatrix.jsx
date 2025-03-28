/* eslint-disable react/jsx-key */
import { Children } from "react";
import getDataFromModules from "../helpers/getDataFromModules";
import Enlace from "../modules/ES/System/06_Diseno/06_1_IndiceSeries/Enlace";
import img1 from "../assets/images/DolckerTline/ranurado11mm.webp";

// const imagenesAmbiente = getDataFromModules(imagenesAmbienteImports);
const imagenesAmbiente =
  "https://dummyimage.com/600x400/000/fff&text=+IMAGEN+FAMILIA";
const enlacesObj = [
  {
    titulo: "PLANEX",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#PLANEX",
  },
  {
    titulo: "TUBEX",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#balm",
  },
  {
    titulo: "VIVEX",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#bella",
  },
  {
    titulo: "VERTEX",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#byb",
  },
  {
    titulo: "WINDX",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#brun",
  },
  {
    titulo: "DISPLAX",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#cap",
  },
  {
    titulo: "TECNUX",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#cor",
  },
];

const useImagesSeries = (queSerieActiva) => {
  // Filtra los enlaces de acuerdo a la categoría seleccionada
  const handleSerieChange = (event, id) => {
    // event.preventDefault();
    queSerieActiva(id);
  };
  return Children.toArray(
    enlacesObj.map(({ titulo, src, id, formato }) => {
      return (
        <Enlace
          href={id}
          className='enlace'
          onClick={(event) => handleSerieChange(event, id)}
        >
          <img src={src} alt={titulo + " ejemplo"} />
          <span style={{ margin: "0" }}>{titulo}</span>
          {/* <span className='formatos' style={{ margin: "0" }}>
            {formato}
          </span> */}
        </Enlace>
      );
    })
  );
};

export default useImagesSeries;
