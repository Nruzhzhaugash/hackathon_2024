import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      'mmd': {'max': "768px"},
      lg: "1140px",
      xl: "1512px",
    },
    extend: {
      fontSize: {
        "2xl": "40px",
        xl: "36px",
        lg: "24px",
        base: "22px",
      },
      colors: {
        background: "#DCCFB5",
        primary: "#43190D",
        orange: "#C08132",
        brown: "#5F4842",
        link: "#F5ECDC",
        green: "#4E9C00",
        orangeSecond: "#AA542A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        obrazec: ["var(--font-obrazec)"],
        relieve: ["var(--font-relieve)"],
        keetano: ["var(--font-keetano)"],
        keetanoKB: ["var(--font-keetanoKB)"],
        involveSB: ["var(--font-involveSB)"],
        involveRG: ["var(--font-involveRG)"],
        involveBQ: ["var(--font-involveBQ)"],
      },
      customBorderColor: {
        brown: "color(brown)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
