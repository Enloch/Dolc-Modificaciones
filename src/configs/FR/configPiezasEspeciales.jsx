import getDataFromModules from "../../helpers/getDataFromModules";

const selectoresImports = import.meta.globEager("../../assets/icons/piezas/**");
const selectores = getDataFromModules(selectoresImports);

const albardilla = import.meta.globEager("../../assets/images/Diseno/Piezas especiales/ALBARDILLA/*.webp"),
	peldano1 = import.meta.globEager("../../assets/images/Diseno/Piezas especiales/PELDANO 1/*.webp"),
	peldano2 = import.meta.globEager("../../assets/images/Diseno/Piezas especiales/PELDANO 2/*.webp"),
	peldano3 = import.meta.globEager("../../assets/images/Diseno/Piezas especiales/PELDANO 3/*.webp"),
	rejilla = import.meta.globEager("../../assets/images/Diseno/Piezas especiales/REJILLA/*.webp"),
	sueloElevado = import.meta.globEager("../../assets/images/Diseno/Piezas especiales/SUELO ELEVADO/*.webp"),
	techo = import.meta.globEager("../../assets/images/Diseno/Piezas especiales/TECHO/*.webp"),
	vierteaguas = import.meta.globEager("../../assets/images/Diseno/Piezas especiales/VIERTEAGUAS/*.webp");

const albardillaImports = getDataFromModules(albardilla),
	peldano1Imports = getDataFromModules(peldano1),
	peldano2Imports = getDataFromModules(peldano2),
	peldano3Imports = getDataFromModules(peldano3),
	rejillaImports = getDataFromModules(rejilla),
	sueloElevadoImports = getDataFromModules(sueloElevado),
	techoImports = getDataFromModules(techo),
	vierteaguasImports = getDataFromModules(vierteaguas);

const config = {
	bottom: "10%",
	left: "4%",
	menu: {
		seleccionado: 0,
		selectores: [
			{
				selectorImg: selectores[0],
				titulo: "Chapes",
				rotador: albardillaImports,
			},
			{
				selectorImg: selectores[3],
				titulo: "Marches",
				menu: {
					selectores: [
						{
							selectorImg: selectores[3],
							titulo: "Type 1",
							rotador: peldano1Imports,
						},
						{
							selectorImg: selectores[4],
							titulo: "Type 2",
							rotador: peldano2Imports,
						},
						{
							selectorImg: selectores[5],
							titulo: "Type 3",
							rotador: peldano3Imports,
						},
					],
				},
			},
			{
				selectorImg: selectores[7],
				titulo: "Grille",
				rotador: rejillaImports,
			},
			{
				selectorImg: selectores[8],
				titulo: "Plancher surélevé",
				rotador: sueloElevadoImports,
			},
			{
				selectorImg: selectores[9],
				titulo: "Toit",
				rotador: techoImports,
			},
			{
				selectorImg: selectores[10],
				titulo: "Gouttière",
				rotador: vierteaguasImports,
			},
		],
	},
};

export default config;
