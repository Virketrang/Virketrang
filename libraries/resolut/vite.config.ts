import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import unimport from 'unimport/unplugin'

import { join, resolve } from 'path'
import fs from 'fs'

import AutoImport from '../../unimport.workspace'

const config = defineConfig({
    build: {
        sourcemap: true,
        minify: false,
        outDir: join(__dirname, 'dist'),
        assetsDir: 'src/styles',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'resolut',
            formats: ['es'],
            fileName: 'index.js'
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
    define: {},
    plugins: [
        react(),
        unimport.vite({
            imports: [...AutoImport.react],
            dts: true
        }) as any,
        dts({
            entryRoot: './src',
            rollupTypes: true,
            copyDtsFiles: true,
            afterBuild: () => {
                const declarationFile = fs.readFileSync('./dist/index.d.ts').toString().split('\n')

                declarationFile.splice(0, 0, "import React from 'react';")

                const declarations = declarationFile.join('\n')

                fs.writeFile('./dist/index.d.ts', declarations, function (err) {
                    if (err) return console.log(err)
                })

                const globalDeclarations = fs.readFileSync('./src/declarations.d.ts').toString()

                fs.writeFile(
                    './dist/index.d.ts',
                    declarations + '\n' + globalDeclarations.replace('export {}', ''),
                    function (err) {
                        if (err) return console.log(err)
                    }
                )
            }
        })
    ]
})

export default config
