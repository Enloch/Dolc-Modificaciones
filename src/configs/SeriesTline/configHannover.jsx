import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/HANNOVER/DOLCKER HANNOVER materiales seleccion_WEBP.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/HANNOVER/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/HANNOVER/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configHannover = {
  titulo: "Dolcker & Line Han",
  descripcion:
    "La serie nos invita a reflexionar sobre la importancia de los pequeños detalles, de la belleza que nos rodea y de la necesidad de encontrar momentos de paz en nuestro día a día. La fluidez y el dinamismo es un símbolo de apertura al mundo, de conexión con la naturaleza y de búsqueda de la belleza. Es un desafío a la rigidez de la arquitectura tradicional. Su diseño crea una sensación de movimiento y dinamismo, como si la estructura estuviera en constante transformación. ",
  imgSeleccionar,
  indicadores: [
    {
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Line Han Black Natural",
      },
    },
    {
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & Line Han Steel Natural",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Black Natural",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Steel Natural",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configHannover;
