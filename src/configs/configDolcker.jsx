import getDataFromModules from "../helpers/getDataFromModules";

const piezasImport = import.meta.glob("../assets/icons/piezas/**", { eager: true });
const piezas = getDataFromModules(piezasImport);

const config = [
	{
		top: "50%",
		left: "18%",
		content: {
			imgSrc: piezas[6],
			title: "Recercos",
		},
	},
	{
		top: "26%",
		left: "65%",
		content: {
			imgSrc: piezas[0],
			title: "Tapa coronación",
		},
	},
	{
		top: "40%",
		left: "35%",
		content: {
			imgSrc: piezas[2],
			title: "Fachada ventilada",
		},
	},
	{
		top: "51%",
		left: "60%",
		content: {
			imgSrc: piezas[1],
			title: "Esquina full body",
		},
	},
	{
		top: "60%",
		left: "34%",
		content: {
			imgSrc: piezas[7],
			title: "Rejilla techo",
		},
	},
	{
		top: "72%",
		left: "39%",
		content: {
			imgSrc: piezas[8],
			title: "Suelo elevado",
		},
	},
	{
		top: "73%",
		left: "14%",
		content: {
			imgSrc: piezas[7],
			title: "Rejilla piscina",
		},
	},
	{
		top: "73%",
		left: "66%",
		content: {
			imgSrc: piezas[4],
			title: "Peldaño",
		},
	},
];

export default config;
