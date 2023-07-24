import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/CORE/DOLCKER CORE materiales seleccion.webp";
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
  titulo: "Dolcker & Cor",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "8%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Cor ambre",
      },
    },
    {
      top: "22%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & Cor Tortora",
      },
    },
    {
      top: "38%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & Cor Snow",
      },
    },
    {
      top: "55%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & Cor Concrete",
      },
    },
    {
      top: "71%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Dolcker & Cor plumb",
      },
    },
    {
      top: "86%",
      left: "20%",
      ambiente: {
        imagen: ambientes[5],
        titulo: "Dolcker & Cor argent",
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
