import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/CORE/DOLCKER CORE materiales seleccion.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.glob(
  "../../assets/images/DolckerTline/Series/CORE/AMBIENTES/**", { eager: true }
);

const muestrasImports = import.meta.glob(
  "../../assets/images/DolckerTline/Series/CORE/DESPIECE/**", { eager: true }
);

const acabadosImports = import.meta.glob("../../assets/icons/acabados/**", { eager: true });

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const conficCore = {
  titulo: "Dolcker & LineDolcker & Line  Cor",
  descripcion:
    "La colección ofrece un lienzo en blanco sobre el que plasmar tu creatividad fusionando colores, texturas y formatos para crear espacios que reflejen tu personalidad y estilo. La colección combina la innovación tecnológica con la tradición artesanal, dando como resultado un producto único y de alta calidad. Un producto innovador que te permite estar a la vanguardia movido solamente por la pasión por el diseño y la búsqueda de la excelencia, que se traduce en entornos únicos y llenos de personalidad.",
  imgSeleccionar,
  indicadores: [
    {
      top: "8%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & LineDolcker & Line  Cor ambre",
      },
    },
    {
      top: "22%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & LineDolcker & Line  Cor Tortora",
      },
    },
    {
      top: "38%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & LineDolcker & Line  Cor Snow",
      },
    },
    {
      top: "55%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & LineDolcker & Line  Cor Concrete",
      },
    },
    {
      top: "71%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Dolcker & LineDolcker & Line  Cor plumb",
      },
    },
    {
      top: "86%",
      left: "20%",
      ambiente: {
        imagen: ambientes[5],
        titulo: "Dolcker & LineDolcker & Line  Cor argent",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Ambre",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Argent",
    },
    {
      imagen: muestras[2],
      titulo: "Dolcker & Line Concrete",
    },
    {
      imagen: muestras[3],
      titulo: "Dolcker & Line Plumb",
    },
    {
      imagen: muestras[4],
      titulo: "Dolcker & Line Snow",
    },
    {
      imagen: muestras[5],
      titulo: "Dolcker & Line Tortora",
    },
  ],
  // acabados: [
  //   {
  //     imagen: MuestraImg,
  //     titulo: "Nombre acabado",
  //   },
  // ],
};

export default conficCore;
