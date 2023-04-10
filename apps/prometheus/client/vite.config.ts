import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {},
    plugins: [react({ include: ['./src/renderer', './src/assets', '../../../packages'] }), tsconfigPaths({})],
    server: {
        port: 4000,
    },
    build: {
        outDir: './build',
        assetsDir: './assets',
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
        postcss: {
            plugins: [autoprefixer()],
        },
    },
});
