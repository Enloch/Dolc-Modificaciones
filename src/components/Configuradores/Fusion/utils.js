// Utility functions for the Fusion configurator
import * as THREE from "three";

/**
 * Randomly selects a material based on the provided percentages
 * @param {Array} materials - Array of material objects with id and percentage
 * @returns {string} - The selected material id
 */
export function selectMaterialByPercentage(materials) {
  // Normalize percentages to ensure they sum to 100
  const total = materials.reduce((sum, mat) => sum + mat.percentage, 0);
  
  // If total is 0, return the first material as fallback
  if (total === 0) return materials[0]?.id || null;
  
  // Generate a random number between 0 and total
  const random = Math.random() * total;
  
  // Find which material range the random number falls into
  let cumulative = 0;
  for (const material of materials) {
    cumulative += material.percentage;
    if (random <= cumulative) {
      return material.id;
    }
  }
  
  // Fallback (should not reach here if percentages sum to 100)
  return materials[materials.length - 1]?.id || null;
}

/**
 * Gets a random material based on the current percentage settings
 * @param {Object} configStore - The configuration store with material selections
 * @returns {string} - The selected material id
 */
export function getRandomMaterial(configStore) {
  const materials = [
    { id: configStore.materialPorcelanico1, percentage: configStore.porcentajeMaterial1 },
    { id: configStore.materialPorcelanico2, percentage: configStore.porcentajeMaterial2 },
    { id: configStore.materialPorcelanico3, percentage: configStore.porcentajeMaterial3 }
  ];
  
  return selectMaterialByPercentage(materials);
}

/**
 * Preloads textures for all materials used in percentage-based selection
 * @param {Object} textureLoader - THREE.TextureLoader instance
 * @param {Object} configStore - The configuration store
 * @param {Function} getImagenesParaMaterial - Function to get image paths for a material
 * @returns {Promise<Object>} - Promise resolving to an object with preloaded textures
 */
export async function preloadPercentageTextures(textureLoader, configStore, getImagenesParaMaterial) {
  const materials = [
    configStore.materialPorcelanico1,
    configStore.materialPorcelanico2,
    configStore.materialPorcelanico3
  ];
  
  const texturePromises = [];
  const materialIds = [];
  
  materials.forEach(materialId => {
    const rutasImagenes = getImagenesParaMaterial(materialId);
    if (rutasImagenes && rutasImagenes.length > 0) {
      rutasImagenes.forEach((url, index) => {
        const promise = new Promise((resolve, reject) => {
          textureLoader.load(
            url,
            (texture) => {
              texture.flipY = false;
              // Ensure proper color space for sRGB textures
              if (texture.image) {
                texture.colorSpace = THREE.SRGBColorSpace;
                texture.needsUpdate = true;
              }
              resolve({ materialId, index, texture });
            },
            undefined,
            (error) => {
              console.error(`Error loading texture: ${url}`, error);
              reject(error);
            }
          );
        });
        texturePromises.push(promise);
        materialIds.push(materialId);
      });
    }
  });
  
  try {
    const results = await Promise.all(texturePromises);
    const texturesByMaterial = {};
    
    results.forEach(({ materialId, index, texture }) => {
      if (!texturesByMaterial[materialId]) {
        texturesByMaterial[materialId] = [];
      }
      texturesByMaterial[materialId][index] = texture;
    });
    
    return texturesByMaterial;
  } catch (error) {
    console.error("Error preloading textures:", error);
    return {};
  }
}
