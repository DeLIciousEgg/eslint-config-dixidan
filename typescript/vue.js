module.exports = {
  extends: [
    './index',
    '../vue'
  ],
  parserOptions: {
    // https://github.com/mysticatea/vue-eslint-parser#parseroptionsparser
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020
  }
}
