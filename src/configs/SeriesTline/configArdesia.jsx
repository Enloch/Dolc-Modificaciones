import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/ARDESIA/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/ARDESIA/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configArdesia = {
  titulo: "Ardesia",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: InteractivoImg,
        titulo: "Ardesia Bronce",
      },
    },
    {
      top: "45%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Ardesia Earth",
      },
    },
    {
      top: "75%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Ardesia Noir",
      },
    },
    {
      top: "85%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Ardesia Opal",
      },
    },
    {
      top: "85%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Ardesia Silver",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Bronce",
    },
    {
      imagen: muestras[1],
      titulo: "Earth",
    },
    {
      imagen: muestras[2],
      titulo: "Noir",
    },
    {
      imagen: muestras[3],
      titulo: "Opal",
    },
    {
      imagen: muestras[4],
      titulo: "Silver",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configArdesia;
