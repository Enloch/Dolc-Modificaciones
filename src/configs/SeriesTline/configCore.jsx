import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/CORE/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/CORE/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const conficCore = {
  titulo: "Core",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: InteractivoImg,
        titulo: "Core ambre",
      },
    },
    {
      top: "45%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Core Tortora",
      },
    },
    {
      top: "75%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Core Snow",
      },
    },
    {
      top: "85%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Core Concrete",
      },
    },
    {
      top: "85%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Core plumb",
      },
    },
    {
      top: "85%",
      left: "20%",
      ambiente: {
        imagen: ambientes[5],
        titulo: "Core argent",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Ambre",
    },
    {
      imagen: muestras[1],
      titulo: "Argent",
    },
    {
      imagen: muestras[2],
      titulo: "Concrete",
    },
    {
      imagen: muestras[3],
      titulo: "Plumb",
    },
    {
      imagen: muestras[4],
      titulo: "Snow",
    },
    {
      imagen: muestras[5],
      titulo: "Tortora",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default conficCore;
