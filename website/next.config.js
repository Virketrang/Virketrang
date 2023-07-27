/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverActions: true,
        typedRoutes: false
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    reactStrictMode: true,
    output: 'standalone'
}

module.exports = nextConfig
