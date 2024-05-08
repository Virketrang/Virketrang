import { defineConfig } from 'astro/config'

import solid from '@astrojs/solid-js'

import unimport from 'unimport/unplugin'
import autoprefixer from 'autoprefixer'
import { writeFileSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

import workspaceConfig from '../../../vite.workspace'
import AutoImport from '../../../unimport.workspace'

let allMatches = new Set()
let transformPromises = []

function writeCSS() {
    Promise.all(transformPromises).then(() => {
        let css = ''

        const __dirname = dirname(fileURLToPath(import.meta.url))
        const cssFilePath = resolve(__dirname, 'dist', 'attributes.css')

        let existingCss = ''
        try {
            existingCss = readFileSync(cssFilePath, 'utf-8') || ''
        } catch (err) {
            // File might not exist yet, ignore the error
        }

        const existingMatches = Array.from(
            existingCss.matchAll(/\[\s*([\w-]+)="([^"]+)"\s*\]/g),
            (m) => `${m[1]}="${m[2]}"`
        )

        console.log('EXISTING MATCHES: ', existingMatches)
        console.log('ALL_MATCHES: ', allMatches)
        console.log('MATCHES TOTAL: ', allMatches.size)

        allMatches.forEach((match) => {
            // Only add the match to the CSS if it's not already in the existing CSS
            if (!existingMatches.includes(match)) {
                const [fullMatch, attribute, value] = match.match(/([\w-]+)="([^"]+)"/)
                css += `*[${attribute}="${value}"] { ${attribute}: ${value}; }\n`
            }
        })

        writeFileSync(resolve(__dirname, 'dist', 'attributes.css'), existingCss + css)
    })
}

const myPlugin = {
    name: 'transform-styles',
    enforce: 'pre',

    transform(code, id) {
        const transformPromise = new Promise((resolve) => {
            if (!id.endsWith('.html') && !id.endsWith('.tsx') && !id.endsWith('.jsx') && !id.endsWith('.astro')) {
                resolve()
                return
            }

            const attributes = [
                'margin-left',
                'margin-right',
                'margin-top',
                'margin-bottom',
                'margin-inline',
                'margin-block',
                'margin',
                'padding-left',
                'padding-right',
                'padding-top',
                'padding-bottom',
                'padding-inline',
                'padding-block',
                'padding',
                'gap',
                'left',
                'right',
                'top',
                'bottom',
                'inset',
                'border-radius',
                'min-width',
                'min-height',
                'max-width',
                'max-height',
                'width',
                'height',
                'grid-template-columns',
                'grid-template-rows',
                'font-size',
                'z-index',
                'opacity'
            ]

            const element_regex = new RegExp(`<[^>]*\\b(${attributes.join('|')})\\b="[^"]*"[^>]*>`, 'g')
            const elements = code.match(element_regex)

            if (!elements) {
                resolve()
                return {
                    code: code,
                    map: null
                }
            }

            const regex = new RegExp(`\\b(${attributes.join('|')})\\b="([^"]*)"`, 'g')

            const elements_as_string = elements.flat().join('')

            const matches = elements_as_string.match(regex)

            if (!matches) {
                resolve()
                return {
                    code: code,
                    map: null
                }
            }

            matches.forEach((match) => allMatches.add(match))

            resolve()

            return {
                code: code,
                map: null
            }
        })

        transformPromises.push(transformPromise)

        return transformPromise
    },
    configureServer(server) {
        server.watcher.on('change', (file) => {
            if (file !== resolve(process.cwd(), 'dist', 'attributes.css')) {
                Promise.all(transformPromises).then(() => {
                    writeCSS(allMatches)
                })
            }
        })
    },
    writeBundle() {
        writeCSS()
    },
    transformIndexHtml(html) {
        console.log('TRANSFORMING INDEX HTML')
        return html.replace('</head>', '<link rel="stylesheet" href="/attributes.css"></head>')
    },
    handleHotUpdate({ file, server }) {
        if (file.endsWith('.html') || file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.astro')) {
            server.ws.send({
                type: 'full-reload',
                path: '*'
            })
        }
    }
}

// https://astro.build/config
export default defineConfig({
    integrations: [solid({})],
    output: 'static',
    vite: {
        plugins: [
            unimport.vite({
                dirs: ['../../../packages/enums', './src/stores', 'src/common'],
                imports: [...AutoImport.nanostores, ...AutoImport.resolut, ...AutoImport.solid],
                dts: true
            }),
            myPlugin
        ],
        server: {
            watch: {
                ignored: ['**/target/**']
            },
            port: 4321,
            strictPort: true
        },
        resolve: workspaceConfig.resolve,
        clearScreen: false,
        envPrefix: ['VITE_', 'TAURI_'],
        build: {
            target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
            minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
            sourcemap: !!process.env.TAURI_DEBUG
        },
        css: {
            postcss: {
                plugins: [autoprefixer]
            }
        }
    }
})
