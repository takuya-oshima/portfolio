import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // クラスベースのダークモード
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        didot:  "var(--font-family-didot)",
        notoJP: "var(--font-family-noto-jp)",
        roboto: "var(--font-family-roboto)",
        ja: ["Roboto", "Noto Sans JP", "sans-serif"],
        angel: ["angel", "sans-serif"]
      },
      colors: {
        primary: {
          light: "#111",
          dark: "#fff",
        },
        background: {
          light: '#D9D9D9',
          dark: '#111',
        },
        text: {
          light: '#111',
          dark: '#fff',
        },
      },
      fontSize: {
        "3.5xl": ["2rem", { lineHeight: "2" }],
        "4.55xl": ["2.625rem", { lineHeight: "1.5" }],
        "title": ["7.5rem", { lineHeight: "1" }],
        "index-title": ["9rem", { lineHeight: "1" }],
      },
      lineHeight: {
        "relaxed-custom": "1.75",
      },
      Height: {
        lvh: "100lvh",
      },
      padding: {
        'custom': "0.9375rem",
      },
      margin: {
        "34": "8.5rem",
        "42": "10.5rem",
        "10vh": "10vh",  // 独自のマージンサイズを追加
        "left-custom-sm": "2.8125rem",
        "left-custom-md": "5.625rem"
      },
      inset: {
        "custom": "0.9375rem"
      },
/*       writingMode: {
        "vertical-rl": "vertical-rl",
      }, */
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".writing-mode-vertical-rl": {
          "writing-mode": "vertical-rl",
        },
        ".counter-reset-list": {
          "counter-reset": "list-counter",
        },
        ".counter-increment-item::before": {
          "content": "'0'counter(list-counter) ':'",
          "counter-increment": "list-counter",
        },
      });
    }),
  ],
};
export default config;
