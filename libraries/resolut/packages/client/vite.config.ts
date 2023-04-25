import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'path';

const config = defineConfig({
    resolve: {
        alias: {
            styles: path.resolve(__dirname, '../../styles'),
            types: path.resolve(__dirname, '../../types'),
        },
    },
    plugins: [react()],
});

export default config;
