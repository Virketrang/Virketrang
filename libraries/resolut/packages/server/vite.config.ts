import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

const config = defineConfig({
    resolve: {
        alias: {
            styles: path.resolve(__dirname, '../../styles'),
            types: path.resolve(__dirname, '../../types'),
        },
    },
    plugins: [react(), vanillaExtractPlugin()],
});

export default config;
