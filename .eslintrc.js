const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: 'eslint-config-airbnb-base',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'no-undef': 2,
    'no-unused-vars': [2, { varsIgnorePattern: 'log', args: 'none' }],
    'arrow-parens': [2, "always"],
    'arrow-body-style': 0,
    'object-curly-spacing': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
  },
}
