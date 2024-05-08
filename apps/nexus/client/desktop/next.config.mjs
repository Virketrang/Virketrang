/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    compiler: {},
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.module.rules.push({
                test: /.(jsx|tsx)$/,
                use: {
                    loader: '@swc/loader',
                    options: {
                        jsc: {
                            transform: {
                                optimizer: {
                                    loose: true
                                },
                                react: true
                            },
                            plugin: (resolver) => {
                                resolver.addPlugin({
                                    filename: './plugin.js',
                                    sourceFiles: true
                                })
                            }
                        }
                    }
                }
            })
        }
        return config
    }
}

export default nextConfig
