import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const PlantCard = ({ image, title, description, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  // Cierra al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isExpanded &&
        cardRef.current &&
        !cardRef.current.contains(event.target)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isExpanded]);

  return (
    <motion.div
      ref={cardRef}
      onClick={() => setIsExpanded(!isExpanded)}
      initial={false}
      animate={{
        scale: isExpanded ? 2.05 : 1,
        backgroundColor: isExpanded ? "#ffffffcc" : "#ffffff66",
        x: isExpanded ? "-50%" : "0%",
        y: isExpanded ? "-50%" : "0%",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      style={{
        zIndex: isExpanded ? 20 : 1,
        position: isExpanded ? "fixed" : "relative",
        top: isExpanded ? "50%" : "auto",
        left: isExpanded ? "50%" : "auto",
      }}
      className="w-[29%] h-35 md:h-80 bg-white/30 !backdrop-blur-md border border-white/30 rounded-lg shadow-md  relative overflow-visible !p-2 !mb-12"
    >
      <div className="w-[85%] h-[85%] absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src={image}
          alt={title}
          className="w-full rounded-lg !object-cover"
        />
      </div>

      <h2 className="text-lg font-bold text-center !mt-16 font-primary">
        {title}
      </h2>
      <div className="w-full flex items-center justify-center">
        <p className="ttext-center text-sm font-primary">{description}</p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.9 }}
            className="mt-4 text-white/70 text-sm !z-30 backdrop-blur-md"
          >
            {details}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PlantCard;
