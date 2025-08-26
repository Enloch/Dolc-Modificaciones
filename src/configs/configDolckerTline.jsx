import getDataFromModules from "../helpers/getDataFromModules";
const piezasImport = import.meta.globEager("../assets/icons/Tline/piezas/**");
const piezas = getDataFromModules(piezasImport);

const config = [
	{
		top: "26%",
		left: "64%",
		content: {
			imgSrc: piezas[4],
			title: "Recercos",
		},
	},
	{
		top: "13%",
		left: "32%",
		content: {
			imgSrc: piezas[6],
			title: "Tapa coronación",
		},
	},
	{
		top: "48%",
		left: "77.3%",
		content: {
			imgSrc: piezas[3],
			title: "Fachada ventilada",
		},
	},
	{
		top: "40%",
		left: "27%",
		content: {
			imgSrc: piezas[2],
			title: "Esquina cerámica",
		},
	},
	// {
	//     top: '23%',
	//     left: '89%',
	//     content: {
	//         imgSrc: piezas[5],
	//         title: 'Rejilla techo',
	//     },
	// },
	// {
	//     top: '95%',
	//     left: '33%',
	//     content: {
	//         imgSrc: piezas[0],
	//         title: 'Arranque',
	//     },
	// },
	{
		top: "54.5%",
		left: "50%",
		content: {
			imgSrc: piezas[1],
			title: "Cenefa",
		},
	},
];

export default config;
