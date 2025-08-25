import getDataFromModules from "../../../helpers/getDataFromModules";
import imgSeleccionar from "../../../assets/images/DolckerTline/Series/UNIK/DOLCKER UNIK materiales seleccion_WEBP.webp";
import InteractivoImg from "../../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.glob(
	"../../../assets/images/DolckerTline/Series/UNIK/AMBIENTES/**", { eager: true }
);

const muestrasImports = import.meta.glob(
	"../../../assets/images/DolckerTline/Series/UNIK/DESPIECE/**", { eager: true }
);

const acabadosImports = import.meta.glob(
	"../../../assets/icons/acabados/**", { eager: true }
);

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configUnik = {
	titulo: "Dolcker & LineDolcker & Line  Uni",
	descripcion:
		"Des surfaces lumineuses, des textures rugueuses qui invitent au toucher, des reliefs et des ondulations qui évoquent des paysages naturels, une infinité de sensations pour enrichir les espaces. Un caractère inimitable où chaque pièce est unique et irremplaçable, avec ses propres veines, inclusions et tonalités. Un cachet distinctif qui apporte exclusivité et personnalité à tout projet.",
	imgSeleccionar,
	indicadores: [
		{
			top: "23%",
			left: "20%",
			ambiente: {
				imagen: ambientes[0],
				titulo: "Dolcker & LineDolcker & Line  Uni Ash Natural",
			},
		},
		{
			top: "68%",
			left: "20%",
			ambiente: {
				imagen: ambientes[1],
				titulo: "Dolcker & LineDolcker & Line  Uni Ivory Natural",
			},
		},
	],
	muestras: [
		{
			imagen: muestras[0],
			titulo: "Dolcker & Line Ash Natural",
		},
		{
			imagen: muestras[1],
			titulo: "Dolcker & Line Ivory Natural",
		},
	],
	// acabados: [
	//   {
	//     imagen: MuestraImg,
	//     titulo: "Nombre acabado",
	//   },
	// ],
};

export default configUnik;
