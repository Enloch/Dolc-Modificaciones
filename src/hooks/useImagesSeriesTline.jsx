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
    titulo: "DOLCKER & ARD",
    src: imagenesAmbiente[0],
    id: "#ard",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & BALM",
    src: imagenesAmbiente[1],
    id: "#balm",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & BELLA",
    src: imagenesAmbiente[2],
    id: "#bell",
    categoria: "Marmol",
  },
  {
    titulo: "DOLCKER & BYB",
    src: imagenesAmbiente[3],
    id: "#byb",
    categoria: "Monocolor",
  },
  {
    titulo: "DOLCKER & BRUN",
    src: imagenesAmbiente[4],
    id: "#brun",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & CAP",
    src: imagenesAmbiente[5],
    id: "#cap",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & COR",
    src: imagenesAmbiente[6],
    id: "#cor",
    categoria: "Cemento",
  },
  {
    titulo: "DOLCKER & CROM",
    src: imagenesAmbiente[7],
    id: "#crom",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & DOM",
    src: imagenesAmbiente[8],
    id: "#dom",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & ETER",
    src: imagenesAmbiente[9],
    id: "#eter",
    categoria: "Marmol",
  },
  {
    titulo: "DOLCKER & GRAV",
    src: imagenesAmbiente[10],
    id: "#grav",
    categoria: "Cemento",
  },
  {
    titulo: "DOLCKER & HABI",
    src: imagenesAmbiente[11],
    id: "#habi",
    categoria: "Cemento",
  },
  {
    titulo: "DOLCKER & HAN",
    src: imagenesAmbiente[12],
    id: "#han",
    categoria: "Terrazo",
  },
  {
    titulo: "DOLCKER & INV",
    src: imagenesAmbiente[13],
    id: "#inv",
    categoria: "Marmol",
  },
  {
    titulo: "DOLCKER & KUR",
    src: imagenesAmbiente[14],
    id: "#kur",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & NIK",
    src: imagenesAmbiente[15],
    id: "#nik",
    categoria: "Marmol",
  },
  {
    titulo: "DOLCKER & STONE",
    src: imagenesAmbiente[16],
    id: "#stone",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & STOR",
    src: imagenesAmbiente[17],
    id: "#stor",
    categoria: "Piedra",
  },
  {
    titulo: "DOLCKER & UNI",
    src: imagenesAmbiente[18],
    id: "#uni",
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
