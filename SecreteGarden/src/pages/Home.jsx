import React from "react";

import MenuBar from "../componets/menuBar";
import EmergentImage from "../componets/EmegentImage";
import AnimatedText from "../componets/AnimatedText";
import AllButton from "../componets/AllButton";
import VerticalImageComparison from "../componets/VerticalComparer";
import AnimatedTextV2 from "../componets/AnimatedTextV2";
import ContactInfo from "../componets/Contact";
import PlantCard from "../componets/PlantCard";

import { usePlantHook } from "./plantsHook";

//   return (
//     <div className="w-full h-screen bg-primary">
//       <div className="w-full h-screen">
//         <div className="w-full h-19 flex items-center justify-center fixed">
//           <div className="w-[95%] h-10 bg-secondary rounded-2xl flex items-center justify-between !z-50 ">
//             <div className="w-8 h-8 bg-white rounded-full !ml-4 flex items-center justify-center">
//               <img
//                 src="/img/sakIcon2.png"
//                 alt=""
//                 className="w-8 h-8 object-contain"
//               />
//             </div>
//             <div>
//               <p className="text-white"> Jardin Secreto </p>
//             </div>
//             <div className="w-[40px] h-[40px]  !mr-4 flex items-center justify-center">
//               <button aria-label="Menú">
//                 <svg
//                   className="w-8 h-8 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="relative w-full h-2/3 flex items-center justify-center">
//           {/* Imagen */}
//           <img
//             src="/img/sakmain2.png"
//             alt=""
//             className="w-[90%] object-contain"
//           />

//           {/* Texto sobre la imagen */}
//           <p className="absolute bottom-10  text-center text-lg font-semibold">
//             CULTIVA BELLEZA. REGALA PLANTAS
//           </p>
//         </div>
//         <div className="w-full h-fit flex items-center justify-center !mb-6">
//           <p>CULTIVA BELLEZA. REGALA PLANTAS</p>
//         </div>
//         <div className="w-10 h-[1000px] bg-gray-400"></div>
//       </div>
//     </div>
//   );
// };

// export default Home;
const Home = () => {
  const { randomPlants } = usePlantHook();
  return (
    <div className="w-full h-fit bg-primary overflow-hidden">
      <MenuBar />
      <div className="pt-[76px] w-full h-full">
        <EmergentImage />
        <AnimatedText
          title={"CULTIVA BELLEZA. REGALA PLANTAS"}
          body={
            "Transforma cualquier rincón con plantas que armonizan tus espacios con belleza natural"
          }
        />
        <div>
          <div className="flex flex-wrap justify-center gap-4 !mt-16">
            {randomPlants.map((item, idx) => (
              <PlantCard
                key={idx}
                image={item.imageUrl}
                title={item.nameSpanish}
                description={item.tipo}
                details={"detalles"}
                tamanio={item.tamanio}
                clima={item.clima}
                luz={item.luzRequerida}
                mascotas={item.mascotas}
                riego={item.riego}
              />
            ))}

            {/* ...otras tarjetas iguales... */}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <AllButton />
        </div>

        <AnimatedTextV2
          title={"Transforma tus espacios"}
          body={
            "Descubre cómo un toque de naturaleza puede cambiar por completo la energía de tu hogar o negocio. Compara el antes y después y vive la diferencia que crean las plantas en la decoración."
          }
        />
        <div className="w-full flex items-center justify-center !rounded-lg !mt-14 ">
          <VerticalImageComparison
            before={
              "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752420139/PASTO_k4qw4l.jpg"
            }
            after={
              "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752420258/despues_hbeolh.jpg"
            }
            altBefore={"Antes"}
            altAfter={"Despues"}
          />
        </div>
        <AnimatedTextV2
          title={"!Naturaleza en tu hogar elegancia en cada hoja!"}
          body={
            "Convierte cada rincón en un espacio lleno de vida. Nuestras plantas son más que decoración: son un detalle de serenidad y estilo natural"
          }
        />
        <div className="w-full flex items-center justify-center !rounded-lg !mt-14 ">
          <VerticalImageComparison
            before={
              "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752448257/before1_xf2rqi.png"
            }
            after={
              "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752448305/vert2_hufqcn.jpg"
            }
            altBefore={"Antes"}
            altAfter={"Despues"}
          />
        </div>
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

        <AnimatedTextV2
          title={"Contacto"}
          body={
            "¿Tienes dudas o buscas asesoría personalizada? Escríbenos. Estamos aquí para ayudarte a encontrar las plantas perfectas para tu espacio."
          }
        />

        <ContactInfo />

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

export default Home;
