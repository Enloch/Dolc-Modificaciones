/* eslint-disable react/jsx-key */
import { Children } from "react";
import getDataFromModules from "../helpers/getDataFromModules";
import Enlace from "../modules/06_Diseno/06_1_IndiceSeries/Enlace";
import img1 from "../assets/images/DolckerTline/ranurado11mm.webp";
const imagenesAmbienteImports = import.meta.globEager(
  "../assets/images/Series/**/EJEMPLO/**"
);

const imagenesAmbiente = getDataFromModules(imagenesAmbienteImports);

const enlacesObj = [
  { titulo: "CAPRI", src: img1, id: "#capri" },
  { titulo: "CORE", src: img1, id: "#core" },
  { titulo: "GRAVEL", src: img1, id: "#gravel" },
  { titulo: "KURSAAL", src: img1, id: "#kursaal" },
  { titulo: "STORM", src: img1, id: "#storm" },
  { titulo: "BALMORAL", src: img1, id: "#balmoral" },
  { titulo: "BELLAGIO", src: img1, id: "#bellagio" },
  { titulo: "BLACK Y BLANCO", src: img1, id: "#byb" },
  { titulo: "BRUNSWICH", src: img1, id: "#brunswich" },
  { titulo: "DOME", src: img1, id: "#dome" },
  { titulo: "ETERNAL", src: img1, id: "#eternal" },
  { titulo: "HABITAT", src: img1, id: "#habitat" },
  { titulo: "HANOVER", src: img1, id: "#hanover" },
  { titulo: "INVICTUS", src: img1, id: "#invictus" },
  { titulo: "NIKEA", src: img1, id: "#nikea" },
  { titulo: "STONELAND", src: img1, id: "#stoneland" },
  { titulo: "UNIK", src: img1, id: "#unik" },
  { titulo: "ARDESIA", src: img1, id: "#ardesia" },
  { titulo: "CROMAT", src: img1, id: "#cromat" },
  { titulo: "AMARNA", src: img1, id: "#amarna" },
  { titulo: "NIRO", src: img1, id: "#niro" },
  { titulo: "LENCI", src: img1, id: "#lenci" },
];

const useImagesSeries = () => {
  return Children.toArray(
    enlacesObj.map(({ titulo, src, id }) => {
      return (
        <Enlace href={id} className='enlace'>
          <img src={src} alt={titulo + " ejemplo"} />
          <span>{titulo}</span>
        </Enlace>
      );
    })
  );
};

export default useImagesSeries;
