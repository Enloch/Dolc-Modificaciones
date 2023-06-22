import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp";
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
  titulo: "Gravel",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: InteractivoImg,
        titulo: "Gravel Black",
      },
    },
    {
      top: "45%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Gravel Cream",
      },
    },
    {
      top: "75%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Gravel Earth",
      },
    },
    {
      top: "85%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Gravel Grey",
      },
    },
    {
      top: "85%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Gravel Shadow",
      },
    },
    {
      top: "85%",
      left: "20%",
      ambiente: {
        imagen: ambientes[5],
        titulo: "Gravel White",
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
