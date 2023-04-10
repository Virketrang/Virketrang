import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import autoprefixer from 'autoprefixer';
import dts from 'vite-plugin-dts';

import * as packageJson from './package.json';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            tsConfigFilePath: './tsconfig.json',
        }),
        tsconfigPaths(),
    ],
    build: {
        outDir: 'dist',
        sourcemap: true,
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
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
        postcss: {
            plugins: [autoprefixer()],
        },
    },
});
