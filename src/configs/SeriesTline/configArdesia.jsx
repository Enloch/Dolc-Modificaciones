import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/ARDESIA/DOLCKER CR ARDESIA materiales seleccion.webp";
const ambientesImports = import.meta.globEager("../../assets/images/DolckerTline/Series/ARDESIA/AMBIENTES/**");
const muestrasImports = import.meta.globEager("../../assets/images/DolckerTline/Series/ARDESIA/DESPIECE/**");
const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configArdesia = {
	titulo: "Dolcker & Line Ard",
	descripcion:
		"Un estilo de vida contemporáneo, lujoso pero equilibrado Inspirada en la belleza antigua y refinada la colección transforma el sueño de elegancia contemporánea en realidad a través de suaves tonalidades y preciosos colores en sintonía con las más actuales tendencias de la vivienda de lujosa. De la opulencia y de la ostentación, el mundo del lujo evoluciona hacia expresiones decorativas más austeras y equilibradas, de rasgos minimalistas.",
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
