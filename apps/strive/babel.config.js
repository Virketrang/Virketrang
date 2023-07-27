process.env.EXPO_ROUTER_APP_ROOT = '../../src/app'

module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            '@babel/plugin-proposal-export-namespace-from',
            'react-native-reanimated/plugin',
            require.resolve('expo-router/babel'),
            [
                'module-resolver',
                {
                    root: ['.'],
                    alias: {
                        '@components': './components'
                    }
                }
            ],
            ['module:react-native-dotenv', { moduleName: '@env', path: '../../.env' }]
        ]
    }
}
