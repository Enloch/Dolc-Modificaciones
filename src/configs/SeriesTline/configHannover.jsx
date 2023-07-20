import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/HANNOVER/DOLCKER HANNOVER materiales seleccion_WEBP.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/HANNOVER/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/HANNOVER/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configHannover = {
  titulo: "Hannover",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      ambiente: {
        imagen: ambientes[0],
        titulo: "Hannover Black Natural",
      },
    },
    {
      ambiente: {
        imagen: ambientes[1],
        titulo: "Hannover Steel Natural",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Black Natural",
    },
    {
      imagen: muestras[1],
      titulo: "Steel Natural",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configHannover;
