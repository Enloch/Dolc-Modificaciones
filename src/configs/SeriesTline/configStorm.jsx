import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/STORM/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/STORM/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configStorm = {
  titulo: "Storm",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: InteractivoImg,
        titulo: "Storm Cloud",
      },
    },
    {
      top: "45%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Storm Cream",
      },
    },
    {
      top: "75%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Storm Earth",
      },
    },
    {
      top: "85%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Storm Grey",
      },
    },
    {
      top: "85%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Storm White",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Cloud",
    },
    {
      imagen: muestras[1],
      titulo: "Cream",
    },
    {
      imagen: muestras[2],
      titulo: "Earth",
    },
    {
      imagen: muestras[3],
      titulo: "Grey",
    },
    {
      imagen: muestras[4],
      titulo: "White",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configStorm;
