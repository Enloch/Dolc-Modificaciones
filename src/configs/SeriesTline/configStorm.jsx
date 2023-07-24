import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/STORM/DOLCKER STORM materiales seleccion.webp";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/STORM/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/STORM/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configStorm = {
  titulo: "Dolcker & Stor",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "8%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Stor Cloud",
      },
    },
    {
      top: "23%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & Stor Cream",
      },
    },
    {
      top: "41%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & Stor Earth",
      },
    },
    {
      top: "60%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & Stor Grey",
      },
    },
    {
      top: "78%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Dolcker & Stor White",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Cloud",
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

export default configStorm;
