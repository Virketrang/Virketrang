import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import Unimport from 'unimport/unplugin'
import dts from 'vite-plugin-dts'
import { join, resolve } from 'node:path'

const config = defineConfig({
    resolve: {
        alias: [
            { find: '@/styles', replacement: resolve(__dirname, '../../styles') },
            { find: '@/types', replacement: resolve(__dirname, '../../types') },
            { find: '@/utils', replacement: resolve(__dirname, '../../utils') },
            { find: '@/packages', replacement: resolve(__dirname, '../../../../packages') },
            { find: '@', replacement: resolve(__dirname, './src') }
        ]
    },
    build: {
        outDir: join(__dirname, 'dist'),
        minify: false,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Resolut',
            formats: ['umd', 'cjs', 'es', 'iife'],
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
        Unimport.vite({
            imports: [
                { name: 'default', as: 'React', from: 'react' },
                { name: 'useState', from: 'react' },
                { name: 'forwardRef', from: 'react' },
                { name: 'useCallback', from: 'react' },
                { name: 'useEffect', from: 'react' },
                { name: 'memo', from: 'react' },
                { name: 'Fragment', from: 'react' },
                { name: 'Suspense', from: 'react' },
                { name: 'createRef', from: 'react' },
                { name: 'createElement', from: 'react' },
                { name: 'useContext', from: 'react' },
                { name: 'useReducer', from: 'react' },
                { name: 'useMemo', from: 'react' },
                { name: 'useRef', from: 'react' },
                { name: 'Children', from: 'react' },
                { name: 'createPortal', from: 'react-dom' },
                { name: 'createContext', from: 'react-dom' }
            ],
            dirs: ['./src'],
            dts: true
        }),
        dts({
            entryRoot: 'src',
            tsConfigFilePath: resolve(__dirname, 'tsconfig.json'),
            skipDiagnostics: true
        })
    ]
})

export default config
