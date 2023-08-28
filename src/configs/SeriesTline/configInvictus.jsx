import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckertTline/Series/INVICTUS/DOLCKER INVICTUS materiales seleccion_WEBP.webp";
import InteractivoImg from "../../assets/images/DolckertTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckertTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckertTline/Series/INVICTUS/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckertTline/Series/INVICTUS/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configInvictus = {
  titulo: "Dolcker & Line Inv",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Line Inv Natural",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Natural",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configInvictus;
