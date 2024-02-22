import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/ETERNAL/DOLCKER ETERNAL materiales seleccion.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/ETERNAL/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/ETERNAL/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configEternal = {
  titulo: "Dolcker & LineDolcker & Line  Eter",
  descripcion:
    "Carácter único en cada pieza de la colección que poseen una personalidad propia, gracias a las variaciones naturales del material. Las vetas y texturas crean un mosaico único e irrepetible, ideal para quienes buscan distinción. La colección se adapta a espacios donde se busca un toque de originalidad y exclusividad.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & LineDolcker & Line  Eter Cream Natural",
      },
    },
    {
      top: "35%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & LineDolcker & Line  Eter Dark Natural",
      },
    },
    {
      top: "57%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & LineDolcker & Line  Eter Pearl Natural",
      },
    },
    {
      top: "78%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & LineDolcker & Line  Eter Taupe Natural",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Cream Natural",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Dark Natural",
    },
    {
      imagen: muestras[2],
      titulo: "Dolcker & Line Pearl Natural",
    },
    {
      imagen: muestras[3],
      titulo: "Dolcker & Line Taupe Natural",
    },
  ],
  // acabados: [
  //   {
  //     imagen: MuestraImg,
  //     titulo: "Nombre acabado",
  //   },
  // ],
};

export default configEternal;
