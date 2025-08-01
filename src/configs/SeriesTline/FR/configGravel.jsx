import getDataFromModules from "../../../helpers/getDataFromModules";
import imgSeleccionar from "../../../assets/images/DolckerTline/Series/GRAVEL/DOLCKER GRAVEL materiales seleccion.webp";
import InteractivoImg from "../../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../../assets/images/DolckerTline/Series/GRAVEL/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../../assets/images/DolckerTline/Series/GRAVEL/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configGravel = {
  titulo: "Dolcker & LineDolcker & Line  Grav",
  descripcion:
    "Subtilité chromatique et légers contrastes définissent cette collection, où la sophistication s'exprime dans des tons pâles et profonds. Les couleurs, loin des stridences, s'intègrent à l'architecture, créant des espaces d'une élégance sereine. La palette chromatique s'inspire de la nature et les surfaces, à la texture douce et veloutée, reflètent la lumière de manière naturelle, créant une atmosphère éthérée et relaxante.",
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
