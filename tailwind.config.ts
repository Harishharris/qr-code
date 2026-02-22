import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        biscuit: "#e8dcc4",
        gold: "#d4a574",
        charcoal: "#2a2a2a",
      },
      fontWeight: {
        light: "300",
      },
      letterSpacing: {
        widest: "0.1em",
      },
    },
  },
  plugins: [],
};

export default config;
