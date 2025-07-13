import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AnimatedTextV2 = ({ title, body }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center justify-center mb-20 !mt-8"
    >
      <motion.p
        custom={0}
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className="text-2xl md:text-4xl font-semibold  text-center mt-8"
      >
        {title}
      </motion.p>

      <motion.p
        custom={1}
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className="w-[80%] text-justify font-primary !mt-4"
      >
        {body}
      </motion.p>
    </div>
  );
};

export default AnimatedTextV2;
