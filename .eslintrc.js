module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "standard-with-typescript",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    'quotes': ['error', 'double'],
    'semi': ['error', 'always']
  },
 extends : [
   "some-otherconfig-you-use",
   "prettier"
 ]
};
