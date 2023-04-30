import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import path, { join, resolve } from 'path';

const config = defineConfig({
    resolve: {
        alias: {
            styles: path.resolve(__dirname, '../../styles'),
            types: path.resolve(__dirname, '../../types'),
            logic: path.resolve(__dirname, '../../logic'),
            utils: path.resolve(__dirname, '../../utils'),
        },
    },
    build: {
        sourcemap: true,
        outDir: join(__dirname, 'dist'),
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: '@resolut/server',
            formats: ['es', 'umd'],
            fileName: format => `resolut.${format}.js`,
        },
    },
    plugins: [react(), vanillaExtractPlugin(), dts({ insertTypesEntry: true, root: resolve(__dirname, '../../') })],
});

export default config;
