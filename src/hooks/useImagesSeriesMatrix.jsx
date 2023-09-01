/* eslint-disable react/jsx-key */
import { Children } from "react";
import getDataFromModules from "../helpers/getDataFromModules";
import Enlace from "../modules/06_Diseno/06_1_IndiceSeries/Enlace";
import img1 from "../assets/images/DolckerTline/ranurado11mm.webp";
const imagenesAmbienteImports = import.meta.globEager(
  "../assets/images/DolckerTline/Series/**/EJEMPLO/**"
);

// const imagenesAmbiente = getDataFromModules(imagenesAmbienteImports);
const imagenesAmbiente =
  "https://dummyimage.com/600x400/000/fff&text=+IMAGEN+FAMILIA";
const enlacesObj = [
  {
    titulo: "DOLCKER & MATRIX FAMILIA 1",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#ard",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & MATRIX FAMILIA 2",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#balm",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & MATRIX FAMILIA 3",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#bella",
    categoria: "Marmol",
  },
  {
    titulo: "DOLCKER & MATRIX FAMILIA 4",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#byb",
    categoria: "Monocolor",
  },
  {
    titulo: "DOLCKER & MATRIX FAMILIA 5",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#brun",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & MATRIX FAMILIA 6",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#cap",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & MATRIX FAMILIA 7",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#cor",
    categoria: "Cemento",
  },
  {
    titulo: "DOLCKER & MATRIX FAMILIA 8",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#crom",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & MATRIX FAMILIA 9",
    formato: "TipologiaFormato",
    src: imagenesAmbiente,
    id: "#dom",
    categoria: "Piedra",
  },
];

const useImagesSeries = (categoria, queSerieActiva) => {
  // Filtra los enlaces de acuerdo a la categoría seleccionada
  const enlacesFiltrados = enlacesObj.filter((enlace) => {
    if (categoria === "Todas") {
      return true; // Mostrar todas las categorías
    } else {
      return enlace.categoria === categoria; // Mostrar solo la categoría seleccionada
    }
  });
  const handleSerieChange = (event, id) => {
    // event.preventDefault();
    queSerieActiva(id);
    console.log("Indice serie serie activa?", id);
  };
  return Children.toArray(
    enlacesFiltrados.map(({ titulo, src, id, formato }) => {
      return (
        <Enlace
          href={id}
          className='enlace'
          onClick={(event) => handleSerieChange(event, id)}
        >
          <img src={src} alt={titulo + " ejemplo"} />
          <span style={{ margin: "0" }}>{titulo}</span>
          <span className='formatos' style={{ margin: "0" }}>
            {formato}
          </span>
        </Enlace>
      );
    })
  );
};

export default useImagesSeries;
