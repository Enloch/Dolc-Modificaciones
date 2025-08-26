import getDataFromModules from "../../../helpers/getDataFromModules";
import imgSeleccionar from "../../../assets/images/DolckerTline/Series/BYB/DOLCKER BLACK Y BLANCO materiales seleccion.webp";
import MuestraImg from "../../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager("../../../assets/images/DolckerTline/Series/BYB/AMBIENTES/**");

const muestrasImports = import.meta.globEager("../../../assets/images/DolckerTline/Series/BYB/DESPIECE/**");

const acabadosImports = import.meta.globEager("../../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configByb = {
	titulo: "Dolcker & Line ByB",
	descripcion:
		"Dialogue avec l'architecture dans une série qui s'intègre parfaitement à tout style, du classique à l'avant-garde, créant une harmonie entre la construction et l'environnement. Matériau résistant au temps, capable de supporter l'usage et l'usure quotidienne sans perdre sa beauté. Un investissement qui se revalorise avec le temps, sans oublier la durabilité et le respect.",
	imgSeleccionar,
	indicadores: [
		{
			top: "23%",
			left: "20%",
			ambiente: {
				imagen: ambientes[0],
				titulo: "Dolcker & Line ByB Black Matt",
			},
		},
		{
			top: "68%",
			left: "20%",
			ambiente: {
				imagen: ambientes[1],
				titulo: "Dolcker & Line ByB Blanco Natural",
			},
		},
	],
	muestras: [
		{
			imagen: muestras[0],
			titulo: "Dolcker & Line Black Matt",
		},
		{
			imagen: muestras[1],
			titulo: "Dolcker & Line Blanco Natural",
		},
	],
	// acabados: [
	//   {
	//     imagen: MuestraImg,
	//     titulo: "Nombre acabado",
	//   },
	// ],
};

export default configByb;
