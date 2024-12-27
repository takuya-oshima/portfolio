import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBgColor: "var(--background-color)",
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
      writingMode: {
        "vertical-rl": "vertical-rl",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        ".writing-mode-vertical-rl": {
          "writing-mode": "vertical-rl",
        },
        '.counter-reset-list': {
          'counter-reset': 'list-counter',
        },
        '.counter-increment-item::before': {
          'content': '"0"counter(list-counter) ":"',
          'counter-increment': 'list-counter',
        },
      },{
        variants: ['before'], // 必要なら疑似要素用にvariantsを指定
      });
    },
  ],
};
export default config;
