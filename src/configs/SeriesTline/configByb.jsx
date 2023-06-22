import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/BYB/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/BYB/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configByb = {
  titulo: "Black y Blanco",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: InteractivoImg,
        titulo: "Black y Blanco Black Matt",
      },
    },
    {
      top: "45%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Black y Blanco Blanco Natural",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Black Matt",
    },
    {
      imagen: muestras[1],
      titulo: "Blanco Natural",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configByb;
