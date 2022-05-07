module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    './base',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style']
    }],
    'vue/html-self-closing': ['error', {
      html: {
        normal: 'never',
        void: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }]
  }
}
