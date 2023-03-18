module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
  },
  rules: {},
};
