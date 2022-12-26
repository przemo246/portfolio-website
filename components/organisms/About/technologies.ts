import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiGatsby,
  SiReact,
  SiSolidity,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiFirebase,
  SiEthereum,
} from "react-icons/si";

type Technology = {
  icon: IconType;
  name: string;
};

export const technologies: Technology[] = [
  {
    icon: SiNextdotjs,
    name: "Next.js",
  },
  {
    icon: SiGatsby,
    name: "Gatsby",
  },
  {
    icon: SiReact,
    name: "React",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
  },
  {
    icon: SiSolidity,
    name: "Solidity",
  },
  {
    icon: SiEthereum,
    name: "Ethereum",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
  },
  {
    icon: SiSass,
    name: "Sass",
  },
  {
    icon: SiFirebase,
    name: "Firebase",
  },
];
