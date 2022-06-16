/**
 * @type { import("eslint").Linter.Config }
 */
module.exports = {
  env: {
    // https://kangax.github.io/compat-table/es2016plus/#node16_11
    es2022: true,
    node: true,
  },
  root: true,
  extends: ["eslint:recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    extraFileExtensions: [".json"],
    project: ["./tsconfig.json"],
  },
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
  },
};
