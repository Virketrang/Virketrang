import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import unimport from 'unimport/unplugin'
import solid from 'vite-plugin-solid'

import { join, resolve } from 'node:path'
import fs from 'node:fs'

import AutoImport from '../../../../unimport.workspace'

const config = defineConfig({
    publicDir: '../../public',
    build: {
        sourcemap: true,
        minify: true,
        cssMinify: true,
        cssCodeSplit: true,
        outDir: join(__dirname, 'dist'),
        emptyOutDir: true,
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
        solid(),
        unimport.vite({
            imports: [...AutoImport.solid],
            dts: true
        }) as any,
        dts({
            rollupTypes: true,
            copyDtsFiles: true,
            afterBuild: () => {
                const declarationFile = fs.readFileSync('./dist/index.d.ts').toString().split('\n')

                const declarations = declarationFile.join('\n')

                fs.writeFile('./dist/index.d.ts', declarations, function (err) {
                    if (err) return console.log(err)
                })

                const globalReactDeclarations = fs.readFileSync('./src/declarations.d.ts').toString()
                const globalResolutDeclartions = fs.readFileSync('../../types/declarations.d.ts').toString()

                fs.writeFile(
                    './dist/index.d.ts',
                    declarations + '\n' + globalReactDeclarations.replace('export {}', ''),
                    function (err) {
                        if (err) return console.log(err)
                    }
                )

                fs.writeFile(
                    './dist/index.d.ts',
                    declarations +
                        '\n' +
                        globalReactDeclarations.replace('export {}', '') +
                        '\n' +
                        globalResolutDeclartions.replace('export {}', ''),
                    function (err) {
                        if (err) return console.log(err)
                    }
                )
            }
        })
    ]
})

export default config
