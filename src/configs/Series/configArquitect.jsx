import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/Series/ARQUITECT/Dolcker ARQUITECT_seleccionar.webp";

const ambientesImport = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/AMBIENTES/**", { eager: true }
);

const muestrasImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/DESPIECE/**", { eager: true }
);

const muestrasAMARILLOImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/AMARILLO/**", { eager: true }
);
const muestrasAZULImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/AZUL/**", { eager: true }
);
const muestrasBLANCOImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/BLANCO/**", { eager: true }
);
const muestrasCENIZAImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/CENIZA/**", { eager: true }
);
const muestrasGRAFITOImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/GRAFITO/**", { eager: true }
);
const muestrasGRISImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/GRIS/**", { eager: true }
);
const muestrasMALVAImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/MALVA/**", { eager: true }
);
const muestrasMANGOImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/MANGO/**", { eager: true }
);
const muestrasNEGROImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/NEGRO/**", { eager: true }
);
const muestrasROJOImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/ROJO/**", { eager: true }
);
const muestrasTURQUESAImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/TURQUESA/**", { eager: true }
);
const muestrasVERDEImports = import.meta.glob(
  "../../assets/images/Series/ARQUITECT/MUESTRAS_ACABADOS/VERDE/**", { eager: true }
);

const acabadosImports = import.meta.glob("../../assets/icons/acabados/**", { eager: true });

const ambientes = getDataFromModules(ambientesImport);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const muestrasAcabados = {
  AMARILLO: getDataFromModules(muestrasAMARILLOImports),
  AZUL: getDataFromModules(muestrasAZULImports),
  BLANCO: getDataFromModules(muestrasBLANCOImports),
  CENIZA: getDataFromModules(muestrasCENIZAImports),
  GRAFITO: getDataFromModules(muestrasGRAFITOImports),
  GRIS: getDataFromModules(muestrasGRISImports),
  MALVA: getDataFromModules(muestrasMALVAImports),
  MANGO: getDataFromModules(muestrasMANGOImports),
  NEGRO: getDataFromModules(muestrasNEGROImports),
  ROJO: getDataFromModules(muestrasROJOImports),
  TURQUESA: getDataFromModules(muestrasTURQUESAImports),
  VERDE: getDataFromModules(muestrasVERDEImports),
};

const configArquitect = {
  titulo: "DO&ARQUITECT",
  descripcion:
    "La serie ARQUITECT es el resultado de la innovación y la funcionalidad, la unión entre la técnica más avanzada y versatilidad. Los formatos de la colección, sus tonalidades neutras y su aspecto monocromático, le permite protagonizar cualquier espacio.",
  imgSeleccionar,
  indicadores: [
    {
      top: "5%",
      left: "20%",
      ambiente: {
        imagen: ambientes[13],
        titulo: "Do&Arquitect Blanco",
      },
    },
    {
      top: "5%",
      left: "75%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Do&Arquitect Ceniza",
      },
    },
    {
      top: "21%",
      left: "20%",
      ambiente: {
        imagen: ambientes[10],
        titulo: "Do&Arquitect Rojo",
      },
    },
    {
      top: "21%",
      left: "75%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Do&Arquitect Amarillo",
      },
    },
    {
      top: "37%",
      left: "20%",
      ambiente: {
        imagen: ambientes[12],
        titulo: "Do&Arquitect Verde",
      },
    },
    {
      top: "37%",
      left: "75%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Do&Arquitect Grafito",
      },
    },
    {
      top: "54%",
      left: "20%",
      ambiente: {
        imagen: ambientes[8],
        titulo: "Do&Arquitect Mango",
      },
    },
    {
      top: "54%",
      left: "75%",
      ambiente: {
        imagen: ambientes[7],
        titulo: "Do&Arquitect Malva",
      },
    },
    {
      top: "71%",
      left: "20%",
      ambiente: {
        imagen: ambientes[11],
        titulo: "Do&Arquitect Turquesa",
      },
    },
    {
      top: "71%",
      left: "75%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Do&Arquitect Azul",
      },
    },
    {
      top: "86%",
      left: "20%",
      ambiente: {
        imagen: ambientes[6],
        titulo: "Do&Arquitect Gris",
      },
    },
    {
      top: "86%",
      left: "75%",
      ambiente: {
        imagen: ambientes[9],
        titulo: "Do&Arquitect Negro",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Amarillo",
      acabados: muestrasAcabados["AMARILLO"],
    },
    {
      imagen: muestras[1],
      titulo: "Azul",
      acabados: muestrasAcabados["AZUL"],
    },
    {
      imagen: muestras[2],
      titulo: "Blanco",
      acabados: muestrasAcabados["BLANCO"],
    },
    {
      imagen: muestras[3],
      titulo: "Ceniza",
      acabados: muestrasAcabados["CENIZA"],
    },
    {
      imagen: muestras[4],
      titulo: "Grafito",
      acabados: muestrasAcabados["GRAFITO"],
    },
    {
      imagen: muestras[5],
      titulo: "Gris",
      acabados: muestrasAcabados["GRIS"],
    },
    {
      imagen: muestras[6],
      titulo: "Malva",
      acabados: muestrasAcabados["MALVA"],
    },
    {
      imagen: muestras[7],
      titulo: "Mango",
      acabados: muestrasAcabados["MANGO"],
    },
    {
      imagen: muestras[8],
      titulo: "Negro",
      acabados: muestrasAcabados["NEGRO"],
    },
    {
      imagen: muestras[9],
      titulo: "Rojo",
      acabados: muestrasAcabados["ROJO"],
    },
    {
      imagen: muestras[10],
      titulo: "Turquesa",
      acabados: muestrasAcabados["TURQUESA"],
    },
    {
      imagen: muestras[11],
      titulo: "Verde",
      acabados: muestrasAcabados["VERDE"],
    },
  ],
  acabados: [
    {
      imagen: acabados[0],
      titulo: "Flamed",
    },
    {
      imagen: acabados[1],
      titulo: "Honed",
    },
    {
      imagen: acabados[2],
      titulo: "Mate",
    },
  ],
};

export default configArquitect;
