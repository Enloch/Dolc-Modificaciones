import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/DOME/DOLCKER DOME materiales seleccion_WEBP.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/DOME/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/DOME/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configDome = {
  titulo: "Dolcker & Dom",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Dom Anthracite Rectificado",
      },
    },
    {
      top: "35%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & Dom Ash",
      },
    },
    {
      top: "57%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & Dom Bone",
      },
    },
    {
      top: "78%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & Dom Nut",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Anthracite Rectificado",
    },
    {
      imagen: muestras[1],
      titulo: "Ash",
    },
    {
      imagen: muestras[2],
      titulo: "Bone",
    },
    {
      imagen: muestras[3],
      titulo: "Nut",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configDome;
