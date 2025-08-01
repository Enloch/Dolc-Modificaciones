import getDataFromModules from "../../../helpers/getDataFromModules";
import imgSeleccionar from "../../../assets/images/DolckerTline/Series/BELLAGIO/DOLCKER BELLAGIO materiales seleccion.webp";
import InteractivoImg from "../../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../../assets/images/DolckerTline/Series/BELLAGIO/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../../assets/images/DolckerTline/Series/BELLAGIO/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configBellagio = {
  titulo: "Dolcker & Line Bella",
  descripcion:
    "La beauté harmonieuse du marbre blanc allie la perception de luxe et de raffinement que ce matériau fascinant a toujours chérie à la rigueur de l'esthétique et des veines équilibrées, en phase avec les dernières tendances décoratives. Le design lumineux et impérissable de la collection peut s'exprimer à travers une infinité d'interprétations stylistiques, de la coupe classique au minimaliste, en passant par les tons chauds et naturels du langage nordique.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Line Bella Natural",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Natural",
    },
  ],
  // acabados: [
  //   {
  //     imagen: MuestraImg,
  //     titulo: "Nombre acabado",
  //   },
  // ],
};

export default configBellagio;
