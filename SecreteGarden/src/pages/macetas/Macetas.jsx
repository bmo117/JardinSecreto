// import React from "react";
// import MenuBar from "../../componets/menuBar";
// const Macetas = () => {
//   return (
//     <div className="w-full h-fit bg-primary overflow-hidden">
//       <MenuBar />
//       <br />
//       <br />
//       <div className="pt-[76px] w-full h-full"></div>
//     </div>
//   );
// };

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    title: "Macetas",
    subcards: [
      { id: 1, text: "Maceta 1" },
      { id: 2, text: "Maceta 2" },
      { id: 3, text: "Maceta 3" },
    ],
  },
  {
    title: "Arreglos",
    subcards: [
      { id: 1, text: "Arreglo 1" },
      { id: 2, text: "Arreglo 2" },
      { id: 3, text: "Arreglo 3" },
    ],
  },
  {
    title: "Agroquímicos",
    subcards: [
      { id: 1, text: "Agro 1" },
      { id: 2, text: "Agro 2" },
      { id: 3, text: "Agro 3" },
    ],
  },
];

export default function Macetas() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (selectedCategory) {
      setCurrentIndex((prev) =>
        prev < selectedCategory.subcards.length - 1 ? prev + 1 : prev
      );
    }
  };

  const handlePrev = () => {
    if (selectedCategory) {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      {!selectedCategory ? (
        // Vista inicial con 3 cards
        <div className="grid grid-cols-1 gap-4 w-80">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
            >
              <h2 className="text-lg font-bold">{cat.title}</h2>
            </div>
          ))}
        </div>
      ) : (
        // Vista de subcards apiladas tipo baraja
        <div className="relative w-80 h-96">
          <AnimatePresence>
            {selectedCategory.subcards.map((card, index) => {
              // Determina el desplazamiento de cada tarjeta
              let offset = index - currentIndex;
              return (
                <motion.div
                  key={card.id}
                  className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center text-xl font-bold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: offset >= 0 ? 1 : 0,
                    scale: offset === 0 ? 1 : 0.9,
                    x: offset * 40, // separa las cartas hacia los lados
                    y: offset * 10, // da el efecto apilado
                    zIndex: -offset,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.text}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Botones de navegación */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
            <button
              onClick={handlePrev}
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >
              ▶
            </button>
          </div>

          {/* Botón para volver */}
          <button
            onClick={() => setSelectedCategory(null)}
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

// export default Macetas;
