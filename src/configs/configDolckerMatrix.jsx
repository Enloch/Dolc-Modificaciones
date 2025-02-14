import getDataFromModules from "../helpers/getDataFromModules";
const piezasImport = import.meta.globEager("../assets/icons/Matrix/piezas/**");
const piezas = getDataFromModules(piezasImport);

const config = [
	{
		top: "20%",
		left: "39%",
		content: {
			imgSrc: piezas[0],
			title: "Coronación",
		},
	},
	{
		top: "38%",
		left: "47%",
		content: {
			imgSrc: piezas[1],
			title: "Esquina A",
		},
	},
	//   {
	//     top: "70.3%",
	//     left: "77.3%",
	//     content: {
	//       imgSrc: piezas[2],
	//       title: "Esquina b",
	//     },
	//   },
	{
		top: "28%",
		left: "75%",
		content: {
			imgSrc: piezas[3],
			title: "LED",
		},
	},
	{
		top: "30%",
		left: "58%",
		content: {
			imgSrc: piezas[4],
			title: "Recerco",
		},
	},
	{
		top: "47%",
		left: "78%",
		content: {
			imgSrc: piezas[5],
			title: "Rejilla",
		},
	},
];

export default config;
