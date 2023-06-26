/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        typedRoutes: false,
        externalDir: true
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'storage.cloud.google.com', pathname: '/liedecke-noergaard/**', port: '' }
        ],
        formats: ['image/avif', 'image/webp']
    },
    distDir: './dist',
    reactStrictMode: true
}

module.exports = nextConfig
