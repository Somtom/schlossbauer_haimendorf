module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '^(page|showMenu|navItems)$' },
    ],
  },
  globals: {
    $nuxt: true,
    defineProps: 'readonly',
    useHead: 'readonly',
    useAsyncData: 'readonly',
    queryCollection: 'readonly',
    useRoute: 'readonly',
  },
}
