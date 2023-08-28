import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckertTline/Series/HANNOVER/DOLCKER HANNOVER materiales seleccion_WEBP.webp";
import InteractivoImg from "../../assets/images/DolckertTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckertTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckertTline/Series/HANNOVER/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckertTline/Series/HANNOVER/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configHannover = {
  titulo: "Dolcker & Line Han",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Line Han Black Natural",
      },
    },
    {
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & Line Han Steel Natural",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Black Natural",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Steel Natural",
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
