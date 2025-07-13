import { motion } from "framer-motion";

const EmergentImage = () => {
  return (
    <div className="relative w-full flex items-center justify-center !pt-28">
      <motion.img
        src="/img/sakmain2.png"
        alt=""
        className="w-[90%] object-contain"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
};

export default EmergentImage;
