import { create } from "zustand";
import { TIPOS_MATERIAL } from "./texturas";

export const useConfigStore = create((set) => ({
  sistemaActivo: "Terracota",
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

  // Balanced setter: adjust other two to keep total at 100
  setPorcentajesBalanceados: (targetIndex, newValue) =>
    set((state) => {
      const clamped = Math.max(0, Math.min(100, Math.round(newValue)));
      const original = [state.porcentajeMaterial1, state.porcentajeMaterial2, state.porcentajeMaterial3];
      const idx = Math.max(1, Math.min(3, targetIndex)) - 1; // 0..2
      const remaining = 100 - clamped;
      const otherIdxs = [0, 1, 2].filter((i) => i !== idx);
      const sumOthers = original[otherIdxs[0]] + original[otherIdxs[1]];
      let a = 0;
      let b = 0;
      if (sumOthers > 0) {
        const ratioA = original[otherIdxs[0]] / sumOthers;
        a = Math.round(remaining * ratioA);
        b = remaining - a; // ensure exact 100
      } else {
        a = Math.floor(remaining / 2);
        b = remaining - a;
      }
      const next = [...original];
      next[idx] = clamped;
      next[otherIdxs[0]] = a;
      next[otherIdxs[1]] = b;
      return {
        porcentajeMaterial1: next[0],
        porcentajeMaterial2: next[1],
        porcentajeMaterial3: next[2],
      };
    }),

  // --- Add state for Perfil material selection ---
  materialPerfilSeleccionado: "ORO_MATE", // Default to an ID from CatalogoPerfiles
  setMaterialPerfilSeleccionado: (materialId) => set({ materialPerfilSeleccionado: materialId }),
}));

