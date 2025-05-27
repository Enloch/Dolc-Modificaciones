// src/components/Configuradores/TXT/texturas.js

export const TIPOS_MATERIAL = {
  CALACATTAVENA: "CALACATTAVENA",
  ESTATUARIO: "ESTATUARIO",
  PALADIO: "PALADIO",
  SAHARA: "SAHARA",
  // Puedes añadir más tipos de material aquí si es necesario
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
  [TIPOS_MATERIAL.ESTATUARIO]: {
    id: TIPOS_MATERIAL.ESTATUARIO,
    nombre: "Estatuario", // Nombre para mostrar en la UI
    imagenes: generarRutasImagenesMaterial(
      "/texturas/TXT/piezas/ESTATUARIO/", // basePath
      "ESTATUARIO", // nombreMaterial
      "60X120", // dimensiones
      18, // cantidad
      ".jpg" // extension
    ),
  },
  [TIPOS_MATERIAL.CALACATTAVENA]: {
    id: TIPOS_MATERIAL.CALACATTAVENA,
    nombre: "Calacatta Vena",
    imagenes: generarRutasImagenesMaterial(
      "/texturas/TXT/piezas/CALACATTAVENA/", // basePath
      "VENA", // nombreMaterial
      "", // dimensiones
      20, // cantidad
      ".jpg" // extension
    ),
  },
  [TIPOS_MATERIAL.PALADIO]: {
    id: TIPOS_MATERIAL.PALADIO,
    nombre: "Paladio",
    imagenes: generarRutasImagenesMaterial(
      "/texturas/TXT/piezas/PALADIO/", // basePath
      "PALADIO", // nombreMaterial
      "60X120", // dimensiones
      18, // cantidad
      ".jpg" // extension
    ),
  },
  [TIPOS_MATERIAL.SAHARA]: {
    id: TIPOS_MATERIAL.SAHARA,
    nombre: "Sahara",
    imagenes: generarRutasImagenesMaterial(
      "/texturas/TXT/piezas/SAHARA/", // basePath
      "SAHARA", // nombreMaterial
      "", // dimensiones
      20, // cantidad
      ".jpg" // extension
    ),
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
