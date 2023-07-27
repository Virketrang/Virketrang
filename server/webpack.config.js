const swcDefaultConfig = require('@nestjs/cli/lib/compiler/defaults/swc-defaults').swcDefaultsFactory().swcOptions

module.exports = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'swc-loader',
                    options: swcDefaultConfig
                }
            }
        ]
    },
    plugins: [
        require('unimport/unplugin').default.webpack({
            imports: [
                { name: 'NestFactory', from: '@nestjs/core' },
                { name: 'Entity', from: 'typeorm' }
            ],
            dts: true
        })
    ]
}
