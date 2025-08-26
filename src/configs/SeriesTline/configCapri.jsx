import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/CAPRI/DOLCKER CAPRI materiales seleccion WEB.webp";
import InteractivoImg from "../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager("../../assets/images/DolckerTline/Series/CAPRI/AMBIENTES/**");

const muestrasImports = import.meta.globEager("../../assets/images/DolckerTline/Series/CAPRI/DESPIECE/**");

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configCapri = {
	titulo: "Dolcker & LineDolcker & Line  Cap",
	descripcion:
		"La colección no solo es visualmente atractiva, sino que también ofrece una experiencia sensorial única al tacto. Su textura natural invita a la caricia, creando una conexión profunda con la naturaleza. Crea tus espacios con alma, impregnándolos de una energía especial que conecta con la esencia de la tierra. Un refugio para el cuerpo y el espíritu.",
	imgSeleccionar,
	indicadores: [
		{
			top: "15%",
			left: "20%",
			ambiente: {
				imagen: ambientes[0],
				titulo: "Dolcker & LineDolcker & Line  Cap Cream",
			},
		},
		{
			top: "45%",
			left: "20%",
			ambiente: {
				imagen: ambientes[1],
				titulo: "Dolcker & LineDolcker & Line  Cap Dark",
			},
		},
		{
			top: "75%",
			left: "20%",
			ambiente: {
				imagen: ambientes[2],
				titulo: "Dolcker & LineDolcker & Line  Cap Grey",
			},
		},
	],
	muestras: [
		{
			imagen: muestras[0],
			titulo: "Dolcker & Line Cream",
		},
		{
			imagen: muestras[1],
			titulo: "Dolcker & Line Dark",
		},
		{
			imagen: muestras[2],
			titulo: "Dolcker & Line Grey",
		},
	],
	// acabados: [
	//   {
	//     imagen: MuestraImg,
	//     titulo: "Nombre acabado",
	//   },
	// ],
};

export default configCapri;
