import getDataFromModules from "../../helpers/getDataFromModules";
import imgSeleccionar from "../../assets/images/DolckerTline/Series/BYB/DOLCKER BLACK Y BLANCO materiales seleccion.webp";
import MuestraImg from "../../assets/images/DolckerTline/ranurado11mm.webp";
const ambientesImports = import.meta.globEager("../../assets/images/DolckerTline/Series/BYB/AMBIENTES/**");

const muestrasImports = import.meta.globEager("../../assets/images/DolckerTline/Series/BYB/DESPIECE/**");

const acabadosImports = import.meta.globEager("../../assets/icons/acabados/**");

const ambientes = getDataFromModules(ambientesImports);
const muestras = getDataFromModules(muestrasImports);
const acabados = getDataFromModules(acabadosImports);

const configByb = {
	titulo: "Dolcker & Line ByB",
	descripcion:
		"Diálogo con la arquitectura en una serie que se integra a la perfección en cualquier estilo, desde el clásico hasta el vanguardista, creando una armonía entre la construcción y el entorno. Material resistente al paso del tiempo, capaz de soportar el uso y desgaste diario sin perder su belleza. Una inversión que se revaloriza con el tiempo, sin olvidar sostenibilidad y respeto.",
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
