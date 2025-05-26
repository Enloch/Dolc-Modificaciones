import create from "zustand";

export const useConfigStore = create((set) => ({
  selectedSection: null,
  setSelectedSection: (section) => set({ selectedSection: section }),
  cmValue: "0cm",
  setCMValue: (value) => set({ cmValue: value }),
}));
