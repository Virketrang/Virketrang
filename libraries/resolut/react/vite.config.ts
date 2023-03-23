import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        lib: {
            entry: 'index.ts',
            name: '@virketrang/resolut-react',
            formats: ['es', 'cjs'],
            fileName: format => `resolut.${format}.js`,
        },
        rollupOptions: {
            // external: ['react', 'react-dom', 'react-router-dom'],
            // output: {
            //     globals: {
            //         'react': 'react',
            //         'react-dom': 'ReactDOM',
            //         'react-router-dom': 'ReactRouterDOM',
            //     },
            // },
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
    },
});
