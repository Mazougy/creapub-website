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
        brand: {
          DEFAULT: "#495AA8",
          hover: "#3E4E95",
          soft: "#6A7BD0",
          muted: "#C9D4F2",
          line: "rgba(73, 90, 168, 0.16)",
        },
        navy: {
          DEFAULT: "#24304F",
          soft: "#3F4F73",
          muted: "#5C6B8F",
        },
        surface: {
          white: "#FFFFFF",
          blue: "#EEF3FF",
          cream: "#F8F6EF",
          card: "#FDFEFE",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "Manrope", "Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        soft: "0 8px 32px rgba(36, 48, 79, 0.08)",
        card: "0 16px 40px rgba(73, 90, 168, 0.12)",
        premium: "0 24px 60px rgba(36, 48, 79, 0.1)",
      },
      backgroundImage: {
        "brand-line":
          "linear-gradient(90deg, rgba(73,90,168,0), rgba(73,90,168,0.45), rgba(73,90,168,0))",
      },
    },
  },
  plugins: [],
};

export default config;
