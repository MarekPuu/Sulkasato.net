import type { MembershipOptions } from "../types";
import { benefits } from "./benefits";

export const membershipOptions: MembershipOptions[] = [
  {
    type: "Aikuisjäsenyys",
    price: "150€",
    period: "vuosi",
    benefits: benefits,
  },
  {
    type: "Juniorijäsenyys",
    price: "75€",
    period: "vuosi",
    benefits: benefits,
  },
  {
    type: "Perhejäsenyys",
    price: "-15% ",
    period: "alennus",
    benefits: [
      ...benefits,
      { icon: "mdi:account-multiple", text: "Alennus koko perheelle" },
    ],
  },
];
