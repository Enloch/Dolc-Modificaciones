import getDataFromModules from "../../../helpers/getDataFromModules";
import imgSeleccionar from "../../../assets/images/DolckerTline/Series/CROMAT/DOLCKER CR CROMAT_WEBP.webp";
import InteractivoImg from "../../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.glob(
  "../../../assets/images/DolckerTline/Series/CROMAT/AMBIENTES/**", { eager: true }
);

const muestrasImports = import.meta.glob(
  "../../../assets/images/DolckerTline/Series/CROMAT/DESPIECE/**", { eager: true }
);

const acabadosImports = import.meta.glob("../../../assets/icons/acabados/**", { eager: true });

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configCromat = {
  titulo: "Dolcker & LineDolcker & Line  Crom",
  descripcion:
    "La collection est conçue pour créer des ambiances qui favorisent le bien-être et l'harmonie. Les couleurs et les textures transmettent tranquillité et paix, idéales pour échapper au stress quotidien. Cette série vise à créer un matériau naturel qui crée une atmosphère saine et confortable, idéale pour améliorer le bien-être et la qualité de vie.",
  imgSeleccionar,
  indicadores: [
    {
      top: "8%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & LineDolcker & Line  Crom Gris",
      },
    },
    {
      top: "23%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & LineDolcker & Line  Crom Marengo",
      },
    },
    {
      top: "41%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & LineDolcker & Line  Crom Marfil",
      },
    },
    {
      top: "60%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & LineDolcker & Line  Crom Noce",
      },
    },
    {
      top: "78%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Dolcker & LineDolcker & Line  Crom Perla",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Gris",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Marengo",
    },
    {
      imagen: muestras[2],
      titulo: "Dolcker & Line Marfil",
    },
    {
      imagen: muestras[3],
      titulo: "Dolcker & Line Noce",
    },
    {
      imagen: muestras[4],
      titulo: "Dolcker & Line Perla",
    },
  ],
  // acabados: [
  //   {
  //     imagen: MuestraImg,
  //     titulo: "Nombre acabado",
  //   },
  // ],
};

export default configCromat;
