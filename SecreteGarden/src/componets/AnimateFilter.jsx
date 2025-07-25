import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterOptionBtn from "./FilterOPtionBtn";

const filtros = {
  Tipo: [
    "Interior",
    "Exterior",
    "Suculentas",
    "Cactus",
    "Flores",
    "Arbustos",
    "Árboles pequeños",
    "Árboles grandes",
    "Árboles medianos",
  ],
  Luz: [
    "Sol directo",
    "Sombra parcial",
    "Interior con poca luz",
    "Interior con luz brillante indirecta",
  ],
  Tamaño: ["Pequeña", "Mediana", "Grande"],
  Riego: [
    "Bajo mantenimiento (poca agua)",
    "Moderado",
    "Requiere riego frecuente",
  ],
  Clima: ["Resistente al frío", "Resistente al calor", "Clima templado"],
  Mascotas: ["Pet friendly", "Tóxica para mascotas"],
};

const AnimatedFilter = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-start !mb-10 font-primary">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="!pl-3 !pr-3 !pt-1 !pb-1 !bg-secondary !rounded-lg flex items-center gap-2 text-white !mb-6 outline-none !mr-[70%]"
      >
        Filtros
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 transition-transform duration-300 ${
            showFilters ? "rotate-180" : "rotate-90"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0, originY: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              duration: 0.5,
            }}
            className="w-[100%] mt-4 !bg-secondary backdrop-blur-md !border !border-white/40 !p-4 shadow-lg space-y-6"
          >
            {Object.entries(filtros).map(([categoria, opciones], index) => (
              <div key={index} className={`w-full !pt-2`}>
                <div className="w-[100%] flex items-center justify-start !p-2 !mt-2">
                  <p className="w-[100%] text-md !mb-2 !font-primary text-white">
                    {categoria}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {opciones.map((opcion, idx) => (
                    <FilterOptionBtn
                      key={idx}
                      opcion={opcion}
                      categoria={categoria}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedFilter;
