import getDataFromModules from "../../../../../helpers/getDataFromModules";

// Import SeriesTline configs
import configArdesia from "../../../../../configs/SeriesTline/configArdesia";
import configBalmoral from "../../../../../configs/SeriesTline/configBalmoral";
import configBellagio from "../../../../../configs/SeriesTline/configBellagio";
import configBrunswich from "../../../../../configs/SeriesTline/configBrunswich";
import configByb from "../../../../../configs/SeriesTline/configByb";
import configCapri from "../../../../../configs/SeriesTline/configCapri";
import configCore from "../../../../../configs/SeriesTline/configCore";
import configCromat from "../../../../../configs/SeriesTline/configCromat";
import configDome from "../../../../../configs/SeriesTline/configDome";
import configEternal from "../../../../../configs/SeriesTline/configEternal";
import configGravel from "../../../../../configs/SeriesTline/configGravel";
import configHabitat from "../../../../../configs/SeriesTline/configHabitat";
import configHannover from "../../../../../configs/SeriesTline/configHannover";
import configInvictus from "../../../../../configs/SeriesTline/configInvictus";
import configKursaal from "../../../../../configs/SeriesTline/configKursaal";
import configNikea from "../../../../../configs/SeriesTline/configNikea";
import configStoneland from "../../../../../configs/SeriesTline/configStoneland";
import configStorm from "../../../../../configs/SeriesTline/configStorm";
import configUnik from "../../../../../configs/SeriesTline/configUnik";

// Import images for each series
const ARQUITECTImports = import.meta.globEager("../../../../../assets/images/Series/ARQUITECT/DESPIECE/**");
const BASALTImports = import.meta.globEager("../../../../../assets/images/Series/BASALT/DESPIECE/**");
const CRETEImports = import.meta.globEager("../../../../../assets/images/Series/CRETE/DESPIECE/**");
const DOLMImports = import.meta.globEager("../../../../../assets/images/Series/DOLM/DESPIECE/**");
const MARBLEImports = import.meta.globEager("../../../../../assets/images/Series/MARBLE/DESPIECE/**");
const PORTLANDImports = import.meta.globEager("../../../../../assets/images/Series/PORTLAND/DESPIECE/**");
const QUARCITYImports = import.meta.globEager("../../../../../assets/images/Series/QUARCITY/DESPIECE/**");
const QUARTZImports = import.meta.globEager("../../../../../assets/images/Series/QUARTZ/DESPIECE/**");
const SPACEImports = import.meta.globEager("../../../../../assets/images/Series/SPACE/DESPIECE/**");
const STONEImports = import.meta.globEager("../../../../../assets/images/Series/STONE/DESPIECE/**");
const TERRAZOImports = import.meta.globEager("../../../../../assets/images/Series/TERRAZO/DESPIECE/**");
const TZMENTImports = import.meta.globEager("../../../../../assets/images/Series/TZMENT/DESPIECE/**");
const WOODImports = import.meta.globEager("../../../../../assets/images/Series/WOOD/DESPIECE/**");
//Series CLean
const BRERAImports = import.meta.globEager("../../../../../assets/images/Invisifix/Series/BRERA/**");
const DOMUSImports = import.meta.globEager("../../../../../assets/images/Invisifix/Series/DOMUS/**");
const LUCENAImports = import.meta.globEager("../../../../../assets/images/Invisifix/Series/LUCENA/**");
const MELBOURNEImports = import.meta.globEager("../../../../../assets/images/Invisifix/Series/MELBOURNE/**");
const VALONIAImports = import.meta.globEager("../../../../../assets/images/Invisifix/Series/VALONIA/**");

// Get data from modules
const muestrasARQUITECT = getDataFromModules(ARQUITECTImports);
const muestrasBASALT = getDataFromModules(BASALTImports);
const muestrasCRETE = getDataFromModules(CRETEImports);
const muestrasDOLM = getDataFromModules(DOLMImports);
const muestrasMARBLE = getDataFromModules(MARBLEImports);
const muestrasPORTLAND = getDataFromModules(PORTLANDImports);
const muestrasQUARCITY = getDataFromModules(QUARCITYImports);
const muestrasQUARTZ = getDataFromModules(QUARTZImports);
const muestrasSPACE = getDataFromModules(SPACEImports);
const muestrasSTONE = getDataFromModules(STONEImports);
const muestrasTERRAZO = getDataFromModules(TERRAZOImports);
const muestrasTZMENT = getDataFromModules(TZMENTImports);
const muestrasWOOD = getDataFromModules(WOODImports);
//series Clean
const muestrasBRERA = getDataFromModules(BRERAImports);
const muestrasDOMUS = getDataFromModules(DOMUSImports);
const muestrasLUCENA = getDataFromModules(LUCENAImports);
const muestrasMELBOURNE = getDataFromModules(MELBOURNEImports);
const muestrasVALONA = getDataFromModules(VALONIAImports);
export const seriesInvisifix = [
	// DO&ARQUITECT (12 variantes)
	{
		id: 1,
		name: "DO&ARQUITECT Amarillo",
		image: muestrasARQUITECT[0],
	},
	{
		id: 2,
		name: "DO&ARQUITECT Azul",
		image: muestrasARQUITECT[1],
	},
	{
		id: 3,
		name: "DO&ARQUITECT Blanco",
		image: muestrasARQUITECT[2],
	},
	{
		id: 4,
		name: "DO&ARQUITECT Ceniza",
		image: muestrasARQUITECT[3],
	},
	{
		id: 5,
		name: "DO&ARQUITECT Grafito",
		image: muestrasARQUITECT[4],
	},
	{
		id: 6,
		name: "DO&ARQUITECT Gris",
		image: muestrasARQUITECT[5],
	},
	{
		id: 7,
		name: "DO&ARQUITECT Malva",
		image: muestrasARQUITECT[6],
	},
	{
		id: 8,
		name: "DO&ARQUITECT Mango",
		image: muestrasARQUITECT[7],
	},
	{
		id: 9,
		name: "DO&ARQUITECT Negro",
		image: muestrasARQUITECT[8],
	},
	{
		id: 10,
		name: "DO&ARQUITECT Rojo",
		image: muestrasARQUITECT[9],
	},
	{
		id: 11,
		name: "DO&ARQUITECT Turquesa",
		image: muestrasARQUITECT[10],
	},
	{
		id: 12,
		name: "DO&ARQUITECT Verde",
		image: muestrasARQUITECT[11],
	},

	// DO&BASALT (3 variantes)
	{
		id: 13,
		name: "DO&BASALT Beige",
		image: muestrasBASALT[0],
	},
	{
		id: 14,
		name: "DO&BASALT Graphite",
		image: muestrasBASALT[1],
	},
	{
		id: 15,
		name: "DO&BASALT Grey",
		image: muestrasBASALT[2],
	},

	// DO&CRETE (4 variantes)
	{
		id: 16,
		name: "DO&CRETE Blanco",
		image: muestrasCRETE[0],
	},
	{
		id: 17,
		name: "DO&CRETE Gris",
		image: muestrasCRETE[1],
	},
	{
		id: 18,
		name: "DO&CRETE Negro",
		image: muestrasCRETE[2],
	},
	{
		id: 19,
		name: "DO&CRETE Taupe",
		image: muestrasCRETE[3],
	},

	// DO&DOLM (4 variantes)
	{
		id: 20,
		name: "DO&DOLM Beige",
		image: muestrasDOLM[0],
	},
	{
		id: 21,
		name: "DO&DOLM Grafito",
		image: muestrasDOLM[1],
	},
	{
		id: 22,
		name: "DO&DOLM Gris",
		image: muestrasDOLM[2],
	},
	{
		id: 23,
		name: "DO&DOLM Nacar",
		image: muestrasDOLM[3],
	},

	// DO&MARBLE (4 variantes)
	{
		id: 24,
		name: "DO&MARBLE Calacatta",
		image: muestrasMARBLE[0],
	},
	{
		id: 25,
		name: "DO&MARBLE Crema",
		image: muestrasMARBLE[1],
	},
	{
		id: 26,
		name: "DO&MARBLE Grey",
		image: muestrasMARBLE[3],
	},
	{
		id: 27,
		name: "DO&MARBLE Lava",
		image: muestrasMARBLE[2],
	},

	// DO&PORTLAND (5 variantes)
	{
		id: 28,
		name: "DO&PORTLAND Blanco",
		image: muestrasPORTLAND[0],
	},
	{
		id: 29,
		name: "DO&PORTLAND Gris",
		image: muestrasPORTLAND[1],
	},
	{
		id: 30,
		name: "DO&PORTLAND Nacar",
		image: muestrasPORTLAND[2],
	},
	{
		id: 31,
		name: "DO&PORTLAND Negro",
		image: muestrasPORTLAND[3],
	},
	{
		id: 32,
		name: "DO&PORTLAND Taupe",
		image: muestrasPORTLAND[4],
	},

	// DO&QUARCITY (4 variantes)
	{
		id: 33,
		name: "DO&QUARCITY Blanco",
		image: muestrasQUARCITY[0],
	},
	{
		id: 34,
		name: "DO&QUARCITY Gris",
		image: muestrasQUARCITY[1],
	},
	{
		id: 35,
		name: "DO&QUARCITY Negro",
		image: muestrasQUARCITY[2],
	},
	{
		id: 36,
		name: "DO&QUARCITY Taupe",
		image: muestrasQUARCITY[3],
	},

	// DO&QUARTZ (4 variantes)
	{
		id: 37,
		name: "DO&QUARTZ Blanco",
		image: muestrasQUARTZ[0],
	},
	{
		id: 38,
		name: "DO&QUARTZ Gris",
		image: muestrasQUARTZ[1],
	},
	{
		id: 39,
		name: "DO&QUARTZ Negro",
		image: muestrasQUARTZ[2],
	},
	{
		id: 40,
		name: "DO&QUARTZ Taupe",
		image: muestrasQUARTZ[3],
	},

	// DO&SPACE (4 variantes)
	{
		id: 41,
		name: "DO&SPACE Blanco",
		image: muestrasSPACE[0],
	},
	{
		id: 42,
		name: "DO&SPACE Gris",
		image: muestrasSPACE[1],
	},
	{
		id: 43,
		name: "DO&SPACE Negro",
		image: muestrasSPACE[2],
	},
	{
		id: 44,
		name: "DO&SPACE Taupe",
		image: muestrasSPACE[3],
	},

	// DO&STONE (4 variantes)
	{
		id: 45,
		name: "DO&STONE Blanco",
		image: muestrasSTONE[0],
	},
	{
		id: 46,
		name: "DO&STONE Gris",
		image: muestrasSTONE[1],
	},
	{
		id: 47,
		name: "DO&STONE Negro",
		image: muestrasSTONE[2],
	},
	{
		id: 48,
		name: "DO&STONE Taupe",
		image: muestrasSTONE[3],
	},

	// DO&TERRAZO (4 variantes)
	{
		id: 49,
		name: "DO&TERRAZO Blanco",
		image: muestrasTERRAZO[0],
	},
	{
		id: 50,
		name: "DO&TERRAZO Gris",
		image: muestrasTERRAZO[1],
	},
	{
		id: 51,
		name: "DO&TERRAZO Negro",
		image: muestrasTERRAZO[2],
	},
	{
		id: 52,
		name: "DO&TERRAZO Taupe",
		image: muestrasTERRAZO[3],
	},

	// DO&TZMENT (4 variantes)
	{
		id: 53,
		name: "DO&TZMENT Blanco",
		image: muestrasTZMENT[0],
	},
	{
		id: 54,
		name: "DO&TZMENT Gris",
		image: muestrasTZMENT[1],
	},
	{
		id: 55,
		name: "DO&TZMENT Negro",
		image: muestrasTZMENT[2],
	},
	{
		id: 56,
		name: "DO&TZMENT Taupe",
		image: muestrasTZMENT[3],
	},

	// DO&WOOD (5 variantes)
	{
		id: 57,
		name: "DO&WOOD Abedul",
		image: muestrasWOOD[0],
	},
	{
		id: 58,
		name: "DO&WOOD Encina",
		image: muestrasWOOD[1],
	},
	{
		id: 59,
		name: "DO&WOOD Eucalipto",
		image: muestrasWOOD[2],
	},
	{
		id: 60,
		name: "DO&WOOD Manzano",
		image: muestrasWOOD[3],
	},
	{
		id: 61,
		name: "DO&WOOD Sauce",
		image: muestrasWOOD[4],
	},
].sort((a, b) => a.name.localeCompare(b.name));

export const seriesTline = [
	// Ardesia
	{
		id: 1,
		name: "Ard Bronce",
		image: configArdesia.muestras[0].imagen,
	},
	{
		id: 2,
		name: "Ard Earth",
		image: configArdesia.muestras[1].imagen,
	},
	{
		id: 3,
		name: "Ard Noir",
		image: configArdesia.muestras[2].imagen,
	},
	{
		id: 4,
		name: "Ard Opal",
		image: configArdesia.muestras[3].imagen,
	},
	{
		id: 5,
		name: "Ard Silver",
		image: configArdesia.muestras[4].imagen,
	},
	// Balmoral
	{
		id: 6,
		name: "Balm Dark Natural",
		image: configBalmoral.muestras[0].imagen,
	},
	{
		id: 7,
		name: "Balm Moon Natural",
		image: configBalmoral.muestras[1].imagen,
	},
	// Bellagio
	{
		id: 8,
		name: "Bella Natural",
		image: configBellagio.muestras[0].imagen,
	},
	// Brunswich
	{
		id: 9,
		name: "Brun Acero",
		image: configBrunswich.muestras[0].imagen,
	},
	{
		id: 10,
		name: "Brun Ceniza",
		image: configBrunswich.muestras[1].imagen,
	},

	// Byb
	{
		id: 11,
		name: "ByB Black Matt",
		image: configByb.muestras[0].imagen,
	},
	{
		id: 12,
		name: "ByB Blanco Natural",
		image: configByb.muestras[1].imagen,
	},

	// Capri
	{
		id: 13,
		name: "Cap Cream",
		image: configCapri.muestras[0].imagen,
	},
	{
		id: 14,
		name: "Cap Dark",
		image: configCapri.muestras[1].imagen,
	},
	{
		id: 15,
		name: "Cap Grey",
		image: configCapri.muestras[2].imagen,
	},
	// Core
	{
		id: 16,
		name: "Core Ambre",
		image: configCore.muestras[0].imagen,
	},
	{
		id: 17,
		name: "Core Argent",
		image: configCore.muestras[1].imagen,
	},
	{
		id: 18,
		name: "Core Concrete",
		image: configCore.muestras[2].imagen,
	},
	{
		id: 19,
		name: "Core Plumb",
		image: configCore.muestras[3].imagen,
	},
	{
		id: 20,
		name: "Core Snow",
		image: configCore.muestras[4].imagen,
	},
	{
		id: 21,
		name: "Core Tortora",
		image: configCore.muestras[5].imagen,
	},

	// Cromat
	{
		id: 22,
		name: "Cromat Gris",
		image: configCromat.muestras[0].imagen,
	},
	{
		id: 23,
		name: "Cromat Marengo",
		image: configCromat.muestras[1].imagen,
	},
	{
		id: 24,
		name: "Cromat Marfil",
		image: configCromat.muestras[2].imagen,
	},
	{
		id: 25,
		name: "Cromat Noce",
		image: configCromat.muestras[3].imagen,
	},
	{
		id: 26,
		name: "Cromat Perla",
		image: configCromat.muestras[4].imagen,
	},
	// Dome
	{
		id: 27,
		name: "Dome Anthracite",
		image: configDome.muestras[0].imagen,
	},
	{
		id: 28,
		name: "Dome Ash",
		image: configDome.muestras[1].imagen,
	},
	{
		id: 29,
		name: "Dome Bone",
		image: configDome.muestras[2].imagen,
	},
	{
		id: 30,
		name: "Dome Nut",
		image: configDome.muestras[3].imagen,
	},
	// Eternal
	{
		id: 31,
		name: "Eter Cream Natural",
		image: configEternal.muestras[0].imagen,
	},
	{
		id: 32,
		name: "Eter Dark Natural",
		image: configEternal.muestras[1].imagen,
	},
	{
		id: 33,
		name: "Eter Pearl Natural",
		image: configEternal.muestras[2].imagen,
	},
	{
		id: 34,
		name: "Eter Taupe Natural",
		image: configEternal.muestras[3].imagen,
	},
	// Gravel
	{
		id: 35,
		name: "Grav Black",
		image: configGravel.muestras[0].imagen,
	},
	{
		id: 36,
		name: "Grav Cream",
		image: configGravel.muestras[1].imagen,
	},
	{
		id: 37,
		name: "Grav Earth",
		image: configGravel.muestras[2].imagen,
	},
	{
		id: 38,
		name: "Grav Grey",
		image: configGravel.muestras[3].imagen,
	},
	{
		id: 39,
		name: "Grav Shadow",
		image: configGravel.muestras[4].imagen,
	},
	{
		id: 40,
		name: "Grav White",
		image: configGravel.muestras[5].imagen,
	},

	// Habitat
	{
		id: 41,
		name: "Habi Grey",
		image: configHabitat.muestras[0].imagen,
	},
	{
		id: 42,
		name: "Habi Taupe",
		image: configHabitat.muestras[1].imagen,
	},
	// Hannover
	{
		id: 43,
		name: "Hannover Han Black Natural",
		image: configHannover.muestras[0].imagen,
	},
	{
		id: 44,
		name: "Hannover Han Ivory Natural",
		image: configHannover.muestras[1].imagen,
	},
	// Invictus
	{
		id: 45,
		name: "Inv Natural",
		image: configInvictus.muestras[0].imagen,
	},
	// Kursaal
	{
		id: 46,
		name: "Kur Ashen",
		image: configKursaal.muestras[0].imagen,
	},
	{
		id: 47,
		name: "Kur Neutral",
		image: configKursaal.muestras[1].imagen,
	},
	{
		id: 48,
		name: "Kur Pure",
		image: configKursaal.muestras[2].imagen,
	},
	{
		id: 49,
		name: "Kur Raven",
		image: configKursaal.muestras[3].imagen,
	},
	{
		id: 50,
		name: "Kur Rust",
		image: configKursaal.muestras[4].imagen,
	},
	{
		id: 51,
		name: "Kur Slate",
		image: configKursaal.muestras[5].imagen,
	},
	// Nikea
	{
		id: 52,
		name: "Nik",
		image: configNikea.muestras[0].imagen,
	},
	// Stoneland
	{
		id: 53,
		name: "Stone Grey Rectificado",
		image: configStoneland.muestras[0].imagen,
	},
	{
		id: 54,
		name: "Stone Ivory",
		image: configStoneland.muestras[1].imagen,
	},
	{
		id: 55,
		name: "Stone Pearl",
		image: configStoneland.muestras[2].imagen,
	},
	// Storm
	{
		id: 56,
		name: "Stor Cloud",
		image: configStorm.muestras[0].imagen,
	},
	{
		id: 57,
		name: "Stor Cream",
		image: configStorm.muestras[1].imagen,
	},
	{
		id: 58,
		name: "Stor Earth",
		image: configStorm.muestras[2].imagen,
	},
	{
		id: 59,
		name: "Stor Grey",
		image: configStorm.muestras[3].imagen,
	},
	{
		id: 60,
		name: "Stor White",
		image: configStorm.muestras[4].imagen,
	},
	// Unik
	{
		id: 61,
		name: "Uni Ash Natural",
		image: configUnik.muestras[0].imagen,
	},
	{
		id: 62,
		name: "Uni Ivory Natural",
		image: configUnik.muestras[1].imagen,
	},
].sort((a, b) => a.name.localeCompare(b.name));

//series Clean
export const seriesInvisifixClean = [
	//BRERA
	{
		id: 1,
		name: "BRERA ANTRACITA",
		image: muestrasBRERA[0],
	},
	{
		id: 2,
		name: "BRERA ARENA",
		image: muestrasBRERA[1],
	},
	{
		id: 3,
		name: "BRERA BLANCO",
		image: muestrasBRERA[2],
	},
	{
		id: 4,
		name: "BRERA CEMENTO",
		image: muestrasBRERA[3],
	},
	{
		id: 5,
		name: "BRERA GRIS",
		image: muestrasBRERA[4],
	},
	{
		id: 6,
		name: "BRERA TAUPE",
		image: muestrasBRERA[5],
	},
	//DOMUS
	{
		id: 7,
		name: "DOMUS ANTRACITA",
		image: muestrasDOMUS[0],
	},
	{
		id: 8,
		name: "DOMUS ARENA",
		image: muestrasDOMUS[1],
	},
	{
		id: 9,
		name: "DOMUS BLANCO",
		image: muestrasDOMUS[2],
	},
	{
		id: 10,
		name: "DOMUS GRIS",
		image: muestrasDOMUS[3],
	},
	{
		id: 11,
		name: "DOMUS PLOMO",
		image: muestrasDOMUS[4],
	},
	{
		id: 12,
		name: "DOMUS TAUPE",
		image: muestrasDOMUS[5],
	},
	//LUCENA
	{
		id: 13,
		name: "LUCENA ARENA",
		image: muestrasLUCENA[0],
	},
	{
		id: 14,
		name: "LUCENA BLANCO",
		image: muestrasLUCENA[1],
	},
	{
		id: 15,
		name: "LUCENA NIEVE",
		image: muestrasLUCENA[2],
	},
	{
		id: 16,
		name: "LUCENA PERLA",
		image: muestrasLUCENA[3],
	},
	//MELBOURNE
	{
		id: 17,
		name: "MELBOURNE ANTRACITA",
		image: muestrasMELBOURNE[0],
	},
	{
		id: 18,
		name: "MELBOURNE BLANCO",
		image: muestrasMELBOURNE[1],
	},
	{
		id: 19,
		name: "MELBOURNE GRIS",
		image: muestrasMELBOURNE[2],
	},
	{
		id: 20,
		name: "MELBOURNE MARFIL",
		image: muestrasMELBOURNE[3],
	},
	{
		id: 21,
		name: "MELBOURNE TAUPE",
		image: muestrasMELBOURNE[4],
	},
	//VALONA
	{
		id: 22,
		name: "VALONIA ANTRACITA",
		image: muestrasVALONA[0],
	},
	{
		id: 23,
		name: "VALONIA AZUL",
		image: muestrasVALONA[1],
	},
	{
		id: 24,
		name: "VALONIA BLANCO",
		image: muestrasVALONA[2],
	},
	{
		id: 25,
		name: "VALONIA GRIS",
		image: muestrasVALONA[3],
	},
	{
		id: 26,
		name: "VALONIA TAUPE",
		image: muestrasVALONA[4],
	},
];
