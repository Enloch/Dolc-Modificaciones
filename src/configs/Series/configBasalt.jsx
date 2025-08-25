import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/Series/BASALT/Dolcker-BASALT_seleccionar.webp";

const ambientesImports = import.meta.glob(
  "../../assets/images/Series/BASALT/AMBIENTES/**", { eager: true }
);

const muestrasImports = import.meta.glob(
  "../../assets/images/Series/BASALT/DESPIECE/**", { eager: true }
);

const acabadosImports = import.meta.glob("../../assets/icons/acabados/**", { eager: true });

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configBASALT = {
  titulo: "DO&BASALT",
  descripcion:
    "Una sugestiva reinterpretación de basalto en Dolcker: elegantes matices, detalles minuciosos y suaves veteados se obtienen con las tecnologías de producción más modernas y reproducen fielmente las variables cromáticas del producto natural.",
  imgSeleccionar,
  indicadores: [
    {
      top: "15%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Do&Basalt Beige",
      },
    },
    {
      top: "45%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Do&Basalt Grey",
      },
    },
    {
      top: "75%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Do&Basalt Graphite",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Beige",
    },
    {
      imagen: muestras[1],
      titulo: "Graphite",
    },
    {
      imagen: muestras[2],
      titulo: "Grey",
    },
  ],
  acabados: [
    {
      imagen: acabados[0],
      titulo: "Flamed",
    },
  ],
};

export default configBASALT;
