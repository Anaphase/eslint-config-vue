module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@anaphase/eslint-config-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  // this is needed to override the vue/script-indent rule below
  //  see: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-indent.md
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
  // this setting gets in-editor linting to work for Atom, which doesn't seem to
  //  like @ aliases in imports
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
  rules: {
    // make 1 level of indentation required in script tags, since they are
    //  already required in template tags
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
  },
}
