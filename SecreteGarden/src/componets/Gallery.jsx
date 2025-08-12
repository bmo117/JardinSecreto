import React from "react";

const images = [
  {
    src: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752420258/despues_hbeolh.jpg",
    tall: true,
  },
  {
    src: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754969741/WhatsApp_Image_2025-08-10_at_17.54.56_nhv5ti.jpg",
    tall: false,
  },
  {
    src: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1752448305/vert2_hufqcn.jpg",
    tall: true,
  },
  {
    src: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754970331/WhatsApp_Image_2025-08-10_at_17.54.55_wg7ddx.jpg",
    tall: false,
  },
  {
    src: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754970252/WhatsApp_Image_2025-08-10_at_17.54.56_1_ailhl8.jpg",
    tall: false,
  },
  {
    src: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754972652/WhatsApp_Image_2025-08-10_at_17.54.56_3_k123aq.jpg",
    tall: false,
  },
];

export default function Gallery() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-0 sm:grid-cols-3">
        {images.map(({ src, tall }, idx) => (
          <div
            key={idx}
            className={`overflow-hidden  !border-1 !border-white shadow-md transition-transform duration-300 hover:scale-105 
              ${tall ? "row-span-2" : "row-auto"}
            `}
          >
            <img
              src={src}
              alt={`Imagen ${idx + 1}`}
              className={`w-full object-cover h-full  ${
                tall ? "!h-[250px]" : "h-[150px]"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
