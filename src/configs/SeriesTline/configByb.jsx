import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/BYB/DOLCKER BLACK Y BLANCO materiales seleccion.webp";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/BYB/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/BYB/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configByb = {
  titulo: "Dolcker & ByB",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "23%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & ByB Black Matt",
      },
    },
    {
      top: "68%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & ByB Blanco Natural",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Black Matt",
    },
    {
      imagen: muestras[1],
      titulo: "Blanco Natural",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configByb;
