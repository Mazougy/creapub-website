import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          muted: "#A8862E",
          soft: "#F3D978",
        },
        ink: {
          DEFAULT: "#050505",
          soft: "#101010",
          panel: "#171717",
          line: "#292929",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0,0,0,0.42)",
        gold: "0 18px 50px rgba(212,175,55,0.18)",
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, rgba(212,175,55,0), rgba(212,175,55,0.75), rgba(212,175,55,0))",
      },
    },
  },
  plugins: [],
};

export default config;
