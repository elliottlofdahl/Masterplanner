// ======= KURSDATA =======
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



// ======= REFERENSER TILL HTML =======
const courseContainer = document.getElementById("course-container");
const inriktningSelect = document.getElementById("inriktning");
const dinLista = document.getElementById("din-lista");
const dinListaHint = document.getElementById("din-lista-hint");
const dinListaToggle = document.getElementById("din-lista-toggle");
const sideColumn = document.querySelector(".side-column");
const courseColumn = document.querySelector(".course-column");
const dinListaRuta = document.querySelector(".din-lista-ruta");

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

function byggKurserPerTermin(inriktning, valdaVof) {
  const perTermin = new Map();

  kurser.forEach((kurs) => {
    if (!matcharVof(kurs, valdaVof)) return;

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

    tr.innerHTML = `
      <td>${kurs.kod}</td>
      <td>${kurs.namn}</td>
      <td>${kurs.hp}</td>
      <td>${kurs.niva}</td>
      <td>${kurs.block}</td>
      <td>${vof}</td>
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
  const kurserPerTermin = byggKurserPerTermin(valdInriktning, valdaVof);
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
      toggle.textContent = expanded ? "+" : "−";
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
    const row = event.target.closest("tr");
    if (!row || !row.dataset.kod) return;

    const key = row.dataset.key;
    if (valdaKurser.has(key)) {
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
        period: row.dataset.period
      });
      row.classList.add("vald");
    }

    renderDinLista();
  });
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
      period: kurs.period === null ? "" : String(kurs.period)
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

  uppdateraHint();
}

renderKurser();
renderDinLista();


