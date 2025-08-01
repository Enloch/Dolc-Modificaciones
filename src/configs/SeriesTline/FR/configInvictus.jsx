import getDataFromModules from "../../../helpers/getDataFromModules";
import imgSeleccionar from "../../../assets/images/DolckerTline/Series/INVICTUS/DOLCKER INVICTUS materiales seleccion_WEBP.webp";
import InteractivoImg from "../../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../../assets/images/DolckerTline/Series/INVICTUS/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../../assets/images/DolckerTline/Series/INVICTUS/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configInvictus = {
  titulo: "Dolcker & Line Inv",
  descripcion:
    "Une invitation à voyager sans avoir besoin de bouger de notre place. C'est un oasis de paix au milieu du tumulte du monde, un endroit où se réfugier et trouver le calme. Cette série capture un instant, un moment de quiétude et d'harmonie, un rappel de la beauté qui existe dans le monde extérieur. C'est une invitation à la contemplation, à apprécier la nature et à se connecter avec notre intérieur.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Line Inv Natural",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Natural",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configInvictus;
