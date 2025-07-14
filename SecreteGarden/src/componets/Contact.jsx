// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

// const ContactInfo = () => {
//   const contactItems = [
//     {
//       icon: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752453450/phoneiconv2_qld2el.png",
//       text: "729 138 3936",
//       alt: "Teléfono",
//     },
//     {
//       icon: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752453450/phoneiconv2_qld2el.png",
//       text: "722 174 5249",
//       alt: "Ubicación",
//     },
//     {
//       icon: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752451796/mailicon_xalqii.png",
//       text: "contacto@jardinsecreto.com",
//       alt: "Correo",
//     },
//     {
//       icon: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752455095/location_qh7vsi.png",
//       text: "Carretera, Al Centro Ceremonial Otomí N°2, Barrio de Molino Arriba, Centro, 50874 Temoaya, Méx.",
//       alt: "Correo",
//     },
//   ];

//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//     triggerOnce: false, // Permite que se repita
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [inView, controls]);

//   const itemVariants = {
//     hidden: { x: -100, opacity: 0 },
//     visible: (i) => ({
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         delay: i * 0.2,
//       },
//     }),
//   };

//   return (
//     <div
//       ref={ref}
//       className="w-full h-2/3 flex items-center justify-center rounded-lg !mt-14 relative"
//     >
//       <div className="absolute -top-10 bg-white rounded-full shadow-lg z-10 !border-4 !border-secondary w-20 h-20 flex items-center justify-center overflow-hidden">
//         <img
//           src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752454297/usericon_dffi2a.png"
//           alt="Icono central"
//           className="w-16 h-16 object-contain"
//         />
//       </div>
//       <div className="w-[90%] rounded-lg bg-white/30 backdrop-blur-md !p-4 space-y-4 pt-12 relative !mt-8">
//         {contactItems.map((item, index) => (
//           <motion.div
//             key={index}
//             custom={index}
//             initial="hidden"
//             animate={controls}
//             variants={itemVariants}
//             className="flex items-center !space-x-6"
//           >
//             <img
//               src={item.icon}
//               alt={item.alt}
//               className="w-6 h-6 object-contain"
//             />
//             <p className="font-primary">{item.text}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ContactInfo;

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ContactInfo = () => {
  const contactItems = [
    {
      icon: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752453450/phoneiconv2_qld2el.png",
      title: "Teléfonos",
      text: "729 138 3936 / 722 174 5249",
    },
    {
      icon: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752451796/mailicon_xalqii.png",
      title: "Correo",
      text: "contacto@jardinsecreto.com",
    },
    {
      icon: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752455095/location_qh7vsi.png",
      title: "Ubicación",
      text: "Centro Ceremonial Otomí N°2, Temoaya, Méx.",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const itemVariants = {
    hidden: (i) => {
      const directions = [
        { x: -100, opacity: 0 }, // izquierda
        { y: 100, opacity: 0 }, // abajo
        { x: 100, opacity: 0 }, // derecha
      ];
      return directions[i % directions.length];
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="w-full flex items-center justify-center rounded-lg !mt-14 relative"
    >
      <div className="absolute -top-10 bg-white rounded-full shadow-lg z-10 !border-4 !border-secondary w-20 h-20 flex items-center justify-center overflow-hidden">
        <img
          src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752454297/usericon_dffi2a.png"
          alt="Icono central"
          className="w-16 h-16 object-contain"
        />
      </div>

      <div className="w-[90%] rounded-lg  backdrop-blur-md !p-6 pt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            className="flex flex-col items-center text-center bg-secondary/60 rounded-xl !p-4 shadow-md backdrop-blur-lg"
          >
            <img src={item.icon} alt={item.title} className="w-12 h-12 mb-2" />
            <p className="font-bold text-lg mb-1">{item.title}</p>
            <p className="font-primary text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
