import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/ARDESIA/DOLCKER CR ARDESIA materiales seleccion.webp";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/ARDESIA/AMBIENTES/**"
);
const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/ARDESIA/DESPIECE/**"
);
const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configArdesia = {
  titulo: "Ardesia",
  descripcion: "Texto Jorge.",
  imgSeleccionar,
  indicadores: [
    {
      top: "8%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Ardesia Bronce",
      },
    },
    {
      top: "23%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Ardesia Earth",
      },
    },
    {
      top: "41%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Ardesia Noir",
      },
    },
    {
      top: "60%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Ardesia Opal",
      },
    },
    {
      top: "78%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Ardesia Silver",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Bronce",
    },
    {
      imagen: muestras[1],
      titulo: "Earth",
    },
    {
      imagen: muestras[2],
      titulo: "Noir",
    },
    {
      imagen: muestras[3],
      titulo: "Opal",
    },
    {
      imagen: muestras[4],
      titulo: "Silver",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configArdesia;
