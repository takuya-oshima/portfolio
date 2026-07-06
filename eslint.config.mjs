// eslint.config.mjs (ESLint 9 / Flat Config)
// eslint-config-next@16 はネイティブのフラットコンフィグ(配列)を提供するため、直接展開する
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
];

export default eslintConfig;
