import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const PlantCard = ({
  image,
  title,
  description,
  details,
  luz = "",
  mascotas = true,
  clima = "",
  tamanio = "",
  riego,
}) => {
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
      className={` ${
        isExpanded ? "h-45" : "h-37"
      } w-[29%]  md:h-80 bg-white/30 !backdrop-blur-md border border-white/30 rounded-lg shadow-md  relative overflow-visible !p-2 !mb-12`}
    >
      <div
        className={` w-[85%] h-[50%] absolute -top-10 left-1/2 transform -translate-x-1/2 z-10`}
      >
        <img src={image} alt={title} className="w-full rounded-lg h-[50%]" />
      </div>

      {/* <h2 className="text-lg font-bold text-center !mt-16 font-primary">
        {title}
      </h2> */}
      <h2
        className={`text-center !mt-16 font-primary !mb-[6px] !font-semibold ${
          title.length > 11 ? "!text-xs" : "!text-xs"
        }`}
      >
        <p className={`${isExpanded ? "text-[8px]" : "text-xs"}`}>{title}</p>
      </h2>
      <div className="w-full flex items-center justify-center">
        <p
          className={`${
            isExpanded ? "text-[0px]" : "text-xs"
          } text-center  font-primary`}
        >
          {Array.isArray(description) ? description[0] : description}
        </p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.9 }}
            className="mt-4 text-black/70 !text-xs !z-30"
          >
            <div className="flex flex-col">
              <div className="flex justify-start items-center">
                <img
                  className="w-[6px] h-[6px] !ml-[2px] !mr-[7px] !mb-[5px]"
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1753413612/treeicon2_k81tyl.png"
                  alt=""
                />
                <p
                  className={`${
                    isExpanded ? "text-[6px]" : "text-xs"
                  } font-thin `}
                >
                  {Array.isArray(tamanio) ? tamanio.join(", ") : tamanio}
                </p>
              </div>
              <div className="flex justify-start items-center">
                <img
                  className="w-[6px] h-[6px] !ml-[2px] !mr-[7px] !mb-[5px]"
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1753413724/rainy_wv0xch.png"
                  alt=""
                />
                <p
                  className={`${
                    isExpanded ? "text-[6px]" : "text-xs"
                  } font-thin `}
                >
                  {Array.isArray(riego) ? riego.join(", ") : riego}
                </p>
              </div>
              <div className="flex justify-start items-center">
                <img
                  className="w-[6px] h-[6px] !ml-[2px] !mr-[7px] !mb-[5px]"
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1753409383/tamanio_vgkyn1.png"
                  alt=""
                />
                <p
                  className={`${
                    isExpanded ? "text-[6px]" : "text-xs"
                  } font-thin `}
                >
                  {Array.isArray(description)
                    ? description.join(", ")
                    : description}
                </p>
              </div>
              <div className="flex justify-start items-center h-fit">
                <img
                  className="w-[10px] h-[10px] !mr-[5px] !mb-[5px]"
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1753409351/cloud_pbzhay.png"
                  alt=""
                />
                {console.log(luz)}
                <div className="flex w-[100%] h-[100%]">
                  <p
                    className={`${
                      isExpanded ? "text-[6px]" : "text-xs"
                    } font-thin `}
                  >
                    {Array.isArray(clima) ? clima.join(", ") : clima}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center">
                <img
                  className="w-[10px] h-[10px] !mr-[5px] !mb-[5px]"
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1753409646/sunv2_twh2ah.png"
                  alt=""
                />
                <p
                  className={`${
                    isExpanded ? "text-[6px]" : "text-xs"
                  } font-thin `}
                >
                  {Array.isArray(luz) ? luz.join(", ") : luz}
                </p>
              </div>
              <div className="flex justify-start items-center">
                <img
                  className="w-[10px] h-[10px] !mr-[5px] !mb-[5px]"
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752457522/ufo_a887re.png"
                  alt=""
                />
                <p
                  className={`${
                    isExpanded ? "text-[6px]" : "text-xs"
                  } font-thin `}
                >
                  {mascotas ? "Amigable" : "Toxica"}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PlantCard;
