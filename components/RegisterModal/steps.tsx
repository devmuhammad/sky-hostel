import ReserveRoom from "./ReserveRoom";

type Step = {
  id: number;
  title: string;
};

export const steps: Step[] = [
  {
    id: 1,
    title: "Reserve a Room",
  },
  {
    id: 2,
    title: "Generate Payment Reference",
  },
  {
    id: 3,
    title: "Make Payment",
  },
];
