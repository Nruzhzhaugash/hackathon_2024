import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1140px',
      xl: '1440px',
    },
    extend: {
      fontSize: {
        "2xl": '40px',
        "xl": "36px",
        "lg": "24px",
        "base": "22px",
      },
      colors: {
        background: '#DCCFB5',
        primary: '#43190D',
        orange: '#C08132',
        brown: '#5F4842',
        link: '#F5ECDC',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
