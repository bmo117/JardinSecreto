import { create } from "zustand";

const useFilterStore = create((set) => ({
  filtrosSeleccionados: {},

  toggleFiltro: (categoria, opcion) =>
    set((state) => {
      const prev = state.filtrosSeleccionados[categoria] || [];

      let nuevoValor;
      if (categoria === "Mascotas2") {
        nuevoValor = opcion === "Pet friendly" ? [true] : [false];
      } else {
        nuevoValor = prev.includes(opcion)
          ? prev.filter((item) => item !== opcion)
          : [...prev, opcion];
      }

      return {
        filtrosSeleccionados: {
          ...state.filtrosSeleccionados,
          [categoria]: nuevoValor,
        },
      };
    }),

  resetFiltros: () =>
    set({
      filtrosSeleccionados: {},
    }),
}));

export default useFilterStore;
