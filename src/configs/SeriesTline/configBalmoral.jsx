import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/BALMORAL/DOLCKER BALMORAL materiales seleccion.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/BALMORAL/AMBIENTES/**"
);

const muestrasImports = import.meta.globEager(
  "../../assets/images/DolckerTline/Series/BALMORAL/DESPIECE/**"
);

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configBalmoral = {
  titulo: "Dolcker & LineDolcker & Line  Bal",
  descripcion:
    "Suaves vetas y tenues contrastes cromáticos caracterizan una colección que expresa buen gusto y un estilo auténtico, lejos de matices vivos y llamativos. Las superficies de tonalidades luminosas, profundas y delicadas valorizan el espacio sin anular su armonía arquitectónica. La colección se adecúa a interpretaciones estilísticas diversas: los colores cálidos de acabado mate delinean ambientes naturales y relajantes, los tonos perla y azul emanan luz y exhiben un carácter único, revelando infinitas posibilidades que explorar.",
  imgSeleccionar,
  indicadores: [
    {
      top: "23%",
      left: "20%",
      ambiente: {
        imagen: ambientes[0],
        titulo: "Dolcker & LineDolcker & Line  Bal Dark Natural",
      },
    },
    {
      top: "68%",
      left: "20%",
      ambiente: {
        imagen: ambientes[1],
        titulo: "Dolcker & LineDolcker & Line  Bal Moon Natural",
      },
    },
  ],
  muestras: [
    {
      imagen: muestras[0],
      titulo: "Dolcker & Line Dark Natural",
    },
    {
      imagen: muestras[1],
      titulo: "Dolcker & Line Moon Natural",
    },
  ],
  acabados: [
    {
      imagen: MuestraImg,
      titulo: "Nombre acabado",
    },
  ],
};

export default configBalmoral;
