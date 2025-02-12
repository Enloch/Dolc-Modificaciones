import getDataFromModules from "../helpers/getDataFromModules";
const piezasImport = import.meta.globEager(
	"../assets/icons/MatrixDecor/piezas/**"
);
const piezas = getDataFromModules(piezasImport);

const config = [
	{
		top: "50%",
		left: "22%",
		content: {
			imgSrc: piezas[0],
			title: "Esquina",
		},
	},

	{
		top: "71%",
		left: "32%",
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
	//   {
	//     top: "70.3%",
	//     left: "77.3%",
	//     content: {
	//       imgSrc: piezas[2],
	//       title: "Esquina b",
	//     },
	//   },

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
