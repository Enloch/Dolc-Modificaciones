import { create } from "zustand";

export const useConfigStore = create((set) => ({
  selectedSection: null,
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
}));
