import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckertTline/Series/STORM/DOLCKER STORM materiales seleccion.webp";
import MuestraImg from "../../assets/images/DolckertTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckertTline/Series/STORM/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckertTline/Series/STORM/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configStorm = {
  titulo: "Dolcker & Line Stor",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "8%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Line Stor Cloud",
      },
    },
    {
      top: "23%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & Line Stor Cream",
      },
    },
    {
      top: "41%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & Line Stor Earth",
      },
    },
    {
      top: "60%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & Line Stor Grey",
      },
    },
    {
      top: "78%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Dolcker & Line Stor White",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Cloud",
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

export default configStorm;
