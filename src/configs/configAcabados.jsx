import getDataFromModules from "../helpers/getDataFromModules";

const flamed = import.meta.globEager(
		"../assets/images/Diseno/Acabados/RENDER FLAMED/**"
	),
	lapado = import.meta.globEager(
		"../assets/images/Diseno/Acabados/RENDER LAPADO/**"
	),
	mate = import.meta.globEager(
		"../assets/images/Diseno/Acabados/RENDER MATE/**"
	),
	rigato = import.meta.globEager(
		"../assets/images/Diseno/Acabados/RENDER RIGATO/**"
	);

const flamedImports = getDataFromModules(flamed),
	lapadoImports = getDataFromModules(lapado),
	mateImports = getDataFromModules(mate),
	rigatoImports = getDataFromModules(rigato);

const config = {
	indicadores: [
		{ top: "26%", left: "32%" },
		{ top: "42%", left: "50%" },
		{ top: "56%", left: "62%" },
		{ top: "71%", left: "72%" },
	],
	desplazadores: [
		{
			titulo: "Mate",
			imgs: mateImports,
		},
		{
			titulo: "Rigato",
			imgs: rigatoImports,
		},
		{
			titulo: "Flamed",
			imgs: flamedImports,
		},
		{
			titulo: "Honed",
			imgs: lapadoImports,
		},
	],
};

export default config;
