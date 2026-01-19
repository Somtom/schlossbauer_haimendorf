module.exports = {
  extends: ['stylelint-config-standard'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'tailwind',
          'apply',
          'layer',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'block-no-empty': null,
    'unit-allowed-list': ['em', 'rem', 's', 'px', '%', 'vh', 'vw', 'deg'],
    'rule-empty-line-before': null,
    'at-rule-empty-line-before': null,
  },
}
