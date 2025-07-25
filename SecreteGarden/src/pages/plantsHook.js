import { useEffect, useMemo, useState } from "react";

import useFilterStore from "../stores/filters.store";

export const usePlantHook = () => {
  const allPlants = [
    {
      name: "Italian Cypress",
      nameSpanish: "Ciprés italiano",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1753411458/italiancipress_wlnhc3.png",
      desc: "",
      tipo: ["Árboles grandes", "Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Grande"],
      riego: ["Bajo mantenimiento (poca agua)"],
      clima: ["Clima templado", "Resistente al calor"],
      mascotas: true,
    },
    {
      name: "Lemon Cedar Spiral",
      nameSpanish: "Cedro limón en espiral",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1753411504/cedrolimon_my37wt.png",
      desc: "",
      tipo: ["Árboles grandes", "Exterior"],
      luzRequerida: ["Sol directo", "Sombra parcial"],
      tamanio: ["Mediana", "Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: true,
    },
    {
      name: "Sweetgum",
      nameSpanish: "Liquidambar",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1753411537/sweetgum_j9husk.png",
      desc: "",
      tipo: ["Árboles grandes", "Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al frío"],
      mascotas: true,
    },
    {
      name: "Maxi Martinel",
      nameSpanish: "Maxi Martinel",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1753411681/pinomaxziazul_uvmgeg.png",
      desc: "",
      tipo: ["Árboles medianos", "Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: true,
    },
    {
      name: "Dollar Tree",
      nameSpanish: "Dólar",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1753411748/dollar_c6qjlm.png",
      desc: "",
      tipo: ["Árboles medianos", "Exterior"],
      luzRequerida: ["Sol directo", "Sombra parcial"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: true,
    },
    {
      name: "Eucalyptus",
      nameSpanish: "Eucalipto",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1753411768/eucalipto_coxdpm.png",
      desc: "",
      tipo: ["Árboles grandes", "Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al calor"],
      mascotas: false,
    },
  ];
  const { filtrosSeleccionados } = useFilterStore();
  const [plants, setPlants] = useState(allPlants);

  const filteredPlants = useMemo(() => {
    const filters = filtrosSeleccionados;

    return allPlants.filter((plant) => {
      const matchTipo =
        !filters.Tipo?.length ||
        filters.Tipo.some((tipo) => plant.tipo.includes(tipo));
      const matchLuz =
        !filters.Luz?.length ||
        filters.Luz.some((luz) => plant.luzRequerida.includes(luz));
      const matchTamaño =
        !filters.Tamaño?.length ||
        filters.Tamaño.some((tam) => plant.tamanio.includes(tam));
      const matchRiego =
        !filters.Riego?.length ||
        filters.Riego.some((riego) => plant.riego.includes(riego));
      const matchClima =
        !filters.Clima?.length ||
        filters.Clima.some((clima) => plant.clima.includes(clima));
      const matchMascotas =
        filters.Mascotas == null || plant.mascotas === filters.Mascotas[0];

      return (
        matchTipo &&
        matchLuz &&
        matchTamaño &&
        matchRiego &&
        matchClima &&
        matchMascotas
      );
    });
  }, [filtrosSeleccionados]);

  return { plants, filteredPlants };
};
