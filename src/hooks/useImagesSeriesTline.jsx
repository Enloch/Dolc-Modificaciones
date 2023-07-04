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
  { titulo: "AMARNA", src: img1, id: "#amarna", categoria: "Marmol" },
  {
    titulo: "ARDESIA",
    src: imagenesAmbiente[1],
    id: "#ardesia",
    categoria: "Piedra",
  },
  { titulo: "BALMORAL", src: img1, id: "#balmoral", categoria: "Piedra" },
  {
    titulo: "BELLAGIO",
    src: imagenesAmbiente[3],
    id: "#bellagio",
    categoria: "Marmol",
  },
  {
    titulo: "BLACK Y BLANCO",
    src: imagenesAmbiente[5],
    id: "#byb",
    categoria: "Monocolor",
  },
  { titulo: "BRUNSWICH", src: img1, id: "#brunswich", categoria: "Piedra" },
  {
    titulo: "CAPRI",
    src: imagenesAmbiente[6],
    id: "#capri",
    categoria: "Piedra",
  },
  {
    titulo: "CORE",
    src: imagenesAmbiente[7],
    id: "#core",
    categoria: "Cemento",
  },
  { titulo: "CROMAT", src: img1, id: "#cromat", categoria: "Piedra" },
  { titulo: "DOME", src: img1, id: "#dome", categoria: "Piedra" },
  { titulo: "ETERNAL", src: img1, id: "#eternal", categoria: "Marmol" },
  {
    titulo: "GRAVEL",
    src: imagenesAmbiente[11],
    id: "#gravel",
    categoria: "Cemento",
  },
  { titulo: "HABITAT", src: img1, id: "#habitat", categoria: "Cemento" },
  { titulo: "HANNOVER", src: img1, id: "#hannover", categoria: "Terrazo" },
  { titulo: "INVICTUS", src: img1, id: "#invictus", categoria: "Marmol" },
  {
    titulo: "KURSAAL",
    src: imagenesAmbiente[15],
    id: "#kursaal",
    categoria: "Piedra",
  },
  { titulo: "LENCI", src: img1, id: "#lenci", categoria: "Marmol" },
  { titulo: "NIKEA", src: img1, id: "#nikea", categoria: "Marmol" },
  { titulo: "NIRO", src: img1, id: "#niro", categoria: "Marmol" },
  { titulo: "STONELAND", src: img1, id: "#stoneland", categoria: "Piedra" },
  {
    titulo: "STORM",
    src: imagenesAmbiente[20],
    id: "#storm",
    categoria: "Piedra",
  },
  { titulo: "UNIK", src: img1, id: "#unik", categoria: "Cemento" },
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
