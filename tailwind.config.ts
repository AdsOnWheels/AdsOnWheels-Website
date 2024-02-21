import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        m1: "425px",
        // => @media (min-width: 425px)

        m2: "375px",
        // => @media (min-width: 375px)

        m3: "320px",
        // => @media (min-width: 320px)
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        winter: {
          ...require("daisyui/src/theming/themes")["winter"],
          primary: "#ff4f00",
          ".step-primary:before": {
            color: "fff",
          },
        },
      },
    ],
  },
};
export default config;
