import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/GRAVEL/DOLCKER GRAVEL materiales seleccion.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.glob(
  "../../assets/images/DolckerTline/Series/GRAVEL/AMBIENTES/**", { eager: true }
);

const muestrasImports = import.meta.glob(
  "../../assets/images/DolckerTline/Series/GRAVEL/DESPIECE/**", { eager: true }
);

const acabadosImports = import.meta.glob("../../assets/icons/acabados/**", { eager: true });

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configGravel = {
  titulo: "Dolcker & LineDolcker & Line  Grav",
  descripcion:
    "Sutileza cromática y contrastes ligeros definen esta colección, donde la sofisticación se expresa en tonos pálidos y profundos. Los colores, lejos de estridencias, se integran a la arquitectura, creando espacios de serena elegancia. La paleta cromática se inspira en la naturaleza y las superficies, de textura suave y aterciopelada, reflejan la luz de forma natural, creando una atmósfera etérea y relajante.",
  imgSeleccionar,
  indicadores: [
    {
      top: "8%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & LineDolcker & Line  Grav Black",
      },
    },
    {
      top: "22%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & LineDolcker & Line  Grav Cream",
      },
    },
    {
      top: "38%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & LineDolcker & Line  Grav Earth",
      },
    },
    {
      top: "55%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & LineDolcker & Line  Grav Grey",
      },
    },
    {
      top: "71%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Dolcker & LineDolcker & Line  Grav Shadow",
      },
    },
    {
      top: "86%",
      left: "20%",
      ambiente: {
        imagen: ambientes[5],
        titulo: "Dolcker & LineDolcker & Line  Grav White",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Black",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Cream",
    },
    {
      imagen: muestras[2],
      titulo: "Dolcker & Line Earth",
    },
    {
      imagen: muestras[3],
      titulo: "Dolcker & Line Grey",
    },
    {
      imagen: muestras[4],
      titulo: "Dolcker & Line Shadow",
    },
    {
      imagen: muestras[5],
      titulo: "Dolcker & Line White",
    },
  ],
  // acabados: [
  //   {
  //     imagen: MuestraImg,
  //     titulo: "Nombre acabado",
  //   },
  // ],
};

export default configGravel;
