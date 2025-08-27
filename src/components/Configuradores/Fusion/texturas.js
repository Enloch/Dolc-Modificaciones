// src/components/Configuradores/TXT/texturas.js

export const TIPOS_MATERIAL = {
  ALLUREA: "ALLUREA",
  ALLURELG: "ALLURELG",
  BERAICE: "BERAICE",
  BERENLG: "BERENLG",
  BLANCBORG: "BLANCBORG",
  BLANCSGOLD: "BLANCSGOLD",
  CALACATTAVENA: "CALACATTAVENA",
  EDRAL: "EDRAL",
  EMELG: "EMELG",
  ESTATUARIO: "ESTATUARIO",
  KENDOL: "KENDOL",
  NOONGREY: "NOONGREY",
  NOONSAND: "NOONSAND",
  PALADIO: "PALADIO",
  WEGAB: "WEGAB",
  // Puedes añadir más tipos de material aquí si es necesario
};

// Mapeo de sistemas Fusion a materiales disponibles
export const SISTEMAS_FUSION = {
  Terracota: [TIPOS_MATERIAL.ALLUREA, TIPOS_MATERIAL.PALADIO, TIPOS_MATERIAL.WEGAB],
  Color: [TIPOS_MATERIAL.BERAICE, TIPOS_MATERIAL.EDRAL, TIPOS_MATERIAL.NOONGREY],
  Petra: [TIPOS_MATERIAL.BERENLG, TIPOS_MATERIAL.CALACATTAVENA, TIPOS_MATERIAL.ESTATUARIO],
  Texture: [TIPOS_MATERIAL.ALLURELG, TIPOS_MATERIAL.NOONSAND, TIPOS_MATERIAL.KENDOL],
};

/**
 * Genera las rutas de las imágenes para un material específico,
 * siguiendo el patrón "NOMBREMATERIAL DIMENSIONES (i).extension".
 * @param {string} basePath - La ruta base de la carpeta del material. Ej: '/texturas/TXT/piezas/PALADIO/'
 * @param {string} nombreMaterial - El nombre base del material. Ej: 'PALADIO'
 * @param {string} dimensiones - Las dimensiones en el nombre del archivo. Ej: '60X120'
 * @param {number} cantidad - El número total de imágenes. Ej: 18
 * @param {string} extension - La extensión del archivo. Ej: '.jpg'
 * @returns {string[]} Un array con las rutas completas de las imágenes.
 */
const generarRutasImagenesMaterial = (basePath, nombreMaterial, dimensiones, cantidad, extension = ".jpg") => {
  const rutas = [];
  for (let i = 1; i <= cantidad; i++) {
    {
      dimensiones === ""
        ? rutas.push(`${basePath}${nombreMaterial} (${i})${extension}`)
        : rutas.push(`${basePath}${nombreMaterial} ${dimensiones} (${i})${extension}`);
    }
  }
  return rutas;
};

export const TEXTURAS_POR_MATERIAL = {
  [TIPOS_MATERIAL.ALLUREA]: {
    id: TIPOS_MATERIAL.ALLUREA,
    nombre: "Allure Anthracite",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/ALLUREA/", "ALLUREA", "", 20, ".jpg"),
  },
  [TIPOS_MATERIAL.ALLURELG]: {
    id: TIPOS_MATERIAL.ALLURELG,
    nombre: "Allure Light Grey",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/ALLURELG/", "ALLURELG", "", 20, ".jpg"),
  },
  [TIPOS_MATERIAL.BERAICE]: {
    id: TIPOS_MATERIAL.BERAICE,
    nombre: "Bera Ice",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/BERAICE/", "BERAICE", "", 20, ".jpg"),
  },
  [TIPOS_MATERIAL.BERENLG]: {
    id: TIPOS_MATERIAL.BERENLG,
    nombre: "Beren Light Grey",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/BERENLG/", "BERENLG", "", 20, ".jpg"),
  },
  [TIPOS_MATERIAL.BLANCBORG]: {
    id: TIPOS_MATERIAL.BLANCBORG,
    nombre: "Blanc Borghini",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/BLANCBORG/", "BLANCBORG", "", 20, ".jpg"),
  },
  [TIPOS_MATERIAL.BLANCSGOLD]: {
    id: TIPOS_MATERIAL.BLANCSGOLD,
    nombre: "Blanc Statuario Gold",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/BLANCSGOLD/", "BLANCSGOLD", "", 20, ".jpg"),
  },
  [TIPOS_MATERIAL.CALACATTAVENA]: {
    id: TIPOS_MATERIAL.CALACATTAVENA,
    nombre: "Calacatta Vena",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/CALACATTAVENA/", "VENA", "", 20, ".jpg"),
  },
  [TIPOS_MATERIAL.EDRAL]: {
    id: TIPOS_MATERIAL.EDRAL,
    nombre: "Edra Light",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/EDRAL/", "EDRAL", "", 20, ".jpg"),
  },
  [TIPOS_MATERIAL.EMELG]: {
    id: TIPOS_MATERIAL.EMELG,
    nombre: "Eme Light Grey",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/EMELG/", "EMELG", "", 20, ".jpg"),
  },
  [TIPOS_MATERIAL.ESTATUARIO]: {
    id: TIPOS_MATERIAL.ESTATUARIO,
    nombre: "Estatuario",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/ESTATUARIO/", "ESTATUARIO", "60X120", 18, ".jpg"),
  },
  [TIPOS_MATERIAL.KENDOL]: {
    id: TIPOS_MATERIAL.KENDOL,
    nombre: "Kendo Light Grey",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/KENDOL/", "KENDOL", "", 20, ".jpg"),
  },
  [TIPOS_MATERIAL.NOONGREY]: {
    id: TIPOS_MATERIAL.NOONGREY,
    nombre: "Noon Grey",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/NOONGREY/", "NOONGREY", "", 20, ".jpg"),
  },
  [TIPOS_MATERIAL.NOONSAND]: {
    id: TIPOS_MATERIAL.NOONSAND,
    nombre: "Noon Sand",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/NOONSAND/", "NOONSAND", "", 20, ".jpg"),
  },
  [TIPOS_MATERIAL.PALADIO]: {
    id: TIPOS_MATERIAL.PALADIO,
    nombre: "Paladio",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/PALADIO/", "PALADIO", "60X120", 18, ".jpg"),
  },
  [TIPOS_MATERIAL.WEGAB]: {
    id: TIPOS_MATERIAL.WEGAB,
    nombre: "Wega Black",
    imagenes: generarRutasImagenesMaterial("/texturas/TXT/piezas/WEGAB/", "WEGAB", "", 20, ".jpg"),
  },
};

/**
 * Obtiene la lista de rutas de imágenes para un tipo de material específico.
 * @param {string} tipoMaterial - El tipo de material (e.g., TIPOS_MATERIAL.ESTATUARIO).
 * @returns {string[]} Un array con las rutas de las imágenes del material.
 *                     Retorna un array vacío si el tipo de material no se encuentra.
 */
export function getImagenesParaMaterial(tipoMaterial) {
  const materialInfo = TEXTURAS_POR_MATERIAL[tipoMaterial];
  if (materialInfo && materialInfo.imagenes) {
    return materialInfo.imagenes;
  }
  console.warn(`No se encontraron imágenes para el material: ${tipoMaterial}`);
  return [];
}
