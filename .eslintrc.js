module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': 'vuetify',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eslint-disable-next-line': 'off',
    'indent': [2, 4]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
