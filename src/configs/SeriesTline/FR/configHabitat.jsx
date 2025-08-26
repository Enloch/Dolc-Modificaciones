import getDataFromModules from "../../../helpers/getDataFromModules";
import imgSeleccionar from "../../../assets/images/DolckerTline/Series/HABITAT/DOLCKER HABITAT materiales seleccion.webp";
import InteractivoImg from "../../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager("../../../assets/images/DolckerTline/Series/HABITAT/AMBIENTES/**");

const muestrasImports = import.meta.globEager("../../../assets/images/DolckerTline/Series/HABITAT/DESPIECE/**");

const acabadosImports = import.meta.globEager("../../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configHabitat = {
	titulo: "Dolcker & LineDolcker & Line  Habi",
	descripcion:
		"Harmonie naturelle inspirée de la palette de la nature, la collection offre une gamme de couleurs chaudes et de textures douces. Les finitions invitent au toucher, créant des ambiances accueillantes et pleines de paix. La collection s'adapte à divers styles décoratifs, créant une atmosphère chaleureuse et naturelle.",
	imgSeleccionar,
	indicadores: [
		{
			top: "15%",
			left: "20%",
			ambiente: {
				imagen: ambientes[0],
				titulo: "Dolcker & LineDolcker & Line  Habi Grey",
			},
		},
		{
			top: "55%",
			left: "20%",
			ambiente: {
				imagen: ambientes[1],
				titulo: "Dolcker & LineDolcker & Line  Habi Taupe",
			},
		},
	],
	muestras: [
		{
			imagen: muestras[0],
			titulo: "Dolcker & Line Grey",
		},

		{
			imagen: muestras[1],
			titulo: "Dolcker & Line Taupe",
		},
	],
	// acabados: [
	//   {
	//     imagen: MuestraImg,
	//     titulo: "Nombre acabado",
	//   },
	// ],
};

export default configHabitat;
