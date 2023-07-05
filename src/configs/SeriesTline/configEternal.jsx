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
  titulo: "Eternal",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Eternal Cream Natural",
      },
    },
    {
      top: "35%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Eternal Dark Natural",
      },
    },
    {
      top: "57%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Eternal Pearl Natural",
      },
    },
    {
      top: "78%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Eternal Taupe Natural",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Cream Natural",
    },
    {
      imagen: muestras[1],
      titulo: "Dark Natural",
    },
    {
      imagen: muestras[2],
      titulo: "Pearl Natural",
    },
    {
      imagen: muestras[3],
      titulo: "Taupe Natural",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configEternal;
