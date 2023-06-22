import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/HABITAT/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/HABITAT/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configHabitat = {
  titulo: "Habitat",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: InteractivoImg,
        titulo: "Habitat Grey",
      },
    },
    {
      top: "45%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Habitat Grey Anti-slip",
      },
    },
    {
      top: "75%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Habitat Taupe",
      },
    },
    {
      top: "75%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Habitat Taupe Anti-slip",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Grey",
    },
    {
      imagen: muestras[1],
      titulo: "Grey Anti-slip",
    },
    {
      imagen: muestras[2],
      titulo: "Taupe",
    },
    {
      imagen: muestras[3],
      titulo: "Taupe Anti-slip",
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
