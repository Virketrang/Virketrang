/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'storage.cloud.google.com', pathname: '/liedecke-noergaard/**', port: '' },
        ],
        formats: ['image/avif', 'image/webp'],
    },
    distDir: './build',
    reactStrictMode: false,
};

module.exports = nextConfig;
