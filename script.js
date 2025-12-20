﻿// ======= KURSDATA =======
const kurser = [
  {
    kod: "TDDE18",
    namn: "Programmera C++",
    hp: 6,
    niva: "G2F",
    block: "2",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: []
  },
  {
    kod: "TDDE56",
    namn: "Grunderna i AI och maskininlärning",
    hp: 6,
    niva: "G2F",
    block: "2",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: []
  },
  {
    kod: "TEIE72",
    namn: "Affärsstrategier",
    hp: 6,
    niva: "A1N",
    block: "4",
    vof: "O/V",
    termin: 7,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TEIM11",
    namn: "Industriell marknadsföring",
    hp: 6,
    niva: "G2F",
    block: "3",
    vof: "O/V",
    termin: 7,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TEIO19",
    namn: "Industriell organisation",
    hp: 6,
    niva: "G2F",
    block: "4",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: ["EMSV"]
  },
  {
    kod: "TEIO90",
    namn: "Innovationsledning",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "O/V",
    termin: 7,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TETS58",
    namn: "Strategiskt inköp",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: []
  },
  {
    kod: "TFYA43",
    namn: "Nanoteknologi",
    hp: 6,
    niva: "G2F",
    block: "3",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TGTU91",
    namn: "Retorik i teori och praktik",
    hp: 6,
    niva: "G1F",
    block: "2",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: []
  },
  {
    kod: "TINT01",
    namn: "Introduktionskurs i interkulturell kompetens",
    hp: 2,
    niva: "G1N",
    block: "-",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: []
  },
  {
    kod: "TKMJ38",
    namn: "Industriell symbios",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "O/V",
    termin: 7,
    period: 1,
    inriktning: ["EMSV"]
  },
  {
    kod: "TMES27",
    namn: "Modellering av energisystem",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "O/V",
    termin: 7,
    period: 1,
    inriktning: ["EMSV"]
  },
  {
    kod: "TMHP02",
    namn: "Fluidmekanisk systemteknik",
    hp: 6,
    niva: "G2F",
    block: "2",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: []
  },
  {
    kod: "TMKA09",
    namn: "Disruptive Technologies",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: []
  },
  {
    kod: "TMKM16",
    namn: "Hållbara materialval",
    hp: 6,
    niva: "A1N",
    block: "4",
    vof: "O/V",
    termin: 7,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMKT78",
    namn: "Product Development",
    hp: 6,
    niva: "G2F",
    block: "1",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMKT80",
    namn: "Träteknik - Material",
    hp: 6,
    niva: "G2F",
    block: "2",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: []
  },
  {
    kod: "TMME67",
    namn: "Muskuloskelettär biomekanik och rörelseapparaten",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: []
  },
  {
    kod: "TMMV01",
    namn: "Aerodynamik",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TSRT06",
    namn: "Reglerteknik, fk",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: []
  },
  {
    kod: "TSTE28",
    namn: "Effektelektronik",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "V",
    termin: 7,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TAOP63",
    namn: "Optimering av komplexa system",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "O/V",
    termin: 7,
    period: 2,
    inriktning: ["EMHF", "EMSV", "EMTE"]
  },
  {
    kod: "TATA71",
    namn: "Ordinära differentialekvationer och dynamiska system",
    hp: 6,
    niva: "G2F",
    block: "2",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: []
  },
  {
    kod: "TDDE18",
    namn: "Programmera C++",
    hp: 6,
    niva: "G2F",
    block: "1",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: []
  },
  {
    kod: "TDDE56",
    namn: "Grunderna i AI och maskininlärning",
    hp: 6,
    niva: "G2F",
    block: "1",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: []
  },
  {
    kod: "TEAE09",
    namn: "Miljörätt",
    hp: 6,
    niva: "G1N",
    block: "4",
    vof: "O/V",
    termin: 7,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TEAE18",
    namn: "Hållbara värdekedjor",
    hp: 6,
    niva: "A1F",
    block: "1",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TEIG03",
    namn: "Innovation och hållbarhetsomställningar",
    hp: 6,
    niva: "A1F",
    block: "2",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TETS27",
    namn: "Supply Chain Logistics",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TGTU49",
    namn: "Teknikhistoria",
    hp: 6,
    niva: "G1F",
    block: "1",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: []
  },
  {
    kod: "TKMJ38",
    namn: "Industriell symbios",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "O/V",
    termin: 7,
    period: 2,
    inriktning: ["EMSV"]
  },
  {
    kod: "TKMJ39",
    namn: "Resurseffektiva produkter och produktion",
    hp: 6,
    niva: "G2F",
    block: "1",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TMES45",
    namn: "Energiplanering och modellering av stadsdelar",
    hp: 6,
    niva: "A1F",
    block: "4",
    vof: "O/V",
    termin: 7,
    period: 2,
    inriktning: ["EMSV"]
  },
  {
    kod: "TMES51",
    namn: "Internationella energimarknader",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: []
  },
  {
    kod: "TMKA09",
    namn: "Disruptive Technologies",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: []
  },
  {
    kod: "TMKO05",
    namn: "Additiv tillverkning för industriella tillämpningar",
    hp: 6,
    niva: "G2F",
    block: "3",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMME28",
    namn: "Mekanik - dynamik",
    hp: 6,
    niva: "G1F",
    block: "1/4",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: []
  },
  {
    kod: "TMMV62",
    namn: "Modellering och simulering för värmeöverföring",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "O/V",
    termin: 7,
    period: 2,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMPR01",
    namn: "Träteknik - Produktframtagning",
    hp: 6,
    niva: "G2F",
    block: "1",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: []
  },
  {
    kod: "TSIU02",
    namn: "Datorteknik",
    hp: 4,
    niva: "G1N",
    block: "2",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: []
  },
  {
    kod: "TSTE26",
    namn: "Elkraftnät och teknik för förnyelsebar elproduktion",
    hp: 6,
    niva: "A1N",
    block: "4",
    vof: "V",
    termin: 7,
    period: 2,
    inriktning: ["EMTE"]
  },
  {
    kod: "TDDE10",
    namn: "Objektorienterad programmering i Java",
    hp: 6,
    niva: "G2F",
    block: "1",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: []
  },
  {
    kod: "TDDE50",
    namn: "Megagame - design för hållbar utveckling i ett förändrat klimat",
    hp: 6,
    niva: "G2F",
    block: "3",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: []
  },
  {
    kod: "TEIE06",
    namn: "Integrerad företagsplanering",
    hp: 6,
    niva: "A1N",
    block: "-",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TEIM09",
    namn: "Internationellt företagande",
    hp: 6,
    niva: "A1F",
    block: "2",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TEIO13",
    namn: "Ledarskap och industriellt förändringsarbete",
    hp: 6,
    niva: "A1N",
    block: "4",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TETS57",
    namn: "Logistikanalys",
    hp: 6,
    niva: "A1F",
    block: "2",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TGTU59",
    namn: "Den globala klimatförändringen",
    hp: 6,
    niva: "A1N",
    block: "4",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: ["EMSV"]
  },
  {
    kod: "TGTU94",
    namn: "Teknik och etik",
    hp: 6,
    niva: "G1F",
    block: "1",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: []
  },
  {
    kod: "TINT02",
    namn: "Interkulturell kompetens och interkulturell kommunikation, fortsättningskurs",
    hp: 6,
    niva: "G2F",
    block: "-",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: []
  },
  {
    kod: "TKMJ47",
    namn: "Miljösystemanalytiska verktyg",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "O/V",
    termin: 8,
    period: 1,
    inriktning: ["EMHF", "EMSV"]
  },
  {
    kod: "TMES41",
    namn: "Strategisk utveckling av hållbara energisystem",
    hp: 6,
    niva: "A1F",
    block: "1",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: ["EMSV"]
  },
  {
    kod: "TMES53",
    namn: "Energimanagement",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: []
  },
  {
    kod: "TMHL22",
    namn: "Hållfasthetslära",
    hp: 6,
    niva: "G2F",
    block: "3",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMKA10",
    namn: "Design för hållbart vardagsliv",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: []
  },
  {
    kod: "TMKA13",
    namn: "Träteknik - Innovation",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: []
  },
  {
    kod: "TMKO01",
    namn: "Avancerade material och miljön",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMMV08",
    namn: "Beräkningsmetoder i strömningslära",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMQU31",
    namn: "Statistisk kvalitetsstyrning",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TSFS04",
    namn: "Elektriska drivsystem",
    hp: 6,
    niva: "G2F",
    block: "4",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TSRT07",
    namn: "Industriell reglerteknik",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 8,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TDDD12",
    namn: "Databasteknik",
    hp: 6,
    niva: "G2F",
    block: "4",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: []
  },
  {
    kod: "TDDE50",
    namn: "Megagame - design för hållbar utveckling i ett förändrat klimat",
    hp: 6,
    niva: "G2F",
    block: "3",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: []
  },
  {
    kod: "TEAE13",
    namn: "Affärsrätt",
    hp: 6,
    niva: "G1F",
    block: "2",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: []
  },
  {
    kod: "TEIE06",
    namn: "Integrerad företagsplanering",
    hp: 6,
    niva: "A1N",
    block: "-",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TEIO06",
    namn: "Innovativt entreprenörskap",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: []
  },
  {
    kod: "TEIO41",
    namn: "Corporate Social Responsibility",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TETS36",
    namn: "Hållbara logistiksystem",
    hp: 6,
    niva: "A1N",
    block: "4",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: ["EMHF", "EMSV"]
  },
  {
    kod: "TGTU84",
    namn: "Mångfald och genus inom teknikutveckling",
    hp: 6,
    niva: "G1F",
    block: "4",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: []
  },
  {
    kod: "TGTU95",
    namn: "Vetenskapens och teknologins filosofi",
    hp: 6,
    niva: "G1F",
    block: "4",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: []
  },
  {
    kod: "TINT02",
    namn: "Interkulturell kompetens och interkulturell kommunikation, fortsättningskurs",
    hp: 6,
    niva: "G2F",
    block: "-",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: []
  },
  {
    kod: "TKMJ47",
    namn: "Miljösystemanalytiska verktyg",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "O/V",
    termin: 8,
    period: 2,
    inriktning: ["EMHF", "EMSV"]
  },
  {
    kod: "TKMJ50",
    namn: "Policy och styrmedel inom miljö och energiområdet",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "O/V",
    termin: 8,
    period: 2,
    inriktning: ["EMHF", "EMSV"]
  },
  {
    kod: "TMES43",
    namn: "Analys och modellering av industriella energisystem",
    hp: 6,
    niva: "A1F",
    block: "3",
    vof: "O/V",
    termin: 8,
    period: 2,
    inriktning: ["EMSV"]
  },
  {
    kod: "TMKA10",
    namn: "Design för hållbart vardagsliv",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: []
  },
  {
    kod: "TMKO03",
    namn: "Metaller för lättviktsapplikationer",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: []
  },
  {
    kod: "TMKO06",
    namn: "Biopolymerer och biokompositer",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMKT83",
    namn: "Småskalig förnybar energiomvandling",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMMV07",
    namn: "Beräkningsmetoder i strömningslära, fk",
    hp: 6,
    niva: "A1F",
    block: "4",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMQU04",
    namn: "Six Sigma Quality",
    hp: 6,
    niva: "A1F",
    block: "2",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TRTE21",
    namn: "Ingenjörens miljöpåverkan med fokus på rening och återvinning",
    hp: 6,
    niva: "G1N",
    block: "2",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: []
  },
  {
    kod: "TSFS03",
    namn: "Fordonsframdrivningssystem",
    hp: 6,
    niva: "A1N",
    block: "4",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: ["EMTE"]
  },
  {
    kod: "TSFS19",
    namn: "Batterisystem",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 8,
    period: 2,
    inriktning: ["EMTE"]
  },
  {
    kod: "TETS58",
    namn: "Strategiskt inköp",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TKMJ31",
    namn: "Biofuels for Transportation",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TKMJ38",
    namn: "Industriell symbios",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TKMJ48",
    namn: "Hållbar stadsutveckling",
    hp: 6,
    niva: "A1F",
    block: "1",
    vof: "O/V",
    termin: 9,
    period: 1,
    inriktning: ["EMSV"]
  },
  {
    kod: "TKMJ56",
    namn: "Projektkurs avancerad - Hållbart företagande",
    hp: 12,
    niva: "A1F",
    block: "2",
    vof: "O",
    termin: 9,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TKMJ59",
    namn: "Miljö och innovation, utveckling av affärsmodeller",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TMES27",
    namn: "Modellering av energisystem",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMHF"]
  },
  {
    kod: "TMES52",
    namn: "Policy och styrmedel för energiomställningen",
    hp: 6,
    niva: "A1N",
    block: "4",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMSV"]
  },
  {
    kod: "TMMV12",
    namn: "Gasturbinteknik",
    hp: 6,
    niva: "A1F",
    block: "4",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMMV18",
    namn: "Fluidmekanik",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMMV59",
    namn: "Tillämpning av beräkningsmetoder i strömningslära",
    hp: 6,
    niva: "A1F",
    block: "2",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMPE07",
    namn: "Projektkurs avancerad - Systemverktyg för hållbar utveckling",
    hp: 12,
    niva: "A1F",
    block: "2",
    vof: "O",
    termin: 9,
    period: 1,
    inriktning: ["EMSV"]
  },
  {
    kod: "TMPM11",
    namn: "Projektkurs avancerad - Teknik för hållbar utveckling",
    hp: 12,
    niva: "A1F",
    block: "3",
    vof: "O/V",
    termin: 9,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMPR03",
    namn: "CAD-driven produktutveckling",
    hp: 6,
    niva: "G2F",
    block: "3",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TSFS09",
    namn: "Modellering och reglering av motorer och drivlinor",
    hp: 6,
    niva: "A1N",
    block: "4",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TSFS23",
    namn: "Projektkurs avancerad - Elkraft för hållbar omställning",
    hp: 12,
    niva: "A1F",
    block: "3",
    vof: "O/V",
    termin: 9,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TSRT06",
    namn: "Reglerteknik, fk",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TSTE28",
    namn: "Effektelektronik",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "V",
    termin: 9,
    period: 1,
    inriktning: ["EMTE"]
  },
  {
    kod: "TEIE42",
    namn: "Industriell försäljning",
    hp: 6,
    niva: "A1N",
    block: "4",
    vof: "V",
    termin: 9,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TETS31",
    namn: "Logistikstrategier",
    hp: 6,
    niva: "A1F",
    block: "4",
    vof: "V",
    termin: 9,
    period: 2,
    inriktning: []
  },
  {
    kod: "TKMJ38",
    namn: "Industriell symbios",
    hp: 6,
    niva: "A1N",
    block: "1",
    vof: "V",
    termin: 9,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TKMJ48",
    namn: "Hållbar stadsutveckling",
    hp: 6,
    niva: "A1F",
    block: "4",
    vof: "O/V",
    termin: 9,
    period: 2,
    inriktning: ["EMSV"]
  },
  {
    kod: "TKMJ56",
    namn: "Projektkurs avancerad - Hållbart företagande",
    hp: 12,
    niva: "A1F",
    block: "2",
    vof: "O",
    termin: 9,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TKMJ59",
    namn: "Miljö och innovation, utveckling av affärsmodeller",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "V",
    termin: 9,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TMES51",
    namn: "Internationella energimarknader",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 9,
    period: 2,
    inriktning: ["EMSV"]
  },
  {
    kod: "TMKA11",
    namn: "Modellbaserad utveckling av system-av-system",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "V",
    termin: 9,
    period: 2,
    inriktning: []
  },
  {
    kod: "TMPE07",
    namn: "Projektkurs avancerad - Systemverktyg för hållbar utveckling",
    hp: 12,
    niva: "A1F",
    block: "2",
    vof: "O",
    termin: 9,
    period: 2,
    inriktning: ["EMSV"]
  },
  {
    kod: "TMPM11",
    namn: "Projektkurs avancerad - Teknik för hållbar utveckling",
    hp: 12,
    niva: "A1F",
    block: "4",
    vof: "O/V",
    termin: 9,
    period: 2,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMPR03",
    namn: "CAD-driven produktutveckling",
    hp: 6,
    niva: "G2F",
    block: "1",
    vof: "V",
    termin: 9,
    period: 2,
    inriktning: ["EMTE"]
  },
  {
    kod: "TMQU12",
    namn: "Lean Production",
    hp: 6,
    niva: "A1N",
    block: "2",
    vof: "V",
    termin: 9,
    period: 2,
    inriktning: ["EMHF"]
  },
  {
    kod: "TSFS09",
    namn: "Modellering och reglering av motorer och drivlinor",
    hp: 6,
    niva: "A1N",
    block: "3",
    vof: "V",
    termin: 9,
    period: 2,
    inriktning: ["EMTE"]
  },
  {
    kod: "TSFS23",
    namn: "Projektkurs avancerad - Elkraft för hållbar omställning",
    hp: 12,
    niva: "A1F",
    block: "4",
    vof: "O/V",
    termin: 9,
    period: 2,
    inriktning: ["EMTE"]
  },
  {
    kod: "TQXX33",
    namn: "Examensarbete",
    hp: 30,
    niva: "A2E",
    block: "-",
    vof: "O",
    termin: 10,
    period: 1,
    inriktning: []
  },
  {
    kod: "TQXX33",
    namn: "Examensarbete",
    hp: 30,
    niva: "A2E",
    block: "-",
    vof: "O",
    termin: 10,
    period: 2,
    inriktning: []
  }
];

// Huvudområde per kurskod (hämtat från studieinfo.liu.se)
const huvudomradeMap = {
  TDDE18: "Datateknik, Datavetenskap",
  TDDE56: "Datateknik, Datavetenskap",
  TEIE72: "Industriell ekonomi",
  TEIM11: "Industriell ekonomi",
  TEIO19: "Industriell ekonomi",
  TEIO90: "Industriell ekonomi",
  TETS58: "Industriell ekonomi",
  TFYA43: "Teknisk fysik, Fysik, Materialvetenskap och materialteknik",
  TGTU91: "Inget huvudområde",
  TINT01: "Inget huvudområde",
  TKMJ38: "Energi- och miljöteknik",
  TMES27: "Energi- och miljöteknik, Maskinteknik",
  TMHP02: "Maskinteknik",
  TMKA09: "Design",
  TMKM16: "Energi- och miljöteknik, Produktutveckling, Maskinteknik",
  TMKT78: "Produktutveckling, Maskinteknik",
  TMKT80: "Produktutveckling, Maskinteknik",
  TMME67: "Maskinteknik",
  TMMV01: "Flygteknik, Maskinteknik",
  TSRT06: "Elektroteknik, Maskinteknik",
  TSTE28: "Elektroteknik",
  TAOP63: "Matematik, Tillämpad matematik",
  TATA71: "Matematik, Tillämpad matematik",
  TEAE09: "Inget huvudområde",
  TEAE18: "Industriell ekonomi",
  TEIG03: "Industriell ekonomi",
  TETS27: "Industriell ekonomi",
  TGTU49: "Inget huvudområde",
  TKMJ39: "Maskinteknik",
  TMES45: "Energi- och miljöteknik, Maskinteknik",
  TMES51: "Energi- och miljöteknik, Industriell ekonomi",
  TMKO05: "Maskinteknik",
  TMME28: "Maskinteknik",
  TMMV62: "Energi- och miljöteknik, Maskinteknik",
  TMPR01: "Produktutveckling, Maskinteknik",
  TSIU02: "Elektroteknik",
  TSTE26: "Elektroteknik",
  TDDE10: "Datateknik",
  TDDE50: "Inget huvudområde",
  TEIE06: "Industriell ekonomi",
  TEIM09: "Industriell ekonomi",
  TEIO13: "Industriell ekonomi",
  TETS57: "Industriell ekonomi",
  TGTU59: "Energi- och miljöteknik",
  TGTU94: "Inget huvudområde",
  TINT02: "Inget huvudområde",
  TKMJ47: "Energi- och miljöteknik, Maskinteknik",
  TMES41: "Energi- och miljöteknik",
  TMES53: "Energi- och miljöteknik, Industriell ekonomi",
  TMHL22: "Maskinteknik",
  TMKA10: "Design",
  TMKA13: "Produktutveckling, Maskinteknik",
  TMKO01: "Energi- och miljöteknik, Maskinteknik",
  TMMV08: "Flygteknik, Maskinteknik",
  TMQU31: "Industriell ekonomi",
  TSFS04: "Elektroteknik",
  TSRT07: "Elektroteknik",
  TDDD12: "Datateknik, Programmering",
  TEAE13: "Inget huvudområde",
  TEIO06: "Industriell ekonomi",
  TEIO41: "Industriell ekonomi",
  TETS36: "Industriell ekonomi",
  TGTU84: "Inget huvudområde",
  TGTU95: "Inget huvudområde",
  TKMJ50: "Industriell ekonomi",
  TMES43: "Energi- och miljöteknik",
  TMKO03: "Flygteknik, Maskinteknik",
  TMKO06: "Produktutveckling, Maskinteknik",
  TMKT83: "Energi- och miljöteknik, Maskinteknik",
  TMMV07: "Flygteknik, Maskinteknik",
  TMQU04: "Industriell ekonomi",
  TRTE21: "Inget huvudområde",
  TSFS03: "Elektroteknik, Maskinteknik",
  TKMJ31: "Energi- och miljöteknik, Maskinteknik",
  TKMJ48: "Energi- och miljöteknik",
  TKMJ56: "Industriell ekonomi",
  TKMJ59: "Energi- och miljöteknik, Industriell ekonomi",
  TMES52: "Energi- och miljöteknik",
  TMMV12: "Flygteknik, Energi- och miljöteknik, Maskinteknik",
  TMMV18: "Flygteknik, Energi- och miljöteknik, Maskinteknik",
  TMMV59: "Flygteknik, Maskinteknik",
  TMPE07: "Energi- och miljöteknik",
  TMPM11: "Maskinteknik",
  TMPR03: "Maskinteknik",
  TSFS09: "Elektroteknik, Maskinteknik",
  TSFS23: "Maskinteknik",
  TEIE42: "Industriell ekonomi",
  TETS31: "Industriell ekonomi",
  TMKA11: "Maskinteknik",
  TMQU12: "Industriell ekonomi",
  TQXX33: "se beslutade huvudområden"
};

// ======= REFERENSER TILL HTML =======
const courseContainer = document.getElementById("course-container");
const inriktningSelect = document.getElementById("inriktning");
const dinLista = document.getElementById("din-lista");
const dinListaHint = document.getElementById("din-lista-hint");
const dinListaToggle = document.getElementById("din-lista-toggle");
const sideColumn = document.querySelector(".side-column");
const courseColumn = document.querySelector(".course-column");
const dinListaRuta = document.querySelector(".din-lista-ruta");
const blockStatus = document.getElementById("block");
const hpGrundStatus = document.getElementById("hp-grund");
const hpAvanceradStatus = document.getElementById("hp-avancerad");
const hpPerTerminStatus = document.getElementById("hp-termin");
const hpHuvudomradeStatus = document.getElementById("hp-huvudomrade");
const hpMasterprofilStatus = document.getElementById("hp-masterprofil");
const hpProjektStatus = document.getElementById("hp-projektkurs");
const hpExjobbStatus = document.getElementById("hp-exjobb");
const nivaInputs = document.querySelectorAll(".niva-filter input");

// Hovertexter: ändra dessa strängar för att styra vad som visas vid hover.
const customTooltips = {
  hpGrund: "Summerade grundnivåpoäng i din lista",
  hpAvancerad: "Avancerade HP poäng, räknat från termin 7, 8 och 9",
  hpPerTermin: "Maximalt 30 HP per termin kan läggas till i din lista",
  hpHuvudomrade: "Avancerade HP poäng inom valt huvudområde",
  block: "Kontrollerar schemakrockar i din lista",
};


const valdaKurser = new Map();

function buildKey(kurs) {
  const period = kurs.period === null ? "" : String(kurs.period);
  return `${kurs.kod}|${kurs.termin}|${period}|${kurs.block}`;
}

// ======= FILTRERA KURSER =======
const inriktningLabels = {
  EMHF: "Hållbart företagande",
  EMSV: "Systemverktyg för hållbar utveckling",
  EMTE: "Teknik för hållbar utveckling"
};

const huvudomradePerInriktning = {
  EMHF: "Industriell ekonomi",
  EMSV: "Energi- och miljöteknik",
  EMTE: "Maskinteknik"
};

const vofInputs = document.querySelectorAll(".vof-filter input");

function getValdaVof() {
  const valda = new Set();
  vofInputs.forEach((input) => {
    if (input.checked) {
      valda.add(input.value);
    }
  });
  return valda;
}

function matcharVof(kurs, valdaVof) {
  if (valdaVof.size === 0) return true;
  const vof = normaliseraVof(kurs);
  return vof.split("/").some((del) => valdaVof.has(del));
}

function getValdaNiva() {
  const valda = new Set();
  nivaInputs.forEach((input) => {
    if (input.checked) {
      valda.add(input.value);
    }
  });
  return valda;
}

function matcharNiva(kurs, valdaNiva) {
  if (valdaNiva.size === 0) return true;
  const prefix = kurs.niva ? kurs.niva.charAt(0) : "";
  return valdaNiva.has(prefix);
}

function byggKurserPerTermin(inriktning, valdaVof, valdaNiva) {
  const perTermin = new Map();

  kurser.forEach((kurs) => {
    if (!matcharVof(kurs, valdaVof)) return;
    if (!matcharNiva(kurs, valdaNiva)) return;

    const term = kurs.termin;
    if (!perTermin.has(term)) {
      perTermin.set(term, { common: [], inriktning: [] });
    }

    const group = perTermin.get(term);
    const arCommon = !kurs.inriktning || kurs.inriktning.length === 0;
    const arInriktning =
      inriktning && kurs.inriktning && kurs.inriktning.includes(inriktning);

    if (arCommon) {
      group.common.push(kurs);
    }
    if (arInriktning) {
      group.inriktning.push(kurs);
    }
  });

  return perTermin;
}

function normaliseraVof(kurs) {
  const namn = kurs.namn.toLowerCase();
  if (namn.startsWith("projektkurs avancerad")) {
    return "O/V";
  }
  if (kurs.vof === "O/V") {
    return "O";
  }
  return kurs.vof;
}

function byggTabell(kurserForTermin) {
  const table = document.createElement("table");
  table.className = "kurs-tabell";

  table.innerHTML = `
    <thead>
      <tr>
        <th>Kurskod</th>
        <th>Kursnamn</th>
        <th>Hp</th>
        <th>Niva</th>
        <th>Block</th>
        <th>VOF</th>
        <th>Info</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  kurserForTermin.forEach((kurs) => {
    const tr = document.createElement("tr");
    const vof = normaliseraVof(kurs);
    const period = kurs.period === null ? "" : String(kurs.period);
    const key = buildKey(kurs);
    tr.dataset.kod = kurs.kod;
    tr.dataset.namn = kurs.namn;
    tr.dataset.hp = kurs.hp;
    tr.dataset.niva = kurs.niva;
    tr.dataset.block = kurs.block;
    tr.dataset.termin = kurs.termin;
    tr.dataset.period = period;
    tr.dataset.vof = vof;
    tr.dataset.key = key;
    tr.dataset.inriktning = (kurs.inriktning || []).join(",");

    tr.innerHTML = `
      <td>${kurs.kod}</td>
      <td>${kurs.namn}</td>
      <td>${kurs.hp}</td>
      <td>${kurs.niva}</td>
      <td>${kurs.block}</td>
      <td>${vof}</td>
      <td><a class="kurs-info-link" href="https://studieinfo.liu.se/kurs/${kurs.kod}" target="_blank" rel="noopener noreferrer" title="Öppna kursinfo">${"i"}</a></td>
    `;

    tbody.appendChild(tr);
  });

  return table;
}

function groupByPeriod(kurserLista) {
  const perPeriod = new Map();
  kurserLista.forEach((kurs) => {
    const period = kurs.period === null ? "?" : String(kurs.period);
    if (!perPeriod.has(period)) {
      perPeriod.set(period, []);
    }
    perPeriod.get(period).push(kurs);
  });
  return perPeriod;
}

function renderPeriodSection(kurserLista) {
  const wrapper = document.createElement("div");
  const perPeriod = groupByPeriod(kurserLista);
  const perioder = Array.from(perPeriod.keys()).sort((a, b) => {
    const na = a === "?" ? 99 : parseInt(a, 10);
    const nb = b === "?" ? 99 : parseInt(b, 10);
    return na - nb;
  });

  perioder.forEach((period) => {
    const heading = document.createElement("h5");
    heading.className = "period-heading";
    heading.textContent = period === "?" ? "Period okänd" : `Period ${period}`;
    wrapper.appendChild(heading);
    wrapper.appendChild(byggTabell(perPeriod.get(period)));
  });

  return wrapper;
}

function renderKurser() {
  if (!courseContainer) return;

  courseContainer.innerHTML = "";

  const valdInriktning = inriktningSelect ? inriktningSelect.value : "";
  if (!valdInriktning) {
    const hint = document.createElement("p");
    hint.className = "empty-hint";
    hint.textContent = "Välj en inriktning för att se kurser.";
    courseContainer.appendChild(hint);
    return;
  }

  const valdaVof = getValdaVof();
  const valdaNiva = getValdaNiva();
  const kurserPerTermin = byggKurserPerTermin(
    valdInriktning,
    valdaVof,
    valdaNiva
  );
  const terminer = Array.from(kurserPerTermin.keys()).sort((a, b) => a - b);

  terminer.forEach((termin) => {
    const grupper = kurserPerTermin.get(termin);
    if (!grupper || (grupper.common.length === 0 && grupper.inriktning.length === 0)) {
      return;
    }

    const section = document.createElement("section");
    section.className = "accordion termin-sektion";

    const header = document.createElement("div");
    header.className = "accordion__head";

    const title = document.createElement("h3");
    title.className = "term-title";
    title.textContent = `Termin ${termin}`;
    header.appendChild(title);

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "accordion__toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "+";
    header.appendChild(toggle);

    const content = document.createElement("div");
    content.className = "accordion__content";
    content.hidden = true;

    if (grupper.inriktning.length > 0) {
      const sub = document.createElement("h4");
      sub.className = "subheading";
      sub.textContent = `Inriktning: ${inriktningLabels[valdInriktning] || valdInriktning}`;
      content.appendChild(sub);
      content.appendChild(renderPeriodSection(grupper.inriktning));
    }

    if (grupper.common.length > 0) {
      const sub = document.createElement("h4");
      sub.className = "subheading";
      sub.textContent = "Gemensamma kurser";
      content.appendChild(sub);
      content.appendChild(renderPeriodSection(grupper.common));
    }

    header.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.textContent = expanded ? "+" : "-";
      content.hidden = expanded;
    });

    section.appendChild(header);
    section.appendChild(content);

    courseContainer.appendChild(section);
  });
}

// ======= FUNKTION: VISA/DÃ–LJ HINT =======
function uppdateraHint() {
  if (dinLista.children.length > 0) {
    dinListaHint.style.display = "none";
  } else {
    dinListaHint.style.display = "block";
  }
}

// ======= KURSVAL / KLICKHANTERING =======
if (courseContainer) {
  courseContainer.addEventListener("click", (event) => {
    const infoLink = event.target.closest(".kurs-info-link");
    if (infoLink) {
      // Öppna länken utan att toggla kursval
      return;
    }
    const row = event.target.closest("tr");
    if (!row || !row.dataset.kod) return;

    const key = row.dataset.key;
    if (valdaKurser.has(key)) {
      const aktuell = valdaKurser.get(key);
      if (arObligatorisk(aktuell)) {
        const villTaBort = window.confirm(
          "Den här kursen är markerad som obligatorisk. Vill du verkligen ta bort den?"
        );
        if (!villTaBort) return;
      }
      valdaKurser.delete(key);
      row.classList.remove("vald");
    } else {
      valdaKurser.set(key, {
        key,
        kod: row.dataset.kod,
        namn: row.dataset.namn,
        hp: row.dataset.hp,
        niva: row.dataset.niva,
        block: row.dataset.block,
        vof: row.dataset.vof,
        termin: row.dataset.termin,
        period: row.dataset.period,
        inriktning: row.dataset.inriktning
      });
      row.classList.add("vald");
    }

    renderDinLista();
  });
}

function arObligatorisk(kurs) {
  const vof = kurs && kurs.vof ? kurs.vof : "";
  return vof.split("/").includes("O");
}

function autoSelectObligatoriska(inriktning) {
  if (!inriktning) return;

  const obligatoriska = kurser.filter((kurs) => {
    const vof = normaliseraVof(kurs);
    if (vof === "O/V") return false;
    const arObligatorisk = vof.split("/").includes("O");
    if (!arObligatorisk) return false;
    if (!kurs.inriktning || kurs.inriktning.length === 0) {
      return true;
    }
    return kurs.inriktning.includes(inriktning);
  });

  obligatoriska.forEach((kurs) => {
    const key = buildKey(kurs);
    if (valdaKurser.has(key)) return;
    valdaKurser.set(key, {
      key,
      kod: kurs.kod,
      namn: kurs.namn,
      hp: kurs.hp,
      niva: kurs.niva,
      block: kurs.block,
      vof: normaliseraVof(kurs),
      termin: kurs.termin,
      period: kurs.period === null ? "" : String(kurs.period),
      inriktning: kurs.inriktning
    });

    const row = document.querySelector(`tr[data-key="${key}"]`);
    if (row) {
      row.classList.add("vald");
    }
  });
}

// ======= INIT =======

if (inriktningSelect) {
  inriktningSelect.addEventListener("change", () => {
    const val = inriktningSelect.value;
    valdaKurser.clear();
    renderKurser();
    autoSelectObligatoriska(val);
    renderDinLista();
  });
}
vofInputs.forEach((input) => {
  input.addEventListener("change", () => {
    renderKurser();
  });
});

nivaInputs.forEach((input) => {
  input.addEventListener("change", () => {
    renderKurser();
  });
});

if (dinListaToggle) {
  dinListaToggle.addEventListener("click", () => {
    const expanded = dinListaToggle.getAttribute("aria-expanded") === "true";
    dinListaToggle.setAttribute("aria-expanded", String(!expanded));
    dinListaToggle.textContent = expanded ? "Visa mer" : "Visa mindre";
    if (sideColumn) sideColumn.classList.toggle("expanded", !expanded);
    if (courseColumn) courseColumn.classList.toggle("shrunk", !expanded);
    if (dinListaRuta) dinListaRuta.classList.toggle("expanded", !expanded);
    renderDinLista();
  });
}

function renderDinLista() {
  if (!dinLista) return;
  dinLista.innerHTML = "";

  const expanded = dinListaToggle
    ? dinListaToggle.getAttribute("aria-expanded") === "true"
    : false;

  const grupper = new Map();
  valdaKurser.forEach((kurs) => {
    const termin = kurs.termin || "?";
    const period = kurs.period || "?";
    const key = `Termin ${termin} / Period ${period}`;
    if (!grupper.has(key)) {
      grupper.set(key, { termin, period, kurser: [] });
    }
    grupper.get(key).kurser.push(kurs);
  });

  const blockConflicts = getBlockConflicts();
  const conflictKeys = new Set(blockConflicts.keys());

  const groupList = Array.from(grupper.entries()).sort((a, b) => {
    const ga = a[1];
    const gb = b[1];
    const ta = ga.termin === "?" ? 99 : parseInt(ga.termin, 10);
    const tb = gb.termin === "?" ? 99 : parseInt(gb.termin, 10);
    if (ta !== tb) return ta - tb;
    const pa = ga.period === "?" ? 99 : parseInt(ga.period, 10);
    const pb = gb.period === "?" ? 99 : parseInt(gb.period, 10);
    return pa - pb;
  });

  groupList.forEach(([groupKey, groupData]) => {
    const wrapper = document.createElement("li");
    wrapper.className = "din-lista-group";

    const title = document.createElement("h4");
    title.textContent = groupKey;
    wrapper.appendChild(title);

    const ul = document.createElement("ul");
    groupData.kurser
      .sort((a, b) => a.namn.localeCompare(b.namn))
      .forEach((kurs) => {
      const li = document.createElement("li");
      const blockKey = `${kurs.termin || "?"}|${kurs.period || "?"}|${kurs.block}`;
      if (conflictKeys.has(blockKey)) {
        li.classList.add("block-conflict");
        li.title = "Schemakrock: samma block i denna termin/period";
      }
      if (expanded) {
        li.innerHTML = `<strong>${kurs.kod}</strong> ${kurs.namn} <span class="din-lista-detalj">(${kurs.hp} hp, ${kurs.niva}, Block ${kurs.block}, ${kurs.vof})</span>`;
      } else {
        li.textContent = kurs.namn;
      }
      ul.appendChild(li);
      });

    wrapper.appendChild(ul);
    dinLista.appendChild(wrapper);
  });

  uppdateraBlockStatus(blockConflicts);
  uppdateraHpStatus();
  uppdateraHint();
}

function getBlockConflicts() {
  const counts = new Map();

  valdaKurser.forEach((kurs) => {
    const block = kurs.block;
    if (!block || !["1", "2", "3", "4"].includes(block)) return;

    const termin = kurs.termin || "?";
    const period = kurs.period || "?";
    const key = `${termin}|${period}|${block}`;
    if (!counts.has(key)) {
      counts.set(key, []);
    }
    counts.get(key).push(kurs);
  });

  const conflicts = new Map();
  counts.forEach((lista, key) => {
    if (lista.length > 1) {
      conflicts.set(key, lista);
    }
  });

  return conflicts;
}

function markeraBlockKonflikter(conflictKeys) {
  const rows = document.querySelectorAll('tr[data-key]');
  rows.forEach((row) => {
    const termin = row.dataset.termin || "?";
    const period = row.dataset.period || "?";
    const block = row.dataset.block;
    const key = `${termin}|${period}|${block}`;
    if (conflictKeys.has(key)) {
      row.classList.add("block-conflict");
      row.title = "Schemakrock: samma block i denna termin/period";
    } else {
      row.classList.remove("block-conflict");
      row.removeAttribute("title");
    }
  });
}

function buildStatusTitle(base, extra) {
  if (base && extra) return `${base} — ${extra}`;
  return base || extra || "";
}

function uppdateraBlockStatus(blockConflicts) {
  if (!blockStatus) return;
  const konflikt = blockConflicts && blockConflicts.size > 0;
  const baseTitle = customTooltips.block || "";
  blockStatus.textContent = konflikt ? "EJ OK" : "OK";
  blockStatus.classList.toggle("status-error", konflikt);
  blockStatus.classList.toggle("status-ok", !konflikt);
  if (konflikt) {
    const delar = [];
    blockConflicts.forEach((lista, key) => {
      const [termin, period, block] = key.split("|");
      const namn = lista.map((k) => `${k.kod}`).join(", ");
      delar.push(`T${termin}, P${period}, block ${block}: ${namn}`);
    });
    const conflictText = `Schemakrock: ${delar.join(" | ")}`;
    blockStatus.title = buildStatusTitle(baseTitle, conflictText);
  } else {
    blockStatus.title = baseTitle;
  }

  const conflictKeys = new Set(blockConflicts ? blockConflicts.keys() : []);
  markeraBlockKonflikter(conflictKeys);
}

function parseHp(varde) {
  const num = Number(varde);
  return Number.isFinite(num) ? num : 0;
}

function arAvancerad(kurs) {
  return kurs.niva && kurs.niva.startsWith("A");
}

function arAvanceradTermin(kurs) {
  const t = Number(kurs.termin);
  return Number.isFinite(t) && t >= 7 && t <= 9;
}

function arMasterprofil(kurs, valdInriktning) {
  if (!valdInriktning) return false;
  const inr = kurs.inriktning;
  if (!inr) return false;
  if (Array.isArray(inr)) {
    return inr.includes(valdInriktning);
  }
  return String(inr).split(",").includes(valdInriktning);
}

function arProjektkurs(kurs) {
  return kurs.namn && kurs.namn.startsWith("Projektkurs avancerad");
}

function arExjobb(kurs) {
  return kurs.kod === "TQXX33";
}

function getHpPerTermin() {
  const perTermin = new Map();
  valdaKurser.forEach((kurs) => {
    const termin = kurs.termin || "?";
    const terminNum = Number(termin);
    if (Number.isFinite(terminNum) && terminNum === 10) return;
    const hp = parseHp(kurs.hp);
    perTermin.set(termin, (perTermin.get(termin) || 0) + hp);
  });
  return perTermin;
}

function getKurserPerPeriod() {
  const perPeriod = new Map();
  valdaKurser.forEach((kurs) => {
    const termin = kurs.termin || "?";
    const period = kurs.period || "?";
    const key = `${termin}|${period}`;
    perPeriod.set(key, (perPeriod.get(key) || 0) + 1);
  });
  return perPeriod;
}

function arIValtHuvudomrade(kurs, valdInriktning) {
  if (!valdInriktning) return false;
  const target = huvudomradePerInriktning[valdInriktning];
  if (!target) return false;
  const huv = (huvudomradeMap[kurs.kod] || "").toLowerCase();
  return huv.includes(target.toLowerCase());
}

function uppdateraHpStatus() {
  if (!hpGrundStatus || !hpAvanceradStatus) return;

  const valdInriktning = inriktningSelect ? inriktningSelect.value : "";
  if (hpGrundStatus) {
    hpGrundStatus.title = customTooltips.hpGrund || "";
  }
  if (hpAvanceradStatus) {
    hpAvanceradStatus.title = customTooltips.hpAvancerad || "";
  }
  if (hpPerTerminStatus) {
    hpPerTerminStatus.title = customTooltips.hpPerTermin || "";
  }
  if (hpHuvudomradeStatus) {
    hpHuvudomradeStatus.title = customTooltips.hpHuvudomrade || "";
  }
  let grundHp = 0;
  let avanceradHp = 0;
  let avanceradHuvudomradeHp = 0;
  let masterprofilHp = 0;
  let harProjekt = false;
  let harExjobb = false;
  let exjobbRedanRaknats = false;

  valdaKurser.forEach((kurs) => {
    if (arExjobb(kurs)) {
      harExjobb = true;
      if (exjobbRedanRaknats) {
        return; // räkna bara 30 hp en gång även om exjobb finns i två perioder
      }
      exjobbRedanRaknats = true;
    }

    const hp = parseHp(kurs.hp);
    const arAdv = arAvancerad(kurs);
    const arAdvTermin = arAdv && arAvanceradTermin(kurs);
    if (arAdvTermin) {
      avanceradHp += hp;
    }
    if (arAdv && arIValtHuvudomrade(kurs, valdInriktning)) {
      avanceradHuvudomradeHp += hp;
    }
    if (!arAdv) {
      grundHp += hp;
    }

    if (arMasterprofil(kurs, valdInriktning)) {
      masterprofilHp += hp;
      if (arProjektkurs(kurs)) harProjekt = true;
    }

  });

  const har90Avancerad = avanceradHp >= 90;
  const har30Huvudomrade = avanceradHuvudomradeHp >= 30;
  const har60Masterprofil = masterprofilHp >= 60;
  const harProjektKrav = !!valdInriktning && harProjekt;
  const harExjobbKrav = harExjobb;
  const hpPerTerminMap = getHpPerTermin();
  const kurserPerPeriodMap = getKurserPerPeriod();
  const hpPerTerminOver = [];
  const kurserPerPeriodOver = [];
  hpPerTerminMap.forEach((sum, term) => {
    if (sum > 30) {
      hpPerTerminOver.push(`T${term}: ${sum} hp`);
    }
  });
  kurserPerPeriodMap.forEach((count, key) => {
    if (count > 3) {
      const [t, p] = key.split("|");
      kurserPerPeriodOver.push(`T${t} P${p}: ${count} kurser`);
    }
  });
  const harHpPerTerminOk =
    hpPerTerminOver.length === 0 && kurserPerPeriodOver.length === 0;

  hpGrundStatus.textContent = `${grundHp} hp`;
  hpGrundStatus.classList.remove("status-ok", "status-error");

  hpAvanceradStatus.textContent = har90Avancerad
    ? `OK (${avanceradHp}/90 hp)`
    : `EJ OK (${avanceradHp}/90 hp)`;
  hpAvanceradStatus.classList.toggle("status-ok", har90Avancerad);
  hpAvanceradStatus.classList.toggle("status-error", !har90Avancerad);

  if (hpHuvudomradeStatus) {
    const text = !valdInriktning
      ? "Välj inriktning"
      : har30Huvudomrade
      ? `OK (${avanceradHuvudomradeHp}/30 hp)`
      : `EJ OK (${avanceradHuvudomradeHp}/30 hp)`;
    hpHuvudomradeStatus.textContent = text;
    hpHuvudomradeStatus.classList.toggle("status-ok", har30Huvudomrade && !!valdInriktning);
    hpHuvudomradeStatus.classList.toggle("status-error", !har30Huvudomrade && !!valdInriktning);
  }

  if (hpMasterprofilStatus) {
    const text = !valdInriktning
      ? "Välj inriktning"
      : har60Masterprofil
      ? `OK (${masterprofilHp}/60 hp)`
      : `EJ OK (${masterprofilHp}/60 hp)`;
    hpMasterprofilStatus.textContent = text;
    hpMasterprofilStatus.classList.toggle("status-ok", har60Masterprofil && !!valdInriktning);
    hpMasterprofilStatus.classList.toggle("status-error", !har60Masterprofil && !!valdInriktning);
  }

  if (hpProjektStatus) {
    const text = !valdInriktning
      ? "Välj inriktning"
      : harProjektKrav
      ? "OK"
      : "EJ OK";
    hpProjektStatus.textContent = text;
    hpProjektStatus.classList.toggle("status-ok", harProjektKrav && !!valdInriktning);
    hpProjektStatus.classList.toggle("status-error", !harProjektKrav && !!valdInriktning);
  }

  if (hpExjobbStatus) {
    hpExjobbStatus.textContent = harExjobbKrav ? "OK" : "EJ OK";
    hpExjobbStatus.classList.toggle("status-ok", harExjobbKrav);
    hpExjobbStatus.classList.toggle("status-error", !harExjobbKrav);
  }

  if (hpPerTerminStatus) {
    const baseTitle = customTooltips.hpPerTermin || "";
    const delar = [];
    if (hpPerTerminOver.length > 0) {
      delar.push(`Överskrider 30 hp: ${hpPerTerminOver.join(" | ")}`);
    }
    if (kurserPerPeriodOver.length > 0) {
      delar.push(`Fler än 3 kurser: ${kurserPerPeriodOver.join(" | ")}`);
    }
    const extra = delar.join(" — ");
    hpPerTerminStatus.title = buildStatusTitle(baseTitle, extra);
    hpPerTerminStatus.textContent = harHpPerTerminOk ? "OK" : "EJ OK";
    hpPerTerminStatus.classList.toggle("status-ok", harHpPerTerminOk);
    hpPerTerminStatus.classList.toggle("status-error", !harHpPerTerminOk);
  }
}

function buildPopupContent(kurs) {
  return "";
}

function showKursPopup(row, clientX, clientY) {
  return;
}

function hideKursPopup() {
  return;
}

renderKurser();
renderDinLista();
