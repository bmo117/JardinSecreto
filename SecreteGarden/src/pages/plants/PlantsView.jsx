import React from "react";
import MenuBar from "../../componets/menuBar";
import AnimatedFilter from "../../componets/AnimateFilter";

function PlantsView() {
  return (
    <div className="w-full h-fit bg-primary overflow-hidden">
      <MenuBar />
      <div className="!pt-[76px] w-full !h-full font-primary">
        <div className="w-full h-fit flex items-center justify-center">
          <div className="w-[80%] h-6 bg-white !rounded-lg !mb-16 flex items-center justify-center !p-1">
            <div className="w-[90%] ">
              <input
                className="w-[100%] !pl-2 border-0 outline-none"
                type="text"
                placeholder="Buscar..."
              />
            </div>
            <div className="w-[10%] flex justify-evenly !pt-1 !pl-1">
              <img
                className="w-4 h-4 !object-contain"
                src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1752585201/searchicon_iagyzy.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <div className="w-full flex items-center justify-center">
          <div className="!pl-3 !pr-3 !pt-1 !pb-1 bg-secondary !rounded-lg  flex items-center gap-2">
            Filtros
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-transform duration-300 rotate-90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div> */}

        <AnimatedFilter />
      </div>
    </div>
  );
}

export default PlantsView;
