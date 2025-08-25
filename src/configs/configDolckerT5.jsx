import getDataFromModules from "../helpers/getDataFromModules";
const piezasImport = import.meta.glob("../assets/icons/Tline/piezas/**");
const piezas = getDataFromModules(piezasImport);

const config = [
	{
		top: "30%",
		left: "18%",
		content: {
			imgSrc: piezas[4],
			title: "Recercos",
		},
	},
	{
		top: "25%",
		left: "70%",
		content: {
			imgSrc: piezas[6],
			title: "Tapa coronación",
		},
	},
	{
		top: "48%",
		left: "60%",
		content: {
			imgSrc: piezas[3],
			title: "Fachada ventilada",
		},
	},
	{
		top: "40%",
		left: "44%",
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
	{
		top: "78%",
		left: "50%",
		content: {
			imgSrc: piezas[0],
			title: "Arranque",
		},
	},
	// {
	//     top: '54.5%',
	//     left: '50%',
	//     content: {
	//         imgSrc: piezas[1],
	//         title: 'Cenefa',
	//     },
	// },
];

export default config;
