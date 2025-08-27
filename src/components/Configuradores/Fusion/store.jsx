import { create } from "zustand";
import { TIPOS_MATERIAL } from "./texturas";

export const useConfigStore = create((set) => ({
  sistemaActivo: "TXT 13",
  setSistemaActivo: (sistema) => set({ sistemaActivo: sistema }),
  selectedSection: null,
  menuSeleccionActivo: false,
  setMenuSeleccionActivo: (menuSeleccionActivo) => set({ menuSeleccionActivo: menuSeleccionActivo }),
  setSelectedSection: (section) => set({ selectedSection: section }),
  Section1: 0,
  setSection1: (value) => set({ Section1: value }),
  Section2: 0,
  setSection2: (value) => set({ Section2: value }),
  Section3: 0,
  setSection3: (value) => set({ Section3: value }),
  Section4: 0,
  setSection4: (value) => set({ Section4: value }),
  Section5: 0,
  setSection5: (value) => set({ Section5: value }),
  Section6: 0,
  setSection6: (value) => set({ Section6: value }),
  
  // Percentage-based finish selection
  materialPorcelanico1: TIPOS_MATERIAL.ALLUREA,
  materialPorcelanico2: TIPOS_MATERIAL.BLANCBORG,
  materialPorcelanico3: TIPOS_MATERIAL.PALADIO,
  porcentajeMaterial1: 50,
  porcentajeMaterial2: 30,
  porcentajeMaterial3: 20,
  
  setMaterialPorcelanico1: (material) => set({ materialPorcelanico1: material }),
  setMaterialPorcelanico2: (material) => set({ materialPorcelanico2: material }),
  setMaterialPorcelanico3: (material) => set({ materialPorcelanico3: material }),
  setPorcentajeMaterial1: (porcentaje) => set({ porcentajeMaterial1: porcentaje }),
  setPorcentajeMaterial2: (porcentaje) => set({ porcentajeMaterial2: porcentaje }),
  setPorcentajeMaterial3: (porcentaje) => set({ porcentajeMaterial3: porcentaje }),

  // --- Add state for Perfil material selection ---
  materialPerfilSeleccionado: "ORO_MATE", // Default to an ID from CatalogoPerfiles
  setMaterialPerfilSeleccionado: (materialId) => set({ materialPerfilSeleccionado: materialId }),
}));
