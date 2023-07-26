import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/BRUNSWICH/DOLCKER BRUNSWICH materiales seleccion.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/BRUNSWICH/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/BRUNSWICH/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configBrunswich = {
  titulo: "Dolcker & LineDolcker & Line  Brun",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "23%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & LineDolcker & Line  Brun Acero",
      },
    },
    {
      top: "68%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & LineDolcker & Line  Brun Ceniza",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Acero",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Ceniza",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configBrunswich;
