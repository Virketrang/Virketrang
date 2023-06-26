import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

import { join, resolve } from 'node:path'

const config = defineConfig({
    resolve: {
        alias: {
            styles: resolve(__dirname, '../../styles'),
            types: resolve(__dirname, '../../types'),
            utils: resolve(__dirname, '../../utils')
        }
    },
    build: {
        sourcemap: true,
        outDir: join(__dirname, 'dist'),
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: '@resolut/client',
            formats: ['es', 'cjs'],
            fileName: (format) => `${format}.js`
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    },
    plugins: [
        react(),
        dts({
            entryRoot: 'src',
            tsConfigFilePath: resolve(__dirname, 'tsconfig.json'),
            skipDiagnostics: true
        })
    ]
})

export default config
