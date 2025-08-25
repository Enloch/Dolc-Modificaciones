import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/NIKEA/DOLCKER NIKEA materiales seleccion.webp";

import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.glob(
  "../../assets/images/DolckerTline/Series/NIKEA/AMBIENTES/**", { eager: true }
);

const muestrasImports = import.meta.glob(
  "../../assets/images/DolckerTline/Series/NIKEA/DESPIECE/**", { eager: true }
);

const acabadosImports = import.meta.glob("../../assets/icons/acabados/**", { eager: true });

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configNikea = {
  titulo: "Dolcker & Line Nik",
  descripcion:
    "Un legado para el futuro, inversión atemporal que se transmite creando un legado duradero y lleno de significado. Inspiración sin límites y belleza son una fuente de inspiración inagotable para arquitectos, diseñadores y artistas. Un material que despierta la creatividad y permite crear espacios únicos.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Line Nik",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Nik",
    },
  ],
  // acabados: [
  //   {
  //     imagen: MuestraImg,
  //     titulo: "Nombre acabado",
  //   },
  // ],
};

export default configNikea;
