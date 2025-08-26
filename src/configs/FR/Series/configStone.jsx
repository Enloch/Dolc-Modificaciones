import getDataFromModules from "../../../helpers/getDataFromModules";

import imgSeleccionar from "../../../assets/images/Series/STONE/Dolcker NATURAL STONE_seleccionar.webp";

const ambientesImports = import.meta.globEager("../../../assets/images/Series/STONE/AMBIENTES/**");

const muestrasImports = import.meta.globEager("../../../assets/images/Series/STONE/DESPIECE/**");

const acabadosImports = import.meta.globEager("../../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configSTONE = {
	titulo: "DO&STONE",
	descripcion:
		"La série STONE est le résultat de l'innovation et de la fonctionnalité, l'union entre la technique la plus avancée et la polyvalence. Les formats de la collection, ses tons neutres et son aspect monochrome, lui permettent d'être la star de n'importe quel espace.",
	imgSeleccionar,
	indicadores: [
		{
			top: "36%",
			left: "20%",
			ambiente: {
				imagen: ambientes[0],
				titulo: "Do&Stone Noir",
			},
		},
		{
			top: "81%",
			left: "20%",
			ambiente: {
				imagen: ambientes[1],
				titulo: "Do&Stone Granit",
			},
		},
		{
			top: "10%",
			left: "20%",
			ambiente: {
				imagen: ambientes[2],
				titulo: "Do&Stone Clair",
			},
		},
		{
			top: "59%",
			left: "20%",
			ambiente: {
				imagen: ambientes[3],
				titulo: "Do&Stone Blanc",
			},
		},
	],
	muestras: [
		{
			imagen: muestras[0],
			titulo: "Noir",
		},
		{
			imagen: muestras[1],
			titulo: "Clair",
		},
		{
			imagen: muestras[2],
			titulo: "Granit",
		},
		{
			imagen: muestras[3],
			titulo: "Blanc",
		},
	],
	acabados: [
		{
			imagen: acabados[0],
			titulo: "Flamed",
		},
	],
};

export default configSTONE;
