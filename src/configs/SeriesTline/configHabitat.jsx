import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckertTline/Series/HABITAT/DOLCKER HABITAT materiales seleccion.webp";
import InteractivoImg from "../../assets/images/DolckertTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckertTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckertTline/Series/HABITAT/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckertTline/Series/HABITAT/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configHabitat = {
  titulo: "Dolcker & LineDolcker & Line  Habi",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & LineDolcker & Line  Habi Grey",
      },
    },
    {
      top: "45%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & LineDolcker & Line  Habi Taupe",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Grey",
    },

    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Taupe",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configHabitat;
