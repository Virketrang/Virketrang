import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import autoprefixer from 'autoprefixer';

import * as packageJson from './package.json';

export default defineConfig({
    plugins: [react(), tsconfigPaths({})],
    build: {
        outDir: 'dist',
        lib: {
            entry: 'index.ts',
            name: '@resolut/shared',
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
        postcss: {
            plugins: [autoprefixer()],
        },
    },
});
