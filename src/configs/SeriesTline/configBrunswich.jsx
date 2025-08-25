import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/BRUNSWICH/DOLCKER BRUNSWICH materiales seleccion.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.glob(
  "../../assets/images/DolckerTline/Series/BRUNSWICH/AMBIENTES/**", { eager: true }
);

const muestrasImports = import.meta.glob(
  "../../assets/images/DolckerTline/Series/BRUNSWICH/DESPIECE/**", { eager: true }
);

const acabadosImports = import.meta.glob("../../assets/icons/acabados/**", { eager: true });

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configBrunswich = {
  titulo: "Dolcker & LineDolcker & Line  Brun",
  descripcion:
    "Versatilidad sin límites adaptable a cualquier espacio, un material versátil que permite dar rienda suelta a la creatividad. Calidez natural, historia y tradición. Un legado histórico que se reinventa en cada proyecto contemporáneo dando como resultado lujo atemporal y elegancia natural que aportan sofisticación. Un material que aporta distinción y valor a cualquier espacio.",
  imgSeleccionar,
  indicadores: [
    {
      top: "23%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & LineDolcker & Line  Brun Acero",
      },
    },
    {
      top: "68%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & LineDolcker & Line  Brun Ceniza",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Acero",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Ceniza",
    },
  ],
  // acabados: [
  //   {
  //     imagen: MuestraImg,
  //     titulo: "Nombre acabado",
  //   },
  // ],
};

export default configBrunswich;
