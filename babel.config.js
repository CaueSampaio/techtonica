module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@config': './src/config',
          '@screens': './src/screens',
        },
      },
    ],
    ['import', {libraryName: '@ant-design/react-native'}],
  ],
};
