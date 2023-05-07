/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverActions: true,
        typedRoutes: true
    },
    reactStrictMode: true
}

module.exports = nextConfig
