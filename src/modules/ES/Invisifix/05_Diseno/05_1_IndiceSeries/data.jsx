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
const ARQUITECTImports = import.meta.globEager(
  "../../../../../assets/images/Series/ARQUITECT/DESPIECE/**"
);
const BASALTImports = import.meta.globEager(
  "../../../../../assets/images/Series/BASALT/DESPIECE/**"
);
const CRETEImports = import.meta.globEager(
  "../../../../../assets/images/Series/CRETE/DESPIECE/**"
);
const DOLMImports = import.meta.globEager(
  "../../../../../assets/images/Series/DOLM/DESPIECE/**"
);
const MARBLEImports = import.meta.globEager(
  "../../../../../assets/images/Series/MARBLE/DESPIECE/**"
);
const PORTLANDImports = import.meta.globEager(
  "../../../../../assets/images/Series/PORTLAND/DESPIECE/**"
);
const QUARCITYImports = import.meta.globEager(
  "../../../../../assets/images/Series/QUARCITY/DESPIECE/**"
);
const QUARTZImports = import.meta.globEager(
  "../../../../../assets/images/Series/QUARTZ/DESPIECE/**"
);
const SPACEImports = import.meta.globEager(
  "../../../../../assets/images/Series/SPACE/DESPIECE/**"
);
const STONEImports = import.meta.globEager(
  "../../../../../assets/images/Series/STONE/DESPIECE/**"
);
const TERRAZOImports = import.meta.globEager(
  "../../../../../assets/images/Series/TERRAZO/DESPIECE/**"
);
const TZMENTImports = import.meta.globEager(
  "../../../../../assets/images/Series/TZMENT/DESPIECE/**"
);
const WOODImports = import.meta.globEager(
  "../../../../../assets/images/Series/WOOD/DESPIECE/**"
);

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

// export const seriesTline = [
//   // Ardesia
//   {
//     id: 1,
//     name: "Ard Bronce",
//     image: configArdesia.muestras[0].imagen,
//   },
//   {
//     id: 2,
//     name: "Ard Earth",
//     image: configArdesia.muestras[1].imagen,
//   },
//   {
//     id: 3,
//     name: "Ard Noir",
//     image: configArdesia.muestras[2].imagen,
//   },
//   {
//     id: 4,
//     name: "Ard Opal",
//     image: configArdesia.muestras[3].imagen,
//   },
//   {
//     id: 5,
//     name: "Ard Silver",
//     image: configArdesia.muestras[4].imagen,
//   },
//   // Balmoral
//   {
//     id: 6,
//     name: "Balm Dark Natural",
//     image: configBalmoral.muestras[0].imagen,
//   },
//   {
//     id: 7,
//     name: "Balm Moon Natural",
//     image: configBalmoral.muestras[1].imagen,
//   },
//   // Bellagio
//   {
//     id: 8,
//     name: "Bell Natural",
//     image: configBellagio.muestras[0].imagen,
//   },
//   // Brunswich
//   {
//     id: 25,
//     name: "Brun Acero",
//     image: configBrunswich.muestras[0].imagen,
//   },

//   // Byb
//   {
//     id: 28,
//     name: "Byb Blanco",
//     image: configByb.muestras[0].imagen,
//   },

//   // Capri
//   {
//     id: 31,
//     name: "Capri Natural",
//     image: configCapri.muestras[0].imagen,
//   },
//   // Core
//   {
//     id: 35,
//     name: "Core Blanco",
//     image: configCore.muestras[0].imagen,
//   },

//   // Cromat
//   {
//     id: 41,
//     name: "Cromat Antracita",
//     image: configCromat.muestras[0].imagen,
//   },
//   {
//     id: 42,
//     name: "Cromat Arena",
//     image: configCromat.muestras[1].imagen,
//   },
//   {
//     id: 43,
//     name: "Cromat Blanco",
//     image: configCromat.muestras[2].imagen,
//   },
//   {
//     id: 44,
//     name: "Cromat Gris",
//     image: configCromat.muestras[3].imagen,
//   },
//   {
//     id: 45,
//     name: "Cromat Negro",
//     image: configCromat.muestras[4].imagen,
//   },
//   // Dome
//   {
//     id: 46,
//     name: "Dome Antracita",
//     image: configDome.muestras[0].imagen,
//   },
//   {
//     id: 47,
//     name: "Dome Arena",
//     image: configDome.muestras[1].imagen,
//   },
//   {
//     id: 48,
//     name: "Dome Ceniza",
//     image: configDome.muestras[2].imagen,
//   },
//   {
//     id: 49,
//     name: "Dome Gris",
//     image: configDome.muestras[3].imagen,
//   },
//   // Eternal
//   {
//     id: 50,
//     name: "Eternal Blanco",
//     image: configEternal.muestras[0].imagen,
//   },
//   {
//     id: 51,
//     name: "Eternal Crema",
//     image: configEternal.muestras[1].imagen,
//   },
//   {
//     id: 52,
//     name: "Eternal Gris",
//     image: configEternal.muestras[2].imagen,
//   },
//   {
//     id: 53,
//     name: "Eternal Negro",
//     image: configEternal.muestras[3].imagen,
//   },
//   // Gravel
//   {
//     id: 54,
//     name: "Gravel Beige",
//     image: configGravel.muestras[0].imagen,
//   },
//   {
//     id: 55,
//     name: "Gravel Blanco",
//     image: configGravel.muestras[1].imagen,
//   },
//   {
//     id: 56,
//     name: "Gravel Gris",
//     image: configGravel.muestras[2].imagen,
//   },
//   {
//     id: 57,
//     name: "Gravel Natural",
//     image: configGravel.muestras[3].imagen,
//   },
//   {
//     id: 58,
//     name: "Gravel Negro",
//     image: configGravel.muestras[4].imagen,
//   },
//   // Habitat
//   {
//     id: 59,
//     name: "Habitat Anthracite",
//     image: configHabitat.muestras[0].imagen,
//   },
//   {
//     id: 60,
//     name: "Habitat Cool",
//     image: configHabitat.muestras[1].imagen,
//   },
//   {
//     id: 61,
//     name: "Habitat Warm",
//     image: configHabitat.muestras[2].imagen,
//   },
//   // Hannover
//   {
//     id: 62,
//     name: "Hannover Arena",
//     image: configHannover.muestras[0].imagen,
//   },
//   {
//     id: 63,
//     name: "Hannover Grafito",
//     image: configHannover.muestras[1].imagen,
//   },
//   {
//     id: 64,
//     name: "Hannover Pergamino",
//     image: configHannover.muestras[2].imagen,
//   },
//   // Invictus
//   {
//     id: 65,
//     name: "Invictus Blanco",
//     image: configInvictus.muestras[0].imagen,
//   },
//   {
//     id: 66,
//     name: "Invictus Gris",
//     image: configInvictus.muestras[1].imagen,
//   },
//   {
//     id: 67,
//     name: "Invictus Negro",
//     image: configInvictus.muestras[2].imagen,
//   },
//   // Kursaal
//   {
//     id: 68,
//     name: "Kursaal Antracita",
//     image: configKursaal.muestras[0].imagen,
//   },
//   {
//     id: 69,
//     name: "Kursaal Arena",
//     image: configKursaal.muestras[1].imagen,
//   },
//   {
//     id: 70,
//     name: "Kursaal Gris",
//     image: configKursaal.muestras[2].imagen,
//   },
//   {
//     id: 71,
//     name: "Kursaal Marfil",
//     image: configKursaal.muestras[3].imagen,
//   },
//   {
//     id: 72,
//     name: "Kursaal Negro",
//     image: configKursaal.muestras[4].imagen,
//   },
//   // Nikea
//   {
//     id: 73,
//     name: "Nikea Blanco",
//     image: configNikea.muestras[0].imagen,
//   },
//   {
//     id: 74,
//     name: "Nikea Marfil",
//     image: configNikea.muestras[1].imagen,
//   },
//   // Stoneland
//   {
//     id: 75,
//     name: "Stoneland Beige",
//     image: configStoneland.muestras[0].imagen,
//   },
//   {
//     id: 76,
//     name: "Stoneland Blanco",
//     image: configStoneland.muestras[1].imagen,
//   },
//   {
//     id: 77,
//     name: "Stoneland Gris",
//     image: configStoneland.muestras[2].imagen,
//   },
//   {
//     id: 78,
//     name: "Stoneland Negro",
//     image: configStoneland.muestras[3].imagen,
//   },
//   // Storm
//   {
//     id: 79,
//     name: "Storm Grafito",
//     image: configStorm.muestras[0].imagen,
//   },
//   {
//     id: 80,
//     name: "Storm Gris",
//     image: configStorm.muestras[1].imagen,
//   },
//   {
//     id: 81,
//     name: "Storm Hueso",
//     image: configStorm.muestras[2].imagen,
//   },
//   {
//     id: 82,
//     name: "Storm Negro",
//     image: configStorm.muestras[3].imagen,
//   },
//   // Unik
//   {
//     id: 83,
//     name: "Unik Antracita",
//     image: configUnik.muestras[0].imagen,
//   },
//   {
//     id: 84,
//     name: "Unik Beige",
//     image: configUnik.muestras[1].imagen,
//   },
//   {
//     id: 85,
//     name: "Unik Perla",
//     image: configUnik.muestras[2].imagen,
//   },
// ].sort((a, b) => a.name.localeCompare(b.name));
