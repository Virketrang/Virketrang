import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import * as packageJson from './package.json';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        lib: {
            entry: 'index.ts',
            name: '@resolut/forms',
            formats: ['es', 'cjs'],
            fileName: format => `resolut.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
        },
    },
});
