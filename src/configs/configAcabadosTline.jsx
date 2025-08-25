import getDataFromModules from "../helpers/getDataFromModules";

const flamed = import.meta.glob(
		"../assets/images/DolckerTline/Diseno/Acabados/RENDER FLAMED/**", { eager: true }
	),
	pulido = import.meta.glob(
		"../assets/images/DolckerTline/Diseno/Acabados/RENDER PULIDO/**", { eager: true }
	),
	mate = import.meta.glob(
		"../assets/images/DolckerTline/Diseno/Acabados/RENDER MATE/**", { eager: true }
	);

const flamedImports = getDataFromModules(flamed),
	pulidoImports = getDataFromModules(pulido),
	mateImports = getDataFromModules(mate);

const config = {
	indicadores: [
		{ top: "35%", left: "40%" },
		{ top: "48%", left: "54%" },
		{ top: "60%", left: "65%" },
	],
	desplazadores: [
		{
			titulo: "Mate",
			imgs: mateImports,
		},
		{
			titulo: "Pulido",
			imgs: pulidoImports,
		},
		{
			titulo: "Rústico",
			imgs: flamedImports,
		},
	],
};

export default config;
