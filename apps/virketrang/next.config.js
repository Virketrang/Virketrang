/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverActions: true,
        typedRoutes: false,
        externalDir: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    reactStrictMode: true,
    webpack: (config, options) => {
        config.plugins.push(
            require('unimport/unplugin').default.webpack({
                dts: true,
                imports: [
                    { name: 'useState', from: 'react' },
                    { name: 'useEffect', from: 'react' },
                    { name: 'memo', from: 'react' },
                    { name: 'createContext', from: 'react' },
                    { name: 'useContext', from: 'react' },
                    { name: 'useReducer', from: 'react' },
                    { name: 'createRef', from: 'react' },
                    { name: 'default', as: 'Image', from: 'next/image' },
                    { name: 'default', as: 'Link', from: 'next/link' },
                    { name: 'usePathname', from: 'next/navigation' },
                    { name: 'useRouter', from: 'next/navigation' },
                    { name: 'NextRequest', from: 'next/server' },
                    { name: 'NextResponse', from: 'next/server' }
                ]
            })
        )

        return config
    }
}

module.exports = nextConfig
