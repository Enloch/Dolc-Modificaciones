import getDataFromModules from "../../../helpers/getDataFromModules";
import imgSeleccionar from "../../../assets/images/DolckerTline/Series/HANNOVER/DOLCKER HANNOVER materiales seleccion_WEBP.webp";
import InteractivoImg from "../../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager("../../../assets/images/DolckerTline/Series/HANNOVER/AMBIENTES/**");

const muestrasImports = import.meta.globEager("../../../assets/images/DolckerTline/Series/HANNOVER/DESPIECE/**");

const acabadosImports = import.meta.globEager("../../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configHannover = {
	titulo: "Dolcker & Line Han",
	descripcion:
		"La série nous invite à réfléchir sur l'importance des petits détails, de la beauté qui nous entoure et de la nécessité de trouver des moments de paix dans notre quotidien. La fluidité et le dynamisme sont un symbole d'ouverture au monde, de connexion avec la nature et de recherche de la beauté. C'est un défi à la rigidité de l'architecture traditionnelle. Son design crée une sensation de mouvement et de dynamisme, comme si la structure était en constante transformation.",
	imgSeleccionar,
	indicadores: [
		{
			ambiente: {
				imagen: ambientes[0],
				titulo: "Dolcker & Line Han Black Natural",
			},
		},
		{
			ambiente: {
				imagen: ambientes[1],
				titulo: "Dolcker & Line Han Steel Natural",
			},
		},
	],
	muestras: [
		{
			imagen: muestras[0],
			titulo: "Dolcker & Line Black Natural",
		},
		{
			imagen: muestras[1],
			titulo: "Dolcker & Line Steel Natural",
		},
	],
	acabados: [
		{
			imagen: MuestraImg,
			titulo: "Nombre acabado",
		},
	],
};

export default configHannover;
