/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverActions: true,
        typedRoutes: false
    },
    reactStrictMode: true
}

module.exports = nextConfig
