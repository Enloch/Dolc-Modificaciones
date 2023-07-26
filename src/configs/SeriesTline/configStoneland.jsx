import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/STONELAND/DOLCKER STONELAND materiales seleccion_WEBP.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/STONELAND/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/STONELAND/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configStoneland = {
  titulo: "Dolcker & Line Stone",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Line Stone Grey Rectificado",
      },
    },
    {
      top: "45%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & Line Stone Ivory",
      },
    },
    {
      top: "75%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & Line Stone Pearl",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Grey Rectificado",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Ivory",
    },
    {
      imagen: muestras[2],
      titulo: "Dolcker & Line Pearl",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configStoneland;
