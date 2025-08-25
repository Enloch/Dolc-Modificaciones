import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/STONELAND/DOLCKER STONELAND materiales seleccion_WEBP.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.glob(
  "../../assets/images/DolckerTline/Series/STONELAND/AMBIENTES/**", { eager: true }
);

const muestrasImports = import.meta.glob(
  "../../assets/images/DolckerTline/Series/STONELAND/DESPIECE/**", { eager: true }
);

const acabadosImports = import.meta.glob("../../assets/icons/acabados/**", { eager: true });

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configStoneland = {
  titulo: "Dolcker & Line Stone",
  descripcion:
    "El diseño sobrio y elegante de la colección la convierte en una apuesta segura para el futuro. Los colores neutros y las texturas naturales nunca pasarán de moda, adaptándose a las nuevas tendencias decorativas. La colección es ideal para quienes buscan un estilo clásico y atemporal que perdure en el tiempo.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Line Stone Grey Rectificado",
      },
    },
    {
      top: "45%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & Line Stone Ivory",
      },
    },
    {
      top: "75%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & Line Stone Pearl",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Grey Rectificado",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Ivory",
    },
    {
      imagen: muestras[2],
      titulo: "Dolcker & Line Pearl",
    },
  ],
  // acabados: [
  //   {
  //     imagen: MuestraImg,
  //     titulo: "Nombre acabado",
  //   },
  // ],
};

export default configStoneland;
