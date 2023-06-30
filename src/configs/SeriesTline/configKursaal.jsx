import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/KURSAAL/DOLCKER KURSAAL materiales seleccion.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/KURSAAL/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/KURSAAL/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configKursaal = {
  titulo: "Kursaal",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "8%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Kursaal Ashen",
      },
    },
    {
      top: "22%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Kursaal Neutral",
      },
    },
    {
      top: "38%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Kursaal Pure",
      },
    },
    {
      top: "55%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Kursaal Raven",
      },
    },
    {
      top: "71%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Kursaal Rust",
      },
    },
    {
      top: "86%",
      left: "20%",
      ambiente: {
        imagen: ambientes[5],
        titulo: "Kursaal Slate",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Ashen",
    },
    {
      imagen: muestras[1],
      titulo: "Neutral",
    },
    {
      imagen: muestras[2],
      titulo: "Pure",
    },
    {
      imagen: muestras[3],
      titulo: "Raven",
    },
    {
      imagen: muestras[4],
      titulo: "Rust",
    },
    {
      imagen: muestras[5],
      titulo: "Slate",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configKursaal;
