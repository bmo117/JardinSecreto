import { motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-fit flex items-center justify-center font-semibold !mt-8 font-primary"
      >
        <p>CULTIVA BELLEZA. REGALA PLANTAS</p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="w-full h-fit text-center mt-2 mx-auto flex items-center justify-center mb-20"
      >
        <p className="w-[80%] font-primary">
          Transforma cualquier rincón con plantas que armonizan tus espacios con
          belleza natural
        </p>
      </motion.div>
    </>
  );
};

export default AnimatedText;
