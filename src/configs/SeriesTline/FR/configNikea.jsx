import getDataFromModules from "../../../helpers/getDataFromModules";
import imgSeleccionar from "../../../assets/images/DolckerTline/Series/NIKEA/DOLCKER NIKEA materiales seleccion.webp";

import MuestraImg from "../../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager("../../../assets/images/DolckerTline/Series/NIKEA/AMBIENTES/**");

const muestrasImports = import.meta.globEager("../../../assets/images/DolckerTline/Series/NIKEA/DESPIECE/**");

const acabadosImports = import.meta.globEager("../../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configNikea = {
	titulo: "Dolcker & Line Nik",
	descripcion:
		"Un héritage pour l'avenir, un investissement intemporel qui se transmet en créant un héritage durable et plein de sens. Une inspiration sans limites et la beauté sont une source d'inspiration inépuisable pour les architectes, les designers et les artistes. Un matériau qui éveille la créativité et permet de créer des espaces uniques.",
	imgSeleccionar,
	indicadores: [
		{
			top: "15%",
			left: "20%",
			ambiente: {
				imagen: ambientes[0],
				titulo: "Dolcker & Line Nik",
			},
		},
	],
	muestras: [
		{
			imagen: muestras[0],
			titulo: "Dolcker & Line Nik",
		},
	],
	// acabados: [
	//   {
	//     imagen: MuestraImg,
	//     titulo: "Nombre acabado",
	//   },
	// ],
};

export default configNikea;
