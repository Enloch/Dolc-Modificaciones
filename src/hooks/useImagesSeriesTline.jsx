/* eslint-disable react/jsx-key */
import { Children } from "react";
import getDataFromModules from "../helpers/getDataFromModules";
import Enlace from "../modules/06_Diseno/06_1_IndiceSeries/Enlace";
import img1 from "../assets/images/DolckerTline/ranurado11mm.webp";
const imagenesAmbienteImports = import.meta.globEager(
  "../assets/images/DolckerTline/Series/**/EJEMPLO/**"
);

const imagenesAmbiente = getDataFromModules(imagenesAmbienteImports);

const enlacesObj = [
  {
    titulo: "ARDESIA",
    src: imagenesAmbiente[0],
    id: "#ardesia",
    categoria: "Piedra",
  },
  {
    titulo: "BALMORAL",
    src: imagenesAmbiente[1],
    id: "#balmoral",
    categoria: "Piedra",
  },
  {
    titulo: "BELLAGIO",
    src: imagenesAmbiente[2],
    id: "#bellagio",
    categoria: "Marmol",
  },
  {
    titulo: "BLACK Y BLANCO",
    src: imagenesAmbiente[3],
    id: "#byb",
    categoria: "Monocolor",
  },
  {
    titulo: "BRUNSWICH",
    src: imagenesAmbiente[4],
    id: "#brunswich",
    categoria: "Piedra",
  },
  {
    titulo: "CAPRI",
    src: imagenesAmbiente[5],
    id: "#capri",
    categoria: "Piedra",
  },
  {
    titulo: "CORE",
    src: imagenesAmbiente[6],
    id: "#core",
    categoria: "Cemento",
  },
  { titulo: "CROMAT", src: img1, id: "#cromat", categoria: "Piedra" },
  {
    titulo: "DOME",
    src: imagenesAmbiente[8],
    id: "#dome",
    categoria: "Piedra",
  },
  {
    titulo: "ETERNAL",
    src: imagenesAmbiente[9],
    id: "#eternal",
    categoria: "Marmol",
  },
  {
    titulo: "GRAVEL",
    src: imagenesAmbiente[10],
    id: "#gravel",
    categoria: "Cemento",
  },
  {
    titulo: "HABITAT",
    src: imagenesAmbiente[11],
    id: "#habitat",
    categoria: "Cemento",
  },
  {
    titulo: "HANNOVER",
    src: imagenesAmbiente[12],
    id: "#hannover",
    categoria: "Terrazo",
  },
  {
    titulo: "INVICTUS",
    src: imagenesAmbiente[13],
    id: "#invictus",
    categoria: "Marmol",
  },
  {
    titulo: "KURSAAL",
    src: imagenesAmbiente[14],
    id: "#kursaal",
    categoria: "Piedra",
  },
  {
    titulo: "NIKEA",
    src: imagenesAmbiente[15],
    id: "#nikea",
    categoria: "Marmol",
  },
  {
    titulo: "STONELAND",
    src: imagenesAmbiente[16],
    id: "#stoneland",
    categoria: "Piedra",
  },
  {
    titulo: "STORM",
    src: imagenesAmbiente[17],
    id: "#storm",
    categoria: "Piedra",
  },
  {
    titulo: "UNIK",
    src: imagenesAmbiente[18],
    id: "#unik",
    categoria: "Cemento",
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
    enlacesFiltrados.map(({ titulo, src, id }) => {
      return (
        <Enlace
          href={id}
          className='enlace'
          onClick={(event) => handleSerieChange(event, id)}
        >
          <img src={src} alt={titulo + " ejemplo"} />
          <span>{titulo}</span>
        </Enlace>
      );
    })
  );
};

export default useImagesSeries;
