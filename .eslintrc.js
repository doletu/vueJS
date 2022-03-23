/* eslint-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint no-use-before-define: 0 */ 
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  node: {
    "fs": 'empty',
    "crypto": 'empty'
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-var":"off",
    "vue/multi-word-component-names": "off",
    "prettier/prettier": 0,
    "eslint": 0,
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
};
