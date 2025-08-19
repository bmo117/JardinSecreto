// import React from "react";
import MenuBar from "../../componets/menuBar";

import AnimatedText from "../../componets/AnimatedText";
// const Macetas = () => {
//   return (
//     <div className="w-full h-fit bg-primary overflow-hidden">
//       <MenuBar />
//       <br />
//       <br />
//       <div className="pt-[76px] w-full h-full"></div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categorias = [
  {
    id: "arreglos",
    titulo: "Arreglos",
    color: "bg-white",
    subcards: [
      {
        id: 1,
        titulo: "Arreglo doble",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755308525/arreglo20_1_ozmhgu.jpg",
      },
      {
        id: 2,
        titulo: "Arreglo doble",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755309236/arreglo2_1_fg3m9m.jpg",
      },
      {
        id: 3,
        titulo: "Adorno cajita",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755309487/arreglo3_1_vhxha5.jpg",
      },
      {
        id: 4,
        titulo: "Arreglo doble",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755376607/arreglo5_1_geg72v.jpg",
      },
      {
        id: 5,
        titulo: "Arreglo sencillo",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755376770/arreglo4_1_knby5h.jpg",
      },
      {
        id: 6,
        titulo: "Arreglo doble con pecera",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755376963/arreglo7_1_ohisyc.jpg",
      },
      {
        id: 7,
        titulo: "Arreglo doble",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755377003/arreglo6_1_erob2h.jpg",
      },
      {
        id: 8,
        titulo: "Arreglo sencillo",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755377142/arreglo8_1_ase9su.jpg",
      },
      {
        id: 9,
        titulo: "Arreglo sencillo",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755377239/arreglo9_1_oomqqi.jpg",
      },
      {
        id: 10,
        titulo: "Arreglo triple",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755377243/arreglo10_1_ircpgh.jpg",
      },
      {
        id: 11,
        titulo: "Arreglo doble jarron",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755377685/arreglo11_1_wfvnkj.jpg",
      },
      {
        id: 12,
        titulo: "Arreglo maceta",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755377712/arreglo12_1_gncq0q.jpg",
      },
      {
        id: 13,
        titulo: "Arreglo doble",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755377744/arreglo13_1_yifo3m.jpg",
      },
      {
        id: 14,
        titulo: "Arreglo cuadruple",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755377783/arreglo14_1_limafg.jpg",
      },
      {
        id: 15,
        titulo: "Arreglo triple",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755377802/arreglo15_1_fydldv.jpg",
      },
      {
        id: 16,
        titulo: "Arreglo canasta",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755378007/arreglo19_1_xl5str.jpg",
      },
      {
        id: 17,
        titulo: "Arreglo cajita circular",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755378047/arreglo18_1_cp9mvd.jpg",
      },
      {
        id: 18,
        titulo: "Arreglo canasta",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755378158/arreglo17_1_xgrppy.jpg",
      },
      {
        id: 19,
        titulo: "Arreglo ceramica",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755378178/arreglo16_1_ieores.jpg",
      },
      {
        id: 20,
        titulo: "Arreglo doble",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755378208/arreglo22_1_vhkvok.jpg",
      },
      {
        id: 21,
        titulo: "Arreglo canasta",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755378236/arreglo21_1_crkkof.jpg",
      },
      {
        id: 22,
        titulo: "Adorno cajita",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755065687/arreglo1_v00mlp.jpg",
      },
    ],
    imagen:
      "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755065687/arreglo1_v00mlp.jpg",
  },
  {
    id: "agroquimicos",
    titulo: "Fertilizantes y sustratos",
    color: "bg-white",
    subcards: [
      {
        id: 1,
        titulo: "Rayadura de coco",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755384953/otros1_2_padqbq.jpg",
      },
      {
        id: 2,
        titulo: "Tierra revuelta",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755384960/otros2_1_ys55px.jpg",
      },
      {
        id: 3,
        titulo: "Tierra negra",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755384972/otros3_1_kwyezb.jpg",
      },
      {
        id: 4,
        titulo: "Humus de lombriz",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755384981/otros4_1_xymw8n.jpg",
      },
      {
        id: 5,
        titulo: "Corteza de pino",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755384990/otros5_1_vpby6d.jpg",
      },
      {
        id: 6,
        titulo: "Musgo",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755384994/otros6_1_ecz42g.jpg",
      },
      {
        id: 7,
        titulo: "Perlita / Agrolita",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755384998/otros7_1_l4snqo.jpg",
      },
      {
        id: 8,
        titulo: "Nitrofosca",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755386009/otros8_1_tsvri9.jpg",
        desc: "Abono que ayuda a la floración de plantas decorativas o frutales",
      },
      {
        id: 9,
        titulo: "Calcio",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755386014/otros9_1_xhdzbn.jpg",
        desc: "Aboo que ayuda a la retención y crecimiento de flor o fruto",
      },
      {
        id: 10,
        titulo: "Nitrofosca",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755386030/otros10_1_quhdl8.jpg",
        desc: "Abono que ayuda al crecimiento de ramas, hojas y recuperacion de cualquier tipo de planta",
      },
      {
        id: 11,
        titulo: "Triple - 17",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755386035/otros11_1_ohexc9.jpg",
        desc: "Abono que ayuda al crecimiento de raíz ramificaciones y a la planta en general",
      },
      {
        id: 12,
        titulo: "Enrraizante",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755386039/otros12_1_r2oeea.jpg",
        desc: "Abono que ayuda que plantas nuevas puedan regenrar raices",
      },
      {
        id: 13,
        titulo: "Floreado",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755386044/otros13_1_levaet.jpg",
        desc: "Abono que ayuda a fortalecer plantas con problemas de floración",
      },
      {
        id: 14,
        titulo: "Cebo para caracol",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755386048/otros14_1_sktyey.jpg",
        desc: "Ayuda a eliminar carcoles y babosas",
      },
      {
        id: 15,
        titulo: "Fungicida",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755386053/otros15_1_unq2zm.jpg",
        desc: "Ayuda e eliminar hongos de las plantas",
      },
      {
        id: 16,
        titulo: "Insecticida",
        color: "bg-white-400",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755386057/otros16_1_rujnws.jpg",
        desc: "Ayuda a la eliminación de plagas en plantas",
      },
    ],
    imagen:
      "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755235060/otros1_1_akfqdo.jpg",
  },
  {
    id: "macetas",
    titulo: "Macetas",
    color: "bg-white",
    subcards: [
      {
        id: 1,
        titulo: "Maceta cónica",
        color: "bg-white",
        desc: "Craquelada de barro mediano-chico",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755437480/maseta2_1_xhq5b8.jpg",
      },
      {
        id: 2,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cubeta de barro mediano-chico",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755436968/maseta3_2_pys0vj.jpg",
      },
      {
        id: 3,
        titulo: "Maceta cónica",
        color: "bg-white",
        desc: "De barro grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755436973/maseta4_1_xxdv4g.jpg",
      },
      {
        id: 4,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De boca ancha de barro grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755436978/maseta5_1_r5hwwq.jpg",
      },
      {
        id: 5,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De boca ancha de barro grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755437859/maseta11_1_zdum2l.jpg",
      },
      {
        id: 6,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Grabado de aguacate de barro grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755438620/maseta6_1_yljwzg.jpg",
      },
      {
        id: 7,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo pirámide de barro garnde",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755438646/maseta7_1_gkjed4.jpg",
      },
      {
        id: 8,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cubeta de barro grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755438660/maseta8_1_aidmqz.jpg",
      },
      {
        id: 9,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo jardinera de barro garnde",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755438674/maseta9_1_aogomr.jpg",
        wide: true,
      },
      {
        id: 10,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo prisma rectangular de barro grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755438691/maseta10_1_f3caoo.jpg",
      },
      {
        id: 11,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo aguacate liso de barro grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755467339/maseta11_2_y8owjt.jpg",
      },
      {
        id: 12,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cónica de barro jumbo",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755467520/maseta12_1_ucnulv.jpg",
      },
      {
        id: 13,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cilíndrica de barro jumbo",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755467540/maseta13_1_mknokf.jpg",
      },
      {
        id: 14,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo aguacate liso de barro mediano-grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755467555/maseta14_1_cgyyfk.jpg",
      },
      {
        id: 15,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo media naranja de barro grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755467569/maseta15_1_xydtmr.jpg",
      },
      {
        id: 16,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo esquinero de barro grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755467965/maseta16_1_xeaszm.jpg",
      },
      {
        id: 17,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo esfera de barro mediana-chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755467986/maseta17_1_xuw3fh.jpg",
      },
      {
        id: 18,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cubeta Grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755468011/maseta18_1_rlxjln.jpg",
      },
      {
        id: 19,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cilíndrica de barro mediano-grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755468039/maseta19_1_fra8nz.jpg",
      },
      {
        id: 20,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo campana mediano-grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755468059/maseta20_1_l4glfp.jpg",
      },
      {
        id: 21,
        titulo: "Macetero",
        color: "bg-white",
        desc: "De barro grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755468087/maseta21_1_apgi3z.jpg",
      },
      {
        id: 22,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo bonsaí de barro chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755469624/maseta22_1_paum4v.jpg",
      },
      {
        id: 23,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cubeta de barro chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755469646/maseta23_1_bdeg1i.jpg",
      },
      {
        id: 24,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cilíndrica de barro chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755469667/maseta24_1_lfdzfr.jpg",
      },
      {
        id: 25,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cubo de barro chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470690/maseta25_1_oq10tv.jpg",
      },
      {
        id: 26,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo esfera de barro chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470668/maseta26_1_kvobcb.jpg",
      },
      {
        id: 27,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo semi-esferica chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470650/maseta27_1_ffav9f.jpg",
      },
      {
        id: 28,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo semi-cilíndrica de barro chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470623/maseta28_1_ri5ruv.jpg",
      },
      {
        id: 29,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo media naranja de barro chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470607/maseta29_1_uonvud.jpg",
      },
      {
        id: 30,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo esférica de barro chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470591/maseta30_1_rqqp9m.jpg",
      },
      {
        id: 31,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cubeta estilo rústico de barro mediano-grande",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470563/maseta31_1_vvjhes.jpg",
      },
      {
        id: 32,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De cerámica mediano-chico",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470541/maseta32_1_x1rjtu.jpg",
      },
      {
        id: 33,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De cerámica dona mini",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470515/maseta33_2_epg98t.jpg",
      },
      {
        id: 34,
        titulo: "Maceta",
        color: "bg-white",
        desc: "TDe cerámica cilíndro mini",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470501/maseta34_2_qfsnja.jpg",
      },
      {
        id: 35,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De cerámica figura chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470476/maseta35_1_gxndqm.jpg",
      },
      {
        id: 36,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De cerámica figura chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470451/maseta36_1_mcfxn3.jpg",
      },
      {
        id: 37,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De cerámica figura chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470424/maseta37_1_x8unjp.jpg",
      },
      {
        id: 38,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De cerámica figura chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470405/maseta38_1_z3miyy.jpg",
      },
      {
        id: 39,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De cerámica figura chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470391/maseta39_1_wajlga.jpg",
      },
      {
        id: 40,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De barro figura chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755470377/maseta40_1_hpyenf.jpg",
      },
      {
        id: 41,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De barro figura chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755575705/maseta41_1_wj5tkv.jpg",
      },
      {
        id: 42,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De barro figura chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755575689/maseta42_1_uq0mmo.jpg",
      },
      {
        id: 43,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De barro figura chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755575672/maseta43_1_njgpfv.jpg",
      },
      {
        id: 44,
        titulo: "Maceta",
        color: "bg-white",
        desc: "De barro figura chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755471355/maseta44_1_imzp57.jpg",
      },
      {
        id: 45,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cubeta de barro chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755471332/maseta45_1_erdjzn.jpg",
      },
      {
        id: 46,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cubeta de barro mediano-chico",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755471312/maseta46_1_bodskj.jpg",
      },
      {
        id: 47,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo jardinera picos de barro chico",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755471297/maseta47_1_h1vdbi.jpg",
      },
      {
        id: 48,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo jardinera de barro chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755471277/maseta48_1_cl0r0a.jpg",
        wide: true,
      },
      {
        id: 49,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo campana de barro mediana-chica",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755471263/maseta49_1_mfn8mw.jpg",
      },
      {
        id: 50,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cilíndrica de barro mediano-chico",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755471249/maseta50_1_i5fbbm.jpg",
      },
      {
        id: 51,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo jardinera de barro mini",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755576176/maseta51_1_pzmren.jpg",
      },
      {
        id: 52,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo estrella de barro mini",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755576196/maseta52_1_y2vpch.jpg",
      },
      {
        id: 53,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cónica de barro mini",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755576220/maseta53_1_tve6l5.jpg",
      },
      {
        id: 54,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo esférica de barro mini",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755576237/maseta54_1_awlnwi.jpg",
      },
      {
        id: 55,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo cubo de barro mini",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755576251/maseta55_1_fetfbm.jpg",
      },
      {
        id: 56,
        titulo: "Maceta",
        color: "bg-white",
        desc: "TTipo cubeta de barro mini",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755576272/maseta56_1_ogawk5.jpg",
      },
      {
        id: 57,
        titulo: "Maceta",
        color: "bg-white",
        desc: "Tipo pirámide de barro mini",
        img: "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755576288/maseta57_1_n0cvsg.jpg",
      },
    ],
    imagen:
      "https://res.cloudinary.com/dso8cvvoe/image/upload/v1755436889/maseta1_1_n2odtt.jpg",
  },
];

const Macetas = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [subIndex, setSubIndex] = useState(0);
  const [isWide, setIsWide] = useState(false);

  //   const handleDragEnd = (_, info) => {
  //     if (!categoriaSeleccionada) return;
  //     const subcards = categoriaSeleccionada.subcards;
  //     if (info.offset.x < -50 && subIndex < subcards.length - 1) {
  //       setSubIndex(subIndex + 1);
  //     } else if (info.offset.x > 50 && subIndex > 0) {
  //       setSubIndex(subIndex - 1);
  //     }
  //   };

  const [direction, setDirection] = useState(null);
  const handleDragEnd = (_, info) => {
    if (!categoriaSeleccionada) return;
    const subcards = categoriaSeleccionada.subcards;

    if (info.offset.x < -50 && subIndex < subcards.length - 1) {
      setDirection("left");
      setSubIndex(subIndex + 1);
    } else if (info.offset.x > 50 && subIndex > 0) {
      setDirection("right");
      setSubIndex(subIndex - 1);
    }
  };

  useEffect(() => {
    if (categoriaSeleccionada) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [categoriaSeleccionada]);

  useEffect(() => {
    if (categoriaSeleccionada) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // si quieres animado; usa "auto" si quieres instantáneo
      });
    }
  }, [categoriaSeleccionada]);

  const variants = {
    enter: { opacity: 0, y: 50 },
    center: { opacity: 1, y: 0 },
    exitLeft: {
      x: -300,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5 },
    },
    exitRight: {
      x: 300,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5 },
    },
  };

  function isWideCard(value) {
    if (value) {
      setIsWide(true);
    }
  }

  return (
    <div className="w-full h-fit !min-h-screen !bg-gray-50 overflow-hidden flex flex-col items-center justify-center p-4">
      <MenuBar />
      <div className={`  ${categoriaSeleccionada ? "!mt-[32%]" : "!mt-[12%]"}`}>
        {!categoriaSeleccionada && (
          <AnimatedText
            title={"Decoracion"}
            body={
              "Diseño minimalista y natural en cada detalle. Nuestras macetas y arreglos aportan elegancia y frescura a cualquier ambiente."
            }
          />
        )}
        <br />
      </div>
      {/* Menú de categorías */}
      <div className={`w-full h-fit flex justify-center`}>
        <div
          className={` ${
            categoriaSeleccionada ? "hidden" : ""
          } w-[90%] !p-5 !bg-gray-50 !backdrop-blur-md !border !border-white/30 rounded-xl !h-fit`}
        >
          {!categoriaSeleccionada && (
            <div className="grid grid-cols-1 gap-4 w-full max-w-sm ">
              {categorias.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    setCategoriaSeleccionada(cat);
                    setSubIndex(0);
                  }}
                  className={`relative w-full h-50 rounded-xl shadow-lg cursor-pointer overflow-hidden  !shadow-[0_10px_60px_-10px_rgba(0,0,0,0.2)]  ${
                    categoriaSeleccionada ? "!mt-[32%]" : ""
                  }`}
                >
                  {/* Imagen de fondo */}
                  <img
                    src={cat.imagen}
                    alt={cat.titulo}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay degradado en la parte inferior */}
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>

                  {/* Título sobre el degradado */}
                  <div className="absolute bottom-3 left-0 w-full text-center text-white text-2xl !font-primary">
                    {cat.titulo}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Vista de subcards apiladas */}
      {categoriaSeleccionada && (
        <div
          className={`relative ${
            isWide ? "w-84 h-66" : "w-64 h-96"
          } flex items-center justify-center`}
        >
          <AnimatePresence>
            {categoriaSeleccionada.subcards.slice(subIndex).map((card, i) => (
              //   <motion.div
              //     key={card.id}
              //     className={`absolute top-0 left-0 w-full h-full rounded-xl shadow-lg ${
              //       card.color
              //     } flex items-center justify-center text-white text-2xl font-bold ${
              //       i % 2 === 0 ? "rotate-0" : "-rotate-6"
              //     }`}
              //     style={{
              //       transform: `scale(${1 - i * 0.05}) translateY(${i * 10}px)`,
              //       zIndex: categoriaSeleccionada.subcards.length - i,
              //     }}
              //     initial={{ opacity: 0, y: 50 }}
              //     animate={{ opacity: 1, y: 0 }}
              //     exit={{ opacity: 0, scale: 0.8 }}
              //     transition={{ duration: 0.3 }}
              //     drag="x"
              //     dragConstraints={{ left: 0, right: 0 }}
              //     onDragEnd={handleDragEnd}
              //   >
              //     <img
              //       src="https://res.cloudinary.com/dso8cvvoe/image/upload/v1755308525/arreglo20_1_ozmhgu.jpg"
              //       alt=""
              //     />
              //     {card.titulo}
              //   </motion.div>

              <motion.div
                key={card.id}
                className={`absolute top-0 left-0 w-full h-[100%] rounded-xl shadow-lg overflow-hidden ${
                  card.color
                } flex items-end justify-center text-white text-2xl  ${
                  i % 2 === 0 ? "rotate-0" : "-rotate-6"
                }`}
                style={{
                  transform: `scale(${1 - i * 0.5}) translateY(${i * 10}px)`,
                  zIndex: categoriaSeleccionada.subcards.length - i,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, scale: 0.8 }}
                exit={direction === "left" ? "exitLeft" : "exitRight"}
                variants={variants}
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
              >
                {/* Imagen como fondo ocupando todo */}
                <img
                  src={card.img}
                  alt=""
                  className={`absolute !inset-0 !w-full !h-full ${
                    card.wide ? "" : " !object-cover"
                  }`}
                />
                {card.desc && (
                  <div className="!absolute w-full text-center bg-black/20 !py-2 font-primary !top-0">
                    {card.titulo}
                  </div>
                )}

                {/* Texto en la parte inferior */}
                <div
                  className={`${
                    card.desc ? "text-sm" : ""
                  } relative w-full text-center bg-black/20 !py-2 font-primary`}
                >
                  {card.desc ? card.desc : card.titulo}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Botón para volver al menú */}
          <br />
          <br />
          <button
            className="absolute bottom-[-100px] !px-4 !py-2 !bg-secondary text-black !rounded-lg shadow !mt-6"
            onClick={() => setCategoriaSeleccionada(null)}
          >
            Regresar
          </button>
        </div>
      )}

      <br />

      <div
        className={`w-full h-50 bg-secondary flex items-center !px-6 ${
          categoriaSeleccionada ? "!mt-[32%]" : ""
        }`}
      >
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
  );
};

export default Macetas;
