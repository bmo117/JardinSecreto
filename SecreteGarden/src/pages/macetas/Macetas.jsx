// import React from "react";
import MenuBar from "../../componets/menuBar";

import AnimatedText from "../../componets/AnimatedText";
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

const categorias = [
  {
    id: "arreglos",
    titulo: "Arreglos",
    color: "bg-blue-400",
    subcards: [
      { id: 1, titulo: "Arreglo 1", color: "bg-purple-400" },
      { id: 2, titulo: "Arreglo 2", color: "bg-indigo-400" },
    ],
    imagen:
      "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755065687/arreglo1_v00mlp.jpg",
  },
  {
    id: "agroquimicos",
    titulo: "Fertilizantes",
    color: "bg-green-400",
    subcards: [
      { id: 1, titulo: "Producto 1", color: "bg-lime-400" },
      { id: 2, titulo: "Producto 2", color: "bg-teal-400" },
      { id: 3, titulo: "Producto 3", color: "bg-emerald-400" },
    ],
    imagen:
      "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755235060/otros1_1_akfqdo.jpg",
  },
  {
    id: "macetas",
    titulo: "Macetas",
    color: "bg-orange-400",
    subcards: [
      { id: 1, titulo: "Maceta 1", color: "bg-red-400" },
      { id: 2, titulo: "Maceta 2", color: "bg-pink-400" },
      { id: 3, titulo: "Maceta 3", color: "bg-yellow-400" },
    ],
    imagen:
      "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755235409/maseta33_1_j6g39h.jpg",
  },
];

const Macetas = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [subIndex, setSubIndex] = useState(0);

  const handleDragEnd = (_, info) => {
    if (!categoriaSeleccionada) return;
    const subcards = categoriaSeleccionada.subcards;
    if (info.offset.x < -50 && subIndex < subcards.length - 1) {
      setSubIndex(subIndex + 1);
    } else if (info.offset.x > 50 && subIndex > 0) {
      setSubIndex(subIndex - 1);
    }
  };

  return (
    <div className="w-full h-fit !min-h-screen bg-primary overflow-hidden flex flex-col items-center justify-center p-4">
      <MenuBar />
      <div className={`  ${categoriaSeleccionada ? "" : "!mt-[12%]"}`}>
        {!categoriaSeleccionada && (
          <AnimatedText
            title={"Decoracion"}
            body={
              "Diseño minimalista y natural en cada detalle. Nuestras macetas y arreglos aportan elegancia y frescura a cualquier ambiente."
            }
          />
        )}
        <br />
      </div>
      {/* Menú de categorías */}
      <div className={`w-full h-fit flex justify-center`}>
        <div
          className={` ${
            categoriaSeleccionada ? "hidden" : ""
          } w-[90%] !p-5 !bg-white/35 !backdrop-blur-md !border !border-white/30 rounded-xl !h-fit`}
        >
          {!categoriaSeleccionada && (
            <div className="grid grid-cols-1 gap-4 w-full max-w-sm ">
              {categorias.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    setCategoriaSeleccionada(cat);
                    setSubIndex(0);
                  }}
                  className={`relative w-full h-50 rounded-xl shadow-lg cursor-pointer overflow-hidden  !shadow-[0_10px_60px_-10px_rgba(0,0,0,0.5)] `}
                >
                  {/* Imagen de fondo */}
                  <img
                    src={cat.imagen}
                    alt={cat.titulo}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay degradado en la parte inferior */}
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>

                  {/* Título sobre el degradado */}
                  <div className="absolute bottom-3 left-0 w-full text-center text-white text-2xl font-bold">
                    {cat.titulo}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Vista de subcards apiladas */}
      {categoriaSeleccionada && (
        <div className="relative w-64 h-96 flex items-center justify-center">
          <AnimatePresence>
            {categoriaSeleccionada.subcards.slice(subIndex).map((card, i) => (
              <motion.div
                key={card.id}
                className={`absolute top-0 left-0 w-full h-full rounded-xl shadow-lg ${card.color} flex items-center justify-center text-white text-2xl font-bold`}
                style={{
                  transform: `scale(${1 - i * 0.05}) translateY(${i * 10}px)`,
                  zIndex: categoriaSeleccionada.subcards.length - i,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
              >
                {card.titulo}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Botón para volver al menú */}
          <button
            className="absolute bottom-[-60px] px-4 py-2 bg-white text-black rounded-lg shadow"
            onClick={() => setCategoriaSeleccionada(null)}
          >
            Volver
          </button>
        </div>
      )}

      <br />

      <div className="w-full h-50 bg-secondary flex items-center !px-6">
        {/* Izquierda: datos de contacto y ubicación */}
        <div className="flex items-center">
          <div className="w-1/2  font-primary space-y-1 text-sm">
            <p>Contacto: 729 138 3936</p>
            <p>
              Ubicación: Carretera, Al Centro Ceremonial Otomí N°2, Temoaya,
              Méx.
            </p>
          </div>

          {/* Derecha: perrito, nombre y texto de derechos */}
          <div className="w-1/2 flex flex-col items-center justify-center  font-primary  ">
            <img
              src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752457522/ufo_a887re.png"
              alt="Perrito Rex"
              className="w-16 h-16 mb-1"
            />
            <p className="text-lg font-semibold">Rex</p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center font-primary bg-secondary   !pb-16">
        <p className="text-sm mt-2">
          © BMO Industries. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Macetas;
