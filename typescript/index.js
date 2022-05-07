module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '../base',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
    }
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': ['error', 'always'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'functions'],

    // off
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-namespace': 'off'
  }
}
