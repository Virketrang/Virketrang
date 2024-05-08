const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);
const {resolver} = config;

const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');

const symlinkResolver = MetroSymlinksResolver();

const requestResolver = (context, moduleName, platform, realName) => {
    if (moduleName === '@unimodules/core') {
        const expoModules = 'expo-modules-core';
        return symlinkResolver(context, expoModules, platform, expoModules);
    }

    return symlinkResolver(context, moduleName, platform, realName);
};

config.projectRoot = __dirname;

config.resolver = {
    ...resolver,
    resolveRequest: requestResolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg', 'd.ts'],
};

config.transformer = {
    ...config.transformer,
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
};

module.exports = config
