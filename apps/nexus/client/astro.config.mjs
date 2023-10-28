import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import unimport from 'unimport/unplugin'
import autoprefixer from 'autoprefixer'

import workspaceConfig from '../../../vite.workspace'
import AutoImport from '../../../unimport.workspace'

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        plugins: [
            unimport.vite({
                imports: [...AutoImport.react, ...AutoImport.swc, ...AutoImport.nanostores, ...AutoImport.resolut],
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
