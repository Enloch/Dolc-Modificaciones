import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckertTline/Series/GRAVEL/DOLCKER GRAVEL materiales seleccion.webp";
import InteractivoImg from "../../assets/images/DolckertTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckertTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckertTline/Series/GRAVEL/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckertTline/Series/GRAVEL/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configGravel = {
  titulo: "Dolcker & LineDolcker & Line  Grav",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "8%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & LineDolcker & Line  Grav Black",
      },
    },
    {
      top: "22%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & LineDolcker & Line  Grav Cream",
      },
    },
    {
      top: "38%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & LineDolcker & Line  Grav Earth",
      },
    },
    {
      top: "55%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & LineDolcker & Line  Grav Grey",
      },
    },
    {
      top: "71%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Dolcker & LineDolcker & Line  Grav Shadow",
      },
    },
    {
      top: "86%",
      left: "20%",
      ambiente: {
        imagen: ambientes[5],
        titulo: "Dolcker & LineDolcker & Line  Grav White",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Black",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Cream",
    },
    {
      imagen: muestras[2],
      titulo: "Dolcker & Line Earth",
    },
    {
      imagen: muestras[3],
      titulo: "Dolcker & Line Grey",
    },
    {
      imagen: muestras[4],
      titulo: "Dolcker & Line Shadow",
    },
    {
      imagen: muestras[5],
      titulo: "Dolcker & Line White",
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
