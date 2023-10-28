import { defineConfig } from 'vite'

import { join, resolve } from 'path'

import dts from 'vite-plugin-dts'

const config = defineConfig({
    build: {
        sourcemap: true,
        outDir: join(__dirname, 'dist'),
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'flutter-colors',
            formats: ['es', 'cjs', 'umd'],
            fileName: (format) => `${format}.js`
        }
    },
    plugins: [dts()]
})

export default config
