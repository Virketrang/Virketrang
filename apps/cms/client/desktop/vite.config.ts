import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@pages': 'src/renderer/pages',
            '@components': 'src/renderer/components',
            '@layouts': 'src/renderer/layouts',
            '@interfaces': 'src/renderer/interfaces',
            '@features': 'src/renderer/features',
            '@pages/*': 'src/renderer/pages/*',
            '@components/*': 'src/renderer/components/*',
            '@layouts/*': 'src/renderer/layouts/*',
            '@interfaces/*': 'src/renderer/interfaces/*',
            '@features/*': 'src/renderer/features/*',
            '@packages/*': path.resolve(__dirname, '../../../../packages/*'),
            '@packages': path.resolve(__dirname, '../../../../packages'),
        },
    },
    plugins: [react({ include: ['./src/renderer', './src/assets'] })],
    build: {
        outDir: './build',
        assetsDir: './assets',
    },
});
