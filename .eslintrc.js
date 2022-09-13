module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "prettier",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
