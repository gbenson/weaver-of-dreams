module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    "jest",
  ],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
  },
};
