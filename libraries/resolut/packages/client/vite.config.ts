import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import { join, resolve } from 'path';

const config = defineConfig({
    resolve: {
        alias: {
            styles: resolve(__dirname, '../../styles'),
            types: resolve(__dirname, '../../types'),
            utils: resolve(__dirname, '../../utils'),
        },
    },
    build: {
        sourcemap: true,
        outDir: join(__dirname, 'dist'),
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: '@resolut/client',
            formats: ['es', 'cjs', 'umd'],
            fileName: format => `${format}.js`,
        },
    },
    plugins: [react()],
});

export default config;
