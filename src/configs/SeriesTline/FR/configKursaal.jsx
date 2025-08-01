import getDataFromModules from "../../../helpers/getDataFromModules";
import imgSeleccionar from "../../../assets/images/DolckerTline/Series/KURSAAL/DOLCKER KURSAAL materiales seleccion.webp";
import InteractivoImg from "../../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../../assets/images/DolckerTline/Series/KURSAAL/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../../assets/images/DolckerTline/Series/KURSAAL/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configKursaal = {
  titulo: "Dolcker & Line Kur",
  descripcion:
    "Comme un élément qui connecte l'intérieur avec l'extérieur, créant un dialogue harmonieux entre l'architecture et l'environnement naturel, cette série est présentée. Un espace où la nature devient le protagoniste, un livre ouvert qui raconte l'histoire de la terre, ses couches géologiques et les processus de transformation qui l'ont façonnée. Un voyage fascinant à travers le temps.",
  imgSeleccionar,
  indicadores: [
    {
      top: "8%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & Line Kur Ashen",
      },
    },
    {
      top: "22%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & Line Kur Neutral",
      },
    },
    {
      top: "38%",
      left: "20%",
      ambiente: {
        imagen: ambientes[2],
        titulo: "Dolcker & Line Kur Pure",
      },
    },
    {
      top: "55%",
      left: "20%",
      ambiente: {
        imagen: ambientes[3],
        titulo: "Dolcker & Line Kur Raven",
      },
    },
    {
      top: "71%",
      left: "20%",
      ambiente: {
        imagen: ambientes[4],
        titulo: "Dolcker & Line Kur Rust",
      },
    },
    {
      top: "86%",
      left: "20%",
      ambiente: {
        imagen: ambientes[5],
        titulo: "Dolcker & Line Kur Slate",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Ashen",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Neutral",
    },
    {
      imagen: muestras[2],
      titulo: "Dolcker & Line Pure",
    },
    {
      imagen: muestras[3],
      titulo: "Dolcker & Line Raven",
    },
    {
      imagen: muestras[4],
      titulo: "Dolcker & Line Rust",
    },
    {
      imagen: muestras[5],
      titulo: "Dolcker & Line Slate",
    },
  ],
  // acabados: [
  //   {
  //     imagen: MuestraImg,
  //     titulo: "Nombre acabado",
  //   },
  // ],
};

export default configKursaal;
