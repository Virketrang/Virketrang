import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {},
    plugins: [react({ include: ['./src/renderer', './src/assets'] }), tsconfigPaths({ root: '.' })],
    build: {
        outDir: './build',
        assetsDir: './assets',
    },
});
