module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'react-native/react-native': true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },

    'react-native/style-sheet-object-names': ['EStyleSheet'],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'react-native', 'jest', 'import', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'error',
    eqeqeq: ['error', 'always'],
    'import/no-unresolved': 2,
    'no-console': 2,
    'promise/prefer-await-to-then': 2,
    'promise/no-nesting': 2,
    'react/jsx-curly-brace-presence': [
      'error',
      {props: 'never', children: 'ignore'},
    ],
    'react/prop-types': ['off'],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 1,
    'react-native/no-inline-styles': 1,
    'react-native/no-raw-text': 1,
    'react-native/no-single-element-style-arrays': 1,
    'require-await': 2,
  },
};
