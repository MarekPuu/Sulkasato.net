import type { MembershipOptions } from "../types";

export const membershipOptions: MembershipOptions[] = [
  {
    type: "Aikuisjäsenyys",
    price: "150€",
    period: "vuosi",
  },
  {
    type: "Juniorijäsenyys",
    price: "75€",
    period: "vuosi",
  },
  {
    type: "Perhejäsenyys",
    price: "-15% ",
    period: "alennus",
  },
];
