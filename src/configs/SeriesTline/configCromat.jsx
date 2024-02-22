import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/CROMAT/DOLCKER CR CROMAT_WEBP.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/CROMAT/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/CROMAT/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configCromat = {
  titulo: "Dolcker & LineDolcker & Line  Crom",
  descripcion:
    "La colección está diseñada para crear ambientes que favorecen el bienestar y la armonía. Los colores y texturas transmiten tranquilidad y paz, ideales para escapar del estrés del día a día. Con esta serie se trata de crear un material natural que crea una atmósfera saludable y confortable, ideal para mejorar el bienestar y la calidad de vida.",
  imgSeleccionar,
  indicadores: [
    {
      top: "8%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & LineDolcker & Line  Crom Gris",
      },
    },
    {
      top: "23%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & LineDolcker & Line  Crom Marengo",
      },
    },
    {
      top: "41%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & LineDolcker & Line  Crom Marfil",
      },
    },
    {
      top: "60%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & LineDolcker & Line  Crom Noce",
      },
    },
    {
      top: "78%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Dolcker & LineDolcker & Line  Crom Perla",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Gris",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Marengo",
    },
    {
      imagen: muestras[2],
      titulo: "Dolcker & Line Marfil",
    },
    {
      imagen: muestras[3],
      titulo: "Dolcker & Line Noce",
    },
    {
      imagen: muestras[4],
      titulo: "Dolcker & Line Perla",
    },
  ],
  // acabados: [
  //   {
  //     imagen: MuestraImg,
  //     titulo: "Nombre acabado",
  //   },
  // ],
};

export default configCromat;
