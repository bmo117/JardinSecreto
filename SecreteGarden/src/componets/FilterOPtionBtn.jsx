import { useState } from "react";

const FilterOptionBtn = ({ opcion }) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      onClick={() => setSelected(!selected)}
      className={`
        ${
          selected ? "!bg-primary" : "bg-secondary"
        } text-white !text-xs  !py-1 !px-3 !rounded-full transition-all backdrop-blur-sm !border !border-white/40
      `}
    >
      {opcion}
    </button>
  );
};

export default FilterOptionBtn;
