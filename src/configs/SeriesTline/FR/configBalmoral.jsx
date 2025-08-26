import getDataFromModules from "../../../helpers/getDataFromModules";
import imgSeleccionar from "../../../assets/images/DolckerTline/Series/BALMORAL/DOLCKER BALMORAL materiales seleccion.webp";
import InteractivoImg from "../../../assets/images/DolckerTline/Interactivofachada.jpg";
import MuestraImg from "../../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager("../../../assets/images/DolckerTline/Series/BALMORAL/AMBIENTES/**");

const muestrasImports = import.meta.globEager("../../../assets/images/DolckerTline/Series/BALMORAL/DESPIECE/**");

const acabadosImports = import.meta.globEager("../../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configBalmoral = {
	titulo: "Dolcker & LineDolcker & Line  Bal",
	descripcion:
		"Des veines douces et de subtils contrastes chromatiques caractérisent une collection qui exprime le bon goût et un style authentique, loin des nuances vives et flashy. Les surfaces aux tonalités lumineuses, profondes et délicates valorisent l'espace sans annuler son harmonie architecturale. La collection s'adapte à diverses interprétations stylistiques : les couleurs chaudes à finition mate dessinent des ambiances naturelles et relaxantes, les tons perle et bleu émanent de la lumière et affichent un caractère unique, révélant des possibilités infinies à explorer.",
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
	// acabados: [
	//   {
	//     imagen: MuestraImg,
	//     titulo: "Nombre acabado",
	//   },
	// ],
};

export default configBalmoral;
