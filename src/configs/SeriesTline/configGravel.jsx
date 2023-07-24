import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/GRAVEL/DOLCKER GRAVEL materiales seleccion.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/GRAVEL/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/GRAVEL/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configGravel = {
  titulo: "Dolcker & Grav",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "8%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Grav Black",
      },
    },
    {
      top: "22%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & Grav Cream",
      },
    },
    {
      top: "38%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & Grav Earth",
      },
    },
    {
      top: "55%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & Grav Grey",
      },
    },
    {
      top: "71%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Dolcker & Grav Shadow",
      },
    },
    {
      top: "86%",
      left: "20%",
      ambiente: {
        imagen: ambientes[5],
        titulo: "Dolcker & Grav White",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Black",
    },
    {
      imagen: muestras[1],
      titulo: "Cream",
    },
    {
      imagen: muestras[2],
      titulo: "Earth",
    },
    {
      imagen: muestras[3],
      titulo: "Grey",
    },
    {
      imagen: muestras[4],
      titulo: "Shadow",
    },
    {
      imagen: muestras[5],
      titulo: "White",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configGravel;
