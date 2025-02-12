import getDataFromModules from "../helpers/getDataFromModules";
const piezasImport = import.meta.globEager(
	"../assets/icons/MatrixDecor/piezas/**"
);
const piezas = getDataFromModules(piezasImport);

const config = [
	{
		top: "50%",
		left: "39%",
		content: {
			imgSrc: piezas[0],
			title: "Esquina",
		},
	},

	{
		top: "77%",
		left: "75%",
		content: {
			imgSrc: piezas[1],
			title: "Zocalo LED",
		},
	},
	{
		top: "42%",
		left: "67%",
		content: {
			imgSrc: piezas[2],
			title: "Matriz 1",
		},
	},
	{
		top: "60%",
		left: "25%",
		content: {
			imgSrc: piezas[3],
			title: "Matriz 2",
		},
	},
	{
		top: "33%",
		left: "33%",
		content: {
			imgSrc: piezas[4],
			title: "LED Vertical",
		},
	},

	// {
	// 	top: "48%",
	// 	left: "31%",
	// 	content: {
	// 		imgSrc: piezas[4],
	// 		title: "Recerco",
	// 	},
	// },
	// {
	//   top: "73%",
	//   left: "60%",
	//   content: {
	//     imgSrc: piezas[5],
	//     title: "Rejilla",
	//   },
	// },
];

export default config;
