import React from "react";
import MenuBar from "../../componets/menuBar";
import AnimatedFilter from "../../componets/AnimateFilter";
import { usePlantHook } from "../plantsHook";
import PlantCard from "../../componets/PlantCard";

function PlantsView() {
  const { filteredPlants } = usePlantHook();

  return (
    <div className="w-full h-fit bg-primary overflow-hidden">
      <MenuBar />
      <div className="!pt-[76px] w-full !h-full font-primary">
        <div className="w-full h-fit flex items-center justify-center">
          <div className="w-[80%] h-6 bg-white !rounded-lg !mb-16 flex items-center justify-center !p-2">
            <div className="w-[90%] ">
              <input
                className="w-[100%] !pl-2 border-0 outline-none"
                type="text"
                placeholder="Buscar..."
              />
            </div>
            <div className="w-[10%] flex justify-evenly !pt-1 !pl-4">
              <img
                className="w-4 h-4 !object-contain"
                src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752585201/searchicon_iagyzy.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <AnimatedFilter />

        <div className="flex flex-wrap justify-center gap-4 !mt-16">
          {filteredPlants.map((item, idx) => (
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
        </div>
      </div>
    </div>
  );
}

export default PlantsView;
