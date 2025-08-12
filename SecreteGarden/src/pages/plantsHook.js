import { useEffect, useMemo, useState } from "react";

import useFilterStore from "../stores/filters.store";

export const usePlantHook = () => {
  const [randomPlants, setRandomPlants] = useState([]);

  useEffect(() => {
    const res = getRandomObjects(allPlants);
    setRandomPlants(res);
  }, []);
  const allPlants = [
    {
      name: "Italian Cypress",
      nameSpanish: "Ciprés italiano",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754962687/italianCedar_msitci.png",
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
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754963032/lemoncedar_xwbq9y.png",
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
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754963262/Sweetgumv2_vew7ta.png",
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
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754963612/maximartinelv3_ioujox.png",
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
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754963811/dollartreev3_chuaqh.png",
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
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754964111/Eucalyptusv3_rpajll.png",
      desc: "",
      tipo: ["Árboles grandes", "Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al calor"],
      mascotas: false,
    },
    {
      name: "Fir Tree",
      nameSpanish: "Oyamel",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754964554/oyamelv4_weikga.png",
      desc: "",
      tipo: ["Árboles grandes", "Exterior"],
      luzRequerida: ["Sombra parcial"],
      tamanio: ["Grande"],
      riego: ["Moderado"],
      clima: ["Resistente al frío"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Purple Acadia",
      nameSpanish: "Acacia morada",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754965981/acaciomoradav4_vwyupy.png",
      desc: "",
      tipo: ["Árboles medianos", "Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Araucarias",
      nameSpanish: "Araucarias",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754966924/Leonardo_Vision_XL_A_minimalistic_flat_image_of_a_plant_called_0_1_uu3xea.png",
      desc: "",
      tipo: ["Árboles grandes", "Exterior"],
      luzRequerida: ["Sol directo", "Sombra parcial"],
      tamanio: ["Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al frío"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "White Cedar",
      nameSpanish: "Cedro blanco",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754968689/cedroblancov4_qhnhwm.png",
      desc: "",
      tipo: ["Árboles grandes", "Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al frío"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Old Gold",
      nameSpanish: "Oro viejo",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754770711/oroviejo_h5u3yj.png",
      desc: "",
      tipo: ["Árboles medianos", "Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Ocote Pine",
      nameSpanish: "Ocote",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754770903/ocote_ncuinj.png",
      desc: "",
      tipo: ["Árboles grandes", "Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al frío"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Crawling Yumipero",
      nameSpanish: "Yumipero rastrero",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754771051/crawlincipres_s3pyy4.png",
      desc: "",
      tipo: ["Exterior"],
      luzRequerida: ["Sol directo", "Sombra parcial"],
      tamanio: ["Pequeña", "Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Bonsai Trees",
      nameSpanish: "Árboles bonsai",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754771319/bonsai_b3semn.png",
      desc: "",
      tipo: ["Interior", "Exterior"],
      luzRequerida: ["Sol directo", "Sombra parcial", "Interior con poca luz"],
      tamanio: ["Pequeña", "Mediana"],
      riego: ["Moderado", "Requiere riego frecuente"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Tuliá",
      nameSpanish: "Tuliá",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754771592/tuliav2_ilp9c2.png",
      desc: "",
      tipo: ["Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Cedrela",
      nameSpanish: "Cedrela",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754771575/cedrela_pcztnm.png",
      desc: "",
      tipo: ["Árboles pequeños", "Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al calor"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Lemon Cedar",
      nameSpanish: "Cedro limón",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754771647/lemon_cedar_xwbndp.png",
      desc: "",
      tipo: ["Árboles pequeños", "Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Mediana", "Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al calor"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Jacaranda",
      nameSpanish: "Jacarandá",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754771737/jacaranda_qpu5ze.png",
      desc: "",
      tipo: ["Árboles pequeños", "Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al calor"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Ficus",
      nameSpanish: "Ficus",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754771822/ficusv2_ifecin.png",
      desc: "",
      tipo: ["Interior", "Exterior"],
      luzRequerida: ["Sombra parcial", "Interior con poca luz"],
      tamanio: ["Mediana", "Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Coco plumoso",
      nameSpanish: "Coco plumoso",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754771942/cocoplumosochico_fdiwyh.png",
      desc: "",
      tipo: ["Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al calor"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Coco plumoso grande",
      nameSpanish: "Coco plumoso grande",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754772128/COCOPLUMOSOgrande_vmxqpv.png",
      desc: "",
      tipo: ["Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al calor"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Abanico",
      nameSpanish: "Abanico",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754772172/abanico_xbn1oc.png",
      desc: "",
      tipo: ["Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Mediana", "Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al calor"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Rubelina",
      nameSpanish: "Rubelina",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754772240/rubelina_wmhxzp.png",
      desc: "",
      tipo: ["Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Zica",
      nameSpanish: "Zica",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754772287/cica_ksv7gx.png",
      desc: "",
      tipo: ["Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Licua",
      nameSpanish: "Licua",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754772355/licuala_miqq44.png",
      desc: "",
      tipo: ["Exterior"],
      luzRequerida: ["Sol directo", "Sombra parcial"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Maranta sapito",
      nameSpanish: "Maranta sapito",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754772418/sapito_xnriii.png",
      desc: "",
      tipo: ["Interior"],
      luzRequerida: [
        "Interior con poca luz",
        "Interior con luz brillante indirecta",
      ],
      tamanio: ["Pequeña"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Peperomia clusifolia",
      nameSpanish: "Peperomia clusifolia",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754772570/Peperomia_clusifolia_rcko2n.png",
      desc: "",
      tipo: ["Interior"],
      luzRequerida: [
        "Interior con poca luz",
        "Interior con luz brillante indirecta",
      ],
      tamanio: ["Pequeña"],
      riego: ["Bajo mantenimiento (poca agua)"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Peperomia magnolifolia",
      nameSpanish: "Peperomia magnolifolia",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754772616/Peperomia_magnolifolia_a0pyvv.png",
      desc: "",
      tipo: ["Interior"],
      luzRequerida: [
        "Interior con poca luz",
        "Interior con luz brillante indirecta",
      ],
      tamanio: ["Pequeña", "Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Pitosporo",
      nameSpanish: "Pitosporo",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754772697/Pitosporo_edtzqu.png",
      desc: "",
      tipo: ["Exterior", "Interior"],
      luzRequerida: ["Sol directo", "Sombra parcial"],
      tamanio: ["Mediana", "Grande"],
      riego: ["Moderado"],
      clima: ["Resistente al frío", "Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Caladium",
      nameSpanish: "Caladium",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754772756/Caladium_pgvjmr.png",
      desc: "",
      tipo: ["Interior"],
      luzRequerida: ["Sombra parcial", "Interior con luz brillante indirecta"],
      tamanio: ["Pequeña", "Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Tóxica para mascotas"],
    },
    {
      name: "Maranta",
      nameSpanish: "Maranta",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754774047/Maranta_equ4xb.png",
      desc: "",
      tipo: ["Interior"],
      luzRequerida: [
        "Interior con poca luz",
        "Interior con luz brillante indirecta",
      ],
      tamanio: ["Pequeña"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Millonaria",
      nameSpanish: "Millonaria",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754774106/Millonaria_t6hbha.png",
      desc: "",
      tipo: ["Exterior", "Interior"],
      luzRequerida: ["Sol directo", "Sombra parcial"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Copal/incienso",
      nameSpanish: "Copal/incienso",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754774178/Copalincienso_h5jfuj.png",
      desc: "",
      tipo: ["Exterior"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Grande"],
      riego: ["Bajo mantenimiento (poca agua)"],
      clima: ["Clima templado", "Resistente al calor"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Colisadra verde",
      nameSpanish: "Colisadra verde",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754774250/Colisadra_verde_epfm18.png",
      desc: "",
      tipo: ["Interior", "Exterior"],
      luzRequerida: ["Sombra parcial", "Interior con luz brillante indirecta"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Hoja plateada",
      nameSpanish: "Hoja plateada",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754774327/ojaplateadv2_uzd93p.png",
      desc: "",
      tipo: ["Interior"],
      luzRequerida: ["Sombra parcial", "Interior con poca luz"],
      tamanio: ["Pequeña", "Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Hiedra azul",
      nameSpanish: "Hiedra azul",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754774385/Hiedra_azul_xy6peh.png",
      desc: "",
      tipo: ["Interior", "Exterior"],
      luzRequerida: ["Sombra parcial", "Sol directo"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al frío"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Colisadra",
      nameSpanish: "Colisadra",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754774422/Colisadra_u4qggo.png",
      desc: "",
      tipo: ["Interior"],
      luzRequerida: [
        "Interior con poca luz",
        "Interior con luz brillante indirecta",
      ],
      tamanio: ["Pequeña", "Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Zapatilla",
      nameSpanish: "Zapatilla",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754774489/Filodendro_Zapatilla_w0py16.png",
      desc: "",
      tipo: ["Interior"],
      luzRequerida: [
        "Interior con poca luz",
        "Interior con luz brillante indirecta",
      ],
      tamanio: ["Pequeña", "Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Tóxica para mascotas"],
    },
    {
      name: "Payasito",
      nameSpanish: "Payasito",
      scientificName: "",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754774541/Payasito_y9djso.png",
      desc: "",
      tipo: ["Interior"],
      luzRequerida: ["Interior con poca luz"],
      tamanio: ["Pequeña"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Spider Plant",
      nameSpanish: "Cortina",
      scientificName: "Chlorophytum comosum",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754775443/AlbedoBase_XL_A_minimalistic_2D_flat_illustration_of_a_plant_c_0_3_pp9bn6.png",
      desc: "",
      tipo: ["Interior", "Arbustos"],
      luzRequerida: ["Interior con luz brillante indirecta"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Peace Lily",
      nameSpanish: "Cuna de Moisés",
      scientificName: "Spathiphyllum spp.",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754775714/cunamoOri_cx84jf.png",
      desc: "",
      tipo: ["Interior", "Flores"],
      luzRequerida: [
        "Interior con poca luz",
        "Interior con luz brillante indirecta",
      ],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Tóxica para mascotas"],
    },
    {
      name: "Roses",
      nameSpanish: "Rosales",
      scientificName: "Rosa spp.",
      imageUrl:
        "https://res.cloudinary.com/dso8cvvoe/image/upload/v1754775866/AlbedoBase_XL_A_minimalistic_2D_flat_illustration_of_a_plant_c_0_4_ileneb.png",
      desc: "",
      tipo: ["Exterior", "Flores", "Arbustos"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Mediana", "Grande"],
      riego: ["Moderado"],
      clima: ["Clima templado", "Resistente al frío"],
      mascotas: ["Pet friendly"],
    },
    {
      name: "Tuberose",
      nameSpanish: "Tuberosa",
      scientificName: "Polianthes tuberosa",
      imageUrl: "",
      desc: "",
      tipo: ["Exterior", "Flores"],
      luzRequerida: ["Sol directo"],
      tamanio: ["Mediana"],
      riego: ["Moderado"],
      clima: ["Clima templado"],
      mascotas: ["Pet friendly"],
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

  function getRandomObjects(arr, count = 9) {
    // Copiamos el arreglo para no modificar el original
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    // Retornamos los primeros 'count' elementos
    return shuffled.slice(0, count);
  }

  return { plants, filteredPlants, randomPlants };
};
