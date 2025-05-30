import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/DOME/DOLCKER DOME materiales seleccion_WEBP.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/DOME/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/DOME/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configDome = {
  titulo: "Dolcker & LineDolcker & Line  Dom",
  descripcion:
    "La textura suave y la calidez de los materiales invitan al tacto, creando una experiencia sensorial única. Cada espacio se convierte en un refugio donde relajarse y disfrutar del confort. La cerámica ofrece una experiencia sensorial agradable, tanto visual como táctil, que crea una atmósfera acogedora y relajante.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & LineDolcker & Line  Dom Anthracite Rectificado",
      },
    },
    {
      top: "35%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & LineDolcker & Line  Dom Ash",
      },
    },
    {
      top: "57%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & LineDolcker & Line  Dom Bone",
      },
    },
    {
      top: "78%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & LineDolcker & Line  Dom Nut",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Anthracite Rectificado",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Ash",
    },
    {
      imagen: muestras[2],
      titulo: "Dolcker & Line Bone",
    },
    {
      imagen: muestras[3],
      titulo: "Dolcker & Line Nut",
    },
  ],
  // acabados: [
  //   {
  //     imagen: MuestraImg,
  //     titulo: "Nombre acabado",
  //   },
  // ],
};

export default configDome;
