const tsconfig = require('./tsconfig.json');
let rawAlias = tsconfig.compilerOptions.paths;
let alias = {};

for (let x in rawAlias) {
  alias[x.replace('/*', '')] = rawAlias[x].map(p => p.replace('/*', ''));
}

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
    plugins: [
      'react-native-reanimated/plugin',
      // [
      //   'module-resolver',
      //   {
      //     root: ['./'],
      //     extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      //     alias,
      //   },
      // ],
    ],
    env: {
      production: {},
    },
  };
};
