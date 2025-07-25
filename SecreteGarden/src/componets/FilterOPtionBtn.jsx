import useFilterStore from "../stores/filters.store";

const FilterOptionBtn = ({ opcion, categoria }) => {
  const { filtrosSeleccionados, toggleFiltro } = useFilterStore();

  const isActive = filtrosSeleccionados[categoria]?.includes(
    categoria === "Mascotas"
      ? opcion === "Pet friendly"
        ? true
        : false
      : opcion
  );

  return (
    <button
      onClick={() => toggleFiltro(categoria, opcion)}
      className={`
        ${isActive ? "!bg-primary" : "bg-secondary"}
        text-white !text-xs !py-1 !px-3 !rounded-full transition-all backdrop-blur-sm !border !border-white/40
      `}
    >
      {opcion}
    </button>
  );
};

export default FilterOptionBtn;
