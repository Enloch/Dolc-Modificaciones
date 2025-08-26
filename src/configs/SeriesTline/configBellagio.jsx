import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/BELLAGIO/DOLCKER BELLAGIO materiales seleccion.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager("../../assets/images/DolckerTline/Series/BELLAGIO/AMBIENTES/**");

const muestrasImports = import.meta.globEager("../../assets/images/DolckerTline/Series/BELLAGIO/DESPIECE/**");

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configBellagio = {
	titulo: "Dolcker & Line Bella",
	descripcion:
		"La armoniosa belleza del mármol blanco conjugando la percepción de lujo y refinamiento que siempre ha atesorado este fascinante material con el rigor de la estética y de las vetas equilibradas, en sintonía con las tendencias decorativas más recientes. El diseño luminoso e imperecedero de la colección se puede expresar con arreglo a un sinfín de interpretaciones estilísticas, del corte clásico al minimalista hasta llegar a los tonos cálidos y naturales del lenguaje nórdico.",
	imgSeleccionar,
	indicadores: [
		{
			top: "15%",
			left: "20%",
			ambiente: {
				imagen: ambientes[0],
				titulo: "Dolcker & Line Bella Natural",
			},
		},
	],
	muestras: [
		{
			imagen: muestras[0],
			titulo: "Dolcker & Line Natural",
		},
	],
	// acabados: [
	//   {
	//     imagen: MuestraImg,
	//     titulo: "Nombre acabado",
	//   },
	// ],
};

export default configBellagio;
