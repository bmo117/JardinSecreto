import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const AllButton = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Solo se ejecuta una vez
    threshold: 0.1, // 10% visible para disparar la animación
  });
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/plantas");
  };

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      onClick={goTo}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="!font-primary !bg-secondary !font-semibold !rounded-full text-lg shadow-lg hover:scale-105 transition-transform duration-300 !py-2 !px-3 flex items-center gap-2"
    >
      Ver Todo
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </motion.button>
  );
};

export default AllButton;
