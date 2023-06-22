import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/CROMAT/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/CROMAT/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configCromat = {
  titulo: "Cromat",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: InteractivoImg,
        titulo: "Cromat Gris",
      },
    },
    {
      top: "45%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Cromat Marengo",
      },
    },
    {
      top: "75%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Cromat Marfil",
      },
    },
    {
      top: "85%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Cromat Noce",
      },
    },
    {
      top: "85%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Cromat Perla",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Gris",
    },
    {
      imagen: muestras[1],
      titulo: "Marengo",
    },
    {
      imagen: muestras[2],
      titulo: "Marfil",
    },
    {
      imagen: muestras[3],
      titulo: "Noce",
    },
    {
      imagen: muestras[4],
      titulo: "Perla",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configCromat;
