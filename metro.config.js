const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const {withNativeWind} = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const config = mergeConfig(defaultConfig, {
  // Add any additional config here if needed
});

const reanimatedConfig = wrapWithReanimatedMetroConfig(config);
const finalConfig = withNativeWind(reanimatedConfig, {input: './global.css'});

module.exports = finalConfig;
