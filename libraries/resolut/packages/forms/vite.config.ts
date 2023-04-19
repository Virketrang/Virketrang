import { defineConfig } from 'vite';

import { join, resolve } from 'path';
import { readdirSync, existsSync, lstatSync, rmdirSync, unlinkSync } from 'fs';

import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import dts from 'vite-plugin-dts';

import * as packageJson from './package.json';

const config = defineConfig({
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, '../../'),
            },
        ],
    },
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            entryRoot: resolve(__dirname, 'src'),
            skipDiagnostics: false,
            root: '../../../../',
            tsConfigFilePath: join(__dirname, 'tsconfig.json'),
            staticImport: true,
            outputDir: [resolve(__dirname, 'dist'), resolve(__dirname, 'types')],
            rollupTypes: true,
        }),
    ],
    build: {
        sourcemap: true,
        outDir: join(__dirname, 'dist'),
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: '@resolut/forms',
            formats: ['es', 'umd'],
            fileName: format => `resolut.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
            // treeshake: true,
            // plugins: [tsconfigPathsRollup()],
            output: {
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM',
                },
            },
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

function emptyDir(dir: string): void {
    if (!existsSync(dir)) {
        return;
    }

    for (const file of readdirSync(dir)) {
        const abs = resolve(dir, file);

        // baseline is Node 12 so can't use rmSync
        if (lstatSync(abs).isDirectory()) {
            emptyDir(abs);
            rmdirSync(abs);
        } else {
            unlinkSync(abs);
        }
    }
}

export default config;
