module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      'react-native-iconify/plugin',
      require.resolve("expo-router/babel"),
    ],
  };
};
