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
    indent: ["error", 2, { "SwitchCase": 0 }]
  },
};
