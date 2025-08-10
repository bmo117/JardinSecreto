import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Header animado */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-19 w-full"
      >
        <div className="w-[95%] h-10 bg-secondary rounded-2xl flex items-center justify-between">
          <div className="w-8 h-8 bg-white rounded-full !ml-4 flex items-center justify-center">
            <img
              src="/img/sakIcon2.png"
              alt=""
              className="w-8 h-8 object-contain"
            />
          </div>
          <p className="text-white font-primary">Jardín Secreto</p>

          <div className="w-8 h-8 !mr-4 flex items-center justify-center">
            <motion.button
              onClick={toggle}
              aria-label="Menú"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isOpen ? "M6 6L18 18M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"
                  }
                  initial={false}
                  animate={{
                    d: isOpen
                      ? "M6 6L18 18M6 18L18 6"
                      : "M4 6h16M4 12h16M4 18h16",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Menú expansivo tipo círculo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-secondary z-40"
          >
            <div className="flex flex-col items-center justify-center h-full text-white text-2xl gap-6">
              <button
                onClick={toggle}
                className="absolute top-6 right-6 text-3xl"
              >
                ✕
              </button>
              <p>Inicio</p>
              <p>Plantas</p>
              <p>Macetas</p>
              <p>Contacto</p>
              <p>Jardin digital</p>
              <div className="w-[40%] rounded-bl-full">
                <img
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1754770903/ocote_ncuinj.png"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuBar;
