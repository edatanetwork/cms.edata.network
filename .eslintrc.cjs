module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 0,
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-constant-condition': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn'
  }
}
