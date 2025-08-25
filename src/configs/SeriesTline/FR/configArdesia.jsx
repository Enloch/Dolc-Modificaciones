import getDataFromModules from "../../../helpers/getDataFromModules";
import imgSeleccionar from "../../../assets/images/DolckerTline/Series/ARDESIA/DOLCKER CR ARDESIA materiales seleccion.webp";
const ambientesImports = import.meta.glob(
	"../../../assets/images/DolckerTline/Series/ARDESIA/AMBIENTES/**", { eager: true }
);
const muestrasImports = import.meta.glob(
	"../../../assets/images/DolckerTline/Series/ARDESIA/DESPIECE/**", { eager: true }
);
const acabadosImports = import.meta.glob(
	"../../../assets/icons/acabados/**", { eager: true }
);

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configArdesia = {
	titulo: "Dolcker & Line Ard",
	descripcion:
		"Un style de vie contemporain, luxueux mais équilibré. Inspirée par la beauté ancienne et raffinée, la collection transforme le rêve d'élégance contemporaine en réalité à travers des tonalités douces et des couleurs précieuses en harmonie avec les tendances actuelles de l'habitat luxueux. De l'opulence et de l'ostentation, le monde du luxe évolue vers des expressions décoratives plus austères et équilibrées, aux traits minimalistes.",
	imgSeleccionar,
	indicadores: [
		{
			top: "8%",
			left: "20%",
			ambiente: {
				imagen: ambientes[0],
				titulo: "Dolcker & Line Ard Bronce",
			},
		},
		{
			top: "23%",
			left: "20%",
			ambiente: {
				imagen: ambientes[1],
				titulo: "Dolcker & Line Ard Earth",
			},
		},
		{
			top: "41%",
			left: "20%",
			ambiente: {
				imagen: ambientes[2],
				titulo: "Dolcker & Line Ard Noir",
			},
		},
		{
			top: "60%",
			left: "20%",
			ambiente: {
				imagen: ambientes[3],
				titulo: "Dolcker & Line Ard Opal",
			},
		},
		{
			top: "78%",
			left: "20%",
			ambiente: {
				imagen: ambientes[4],
				titulo: "Dolcker & Line Ard Silver",
			},
		},
	],
	muestras: [
		{
			imagen: muestras[0],
			titulo: "Dolcker & Line Bronce",
		},
		{
			imagen: muestras[1],
			titulo: "Dolcker & Line Earth",
		},
		{
			imagen: muestras[2],
			titulo: "Dolcker & Line Noir",
		},
		{
			imagen: muestras[3],
			titulo: "Dolcker & Line Opal",
		},
		{
			imagen: muestras[4],
			titulo: "Dolcker & Line Silver",
		},
	],
	// acabados: [
	//   {
	//     imagen: MuestraImg,
	//     titulo: "Nombre acabado",
	//   },
	// ],
};

export default configArdesia;
