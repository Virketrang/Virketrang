/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    output: 'export',
    reactStrictMode: true,
    distDir: 'dist',
    assetPrefix: '.'
}

module.exports = nextConfig
