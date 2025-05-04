import type { FAQ } from "../types";

export const faqs: FAQ[] = [
  {
    question: "Miten perhemaksu lasketaan?",
    answer: [
      "Perheenjäsenten yhteenlasketut jäsenmaksut * 0.85",
      "Esim. Puolen vuoden perhemaksu, perheessä 2 aikuista ja 1 juniori (alle 18v):",
      "(75€ + 75€ + 37,50 = 187,50€) * 0.85 = 159,38 €.",
    ],
  },
  {
    question: "Voinko kokeilla pelaamista ennen jäseneksi liittymistä?",
    answer:
      "Kyllä! Sulkapalloa aloittavat pelaajat voivat käydä seuran vuoroilla pelaamassa ja tutustumassa toimintaan 5 ensimmäistä kertaa maksutta",
  },
];
