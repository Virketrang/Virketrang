import { defineConfig } from 'astro/config'
import unimport from 'unimport/unplugin'
import autoprefixer from 'autoprefixer'
import solid from '@astrojs/solid-js'

import workspaceConfig from '../../../vite.workspace'
import AutoImport from '../../../unimport.workspace'

// https://astro.build/config
export default defineConfig({
    integrations: [solid()],
    vite: {
        plugins: [
            unimport.vite({
                imports: [...AutoImport.nanostores, ...AutoImport.resolut],
                dts: true
            })
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
