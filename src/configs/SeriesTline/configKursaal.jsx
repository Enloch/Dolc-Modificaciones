import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp";
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
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: InteractivoImg,
        titulo: "Kursaal Dark",
      },
    },
    {
      top: "45%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Kursaal Gery",
      },
    },
    {
      top: "75%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Kursaal Cream",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[1],
      titulo: "Dark",
    },
    {
      imagen: muestras[2],
      titulo: "Grey",
    },
    {
      imagen: muestras[0],
      titulo: "Cream",
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
