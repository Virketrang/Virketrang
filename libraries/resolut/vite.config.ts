import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import * as packageJson from './package.json';
import { join } from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        lib: {
            entry: join(__dirname, 'index.ts'),
            name: 'resolut',
            formats: ['es', 'cjs'],
            fileName: format => `resolut.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
    },
});
