import React from "react";

import MenuBar from "../componets/menuBar";
import EmergentImage from "../componets/EmegentImage";
import AnimatedText from "../componets/AnimatedText";
import AllButton from "../componets/AllButton";

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
  return (
    <div className="w-full h-fit bg-primary">
      <MenuBar />
      <div className="pt-[76px] w-full h-full">
        <EmergentImage />
        <AnimatedText />
        <div>
          <div className="flex flex-wrap justify-center gap-4 !mt-16">
            <div className="w-[29%] h-35 md:h-80 bg-white/30 backdrop-blur-md border border-white/30 rounded-lg shadow-md  relative overflow-visible !p-2 !mb-12">
              <div className="w-[85%] h-[85%] absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                <img
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752355828/naranjo2_tyym3p.png"
                  alt=""
                  className="w-80 h-80 object-contain drop-shadow-xl"
                />
              </div>
              <h2 className="text-lg font-bold text-center !mt-16 font-primary">
                Naranjo
              </h2>
              <p className="text-center text-sm font-primary">Frutal</p>
            </div>
            <div className="w-[29%] h-35 md:h-80 bg-white/30 backdrop-blur-md border border-white/30 rounded-lg shadow-md  relative overflow-visible !p-2">
              <div className="w-[85%] h-[85%] absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                <img
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752355828/naranjo2_tyym3p.png"
                  alt=""
                  className="w-80 h-80 object-contain drop-shadow-xl"
                />
              </div>
              <h2 className="text-lg font-bold text-center !mt-16 font-primary">
                Naranjo
              </h2>
              <p className="text-center text-sm font-primary">Frutal</p>
            </div>
            <div className="w-[29%] h-35 md:h-80 bg-white/30 backdrop-blur-md border border-white/30 rounded-lg shadow-md  relative overflow-visible !p-2">
              <div className="w-[85%] h-[85%] absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                <img
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752355828/naranjo2_tyym3p.png"
                  alt=""
                  className="w-80 h-80 object-contain drop-shadow-xl"
                />
              </div>
              <h2 className="text-lg font-bold text-center !mt-16 font-primary">
                Naranjo
              </h2>
              <p className="text-center text-sm font-primary">Frutal</p>
            </div>
            <div className="w-[29%] h-35 md:h-80 bg-white/30 backdrop-blur-md border border-white/30 rounded-lg shadow-md  relative overflow-visible !p-2">
              <div className="w-[85%] h-[85%] absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                <img
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752355828/naranjo2_tyym3p.png"
                  alt=""
                  className="w-80 h-80 object-contain drop-shadow-xl"
                />
              </div>
              <h2 className="text-lg font-bold text-center !mt-16 font-primary">
                Naranjo
              </h2>
              <p className="text-center text-sm font-primary">Frutal</p>
            </div>
            <div className="w-[29%] h-35 md:h-80 bg-white/30 backdrop-blur-md border border-white/30 rounded-lg shadow-md  relative overflow-visible !p-2 !mb-12">
              <div className="w-[85%] h-[85%] absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                <img
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752355828/naranjo2_tyym3p.png"
                  alt=""
                  className="w-80 h-80 object-contain drop-shadow-xl"
                />
              </div>
              <h2 className="text-lg font-bold text-center !mt-16 font-primary">
                Naranjo
              </h2>
              <p className="text-center text-sm font-primary">Frutal</p>
            </div>
            <div className="w-[29%] h-35 md:h-80 bg-white/30 backdrop-blur-md border border-white/30 rounded-lg shadow-md  relative overflow-visible !p-2">
              <div className="w-[85%] h-[85%] absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                <img
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752355828/naranjo2_tyym3p.png"
                  alt=""
                  className="w-80 h-80 object-contain drop-shadow-xl"
                />
              </div>
              <h2 className="text-lg font-bold text-center !mt-16 font-primary">
                Naranjo
              </h2>
              <p className="text-center text-sm font-primary">Frutal</p>
            </div>
            <div className="w-[29%] h-35 md:h-80 bg-white/30 backdrop-blur-md border border-white/30 rounded-lg shadow-md  relative overflow-visible !p-2 !mb-12">
              <div className="w-[85%] h-[85%] absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                <img
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752355828/naranjo2_tyym3p.png"
                  alt=""
                  className="w-80 h-80 object-contain drop-shadow-xl"
                />
              </div>
              <h2 className="text-lg font-bold text-center !mt-16 font-primary">
                Naranjo
              </h2>
              <p className="text-center text-sm font-primary">Frutal</p>
            </div>
            <div className="w-[29%] h-35 md:h-80 bg-white/30 backdrop-blur-md border border-white/30 rounded-lg shadow-md  relative overflow-visible !p-2">
              <div className="w-[85%] h-[85%] absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                <img
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752355828/naranjo2_tyym3p.png"
                  alt=""
                  className="w-80 h-80 object-contain drop-shadow-xl"
                />
              </div>
              <h2 className="text-lg font-bold text-center !mt-16 font-primary">
                Naranjo
              </h2>
              <p className="text-center text-sm font-primary">Frutal</p>
            </div>
            <div className="w-[29%] h-35 md:h-80 bg-white/30 backdrop-blur-md border border-white/30 rounded-lg shadow-md  relative overflow-visible !p-2">
              <div className="w-[85%] h-[85%] absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                <img
                  src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752355828/naranjo2_tyym3p.png"
                  alt=""
                  className="w-80 h-80 object-contain drop-shadow-xl"
                />
              </div>
              <h2 className="text-lg font-bold text-center !mt-16 font-primary">
                Naranjo
              </h2>
              <p className="text-center text-sm font-primary">Frutal</p>
            </div>
            {/* ...otras tarjetas iguales... */}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <AllButton />
        </div>
        <div className="w-10 h-[1000px] bg-gray-400"></div>
      </div>
    </div>
  );
};

export default Home;
