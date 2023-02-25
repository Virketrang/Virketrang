/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    distDir: './build',
    reactStrictMode: false,
};

module.exports = nextConfig;
