import React from "react";
import MenuBar from "../../componets/menuBar";
import AnimatedText from "../../componets/AnimatedText";
import { useState } from "react";
import ContactInfo from "../../componets/Contact";
import AnimatedTextV2 from "../../componets/AnimatedTextV2";

const Contacto = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754969741/WhatsApp_Image_2025-08-10_at_17.54.56_nhv5ti.jpg",
    "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754970252/WhatsApp_Image_2025-08-10_at_17.54.56_1_ailhl8.jpg",
    "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754970331/WhatsApp_Image_2025-08-10_at_17.54.55_wg7ddx.jpg",
  ];
  return (
    <div className="w-full h-fit bg-primary overflow-hidden">
      <MenuBar />
      <br />
      <br />
      <div className="pt-[76px] w-full h-full">
        <AnimatedText
          title={"Conoce nuestras plantas ornamentales"}
          body={"¡Visítanos!"}
        />
        <br />
        <div className="flex flex-col  h-[500px] overflow-hidden  ">
          {images.map((src, index) => (
            <div
              key={index}
              className={`overflow-hidden transition-all duration-500 cursor-pointer !border-1 !border-white  shadow-lg
            ${activeIndex === index ? "flex-[3]" : "flex-[1]"}`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <AnimatedText
          title={"¡Queremos escucharte!"}
          body={
            "¿Tienes dudas o buscas asesoría personalizada? Escríbenos. Estamos aquí para ayudarte a encontrar las plantas perfectas para tu espacio."
          }
        />

        <ContactInfo />
        <AnimatedTextV2
          title={"Ubicacion"}
          body={
            "Te esperamos en nuestro vivero, un espacio donde podrás inspirarte y elegir las plantas perfectas para transformar tu hogar. Visítanos y descubre cómo darle vida y elegancia a tus espacios con naturaleza real."
          }
        />

        <div className="w-full flex items-center justify-center !rounded-lg !mt-4">
          <img
            className="w-[80%] !rounded-lg"
            src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752449772/Screenshot_2025-07-13_174507_vn6ibj.png"
            alt=""
          />
        </div>
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
    </div>
  );
};

export default Contacto;
