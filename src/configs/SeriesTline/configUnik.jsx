import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/UNIK/DOLCKER UNIK materiales seleccion_WEBP.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager("../../assets/images/DolckerTline/Series/UNIK/AMBIENTES/**");

const muestrasImports = import.meta.globEager("../../assets/images/DolckerTline/Series/UNIK/DESPIECE/**");

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configUnik = {
	titulo: "Dolcker & LineDolcker & Line  Uni",
	descripcion:
		"Superficies con luz propia, texturas rugosas que invitan al tacto, relieves y ondulaciones que evocan paisajes naturales, un sinfín de sensaciones para enriquecer los espacios. Carácter inimitable donde cada pieza es única e irrepetible, con sus propias vetas, inclusiones y tonalidades. Un sello distintivo que aporta exclusividad y personalidad a cualquier proyecto.",
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
