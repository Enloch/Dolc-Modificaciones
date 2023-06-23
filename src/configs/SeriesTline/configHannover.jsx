import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/HANNOVER/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/HANNOVER/Hannover/DESPIECE/**"
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
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: InteractivoImg,
        titulo: "Hannover Black Natural",
      },
    },
    {
      top: "45%",
      left: "20%",
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
