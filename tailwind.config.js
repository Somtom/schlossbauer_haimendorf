/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  content: [
    'content/**/*.md',
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
  ],
  theme: {
    extend: {
      height: {
        80: '20rem',
        96: '24rem',
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
