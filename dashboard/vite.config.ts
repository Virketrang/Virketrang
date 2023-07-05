import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unimport from 'unimport/unplugin'

export default defineConfig(async () => ({
    plugins: [
        react(),
        Unimport.vite({
            imports: [
                { name: 'default', as: 'React', from: 'react' },
                { name: 'useState', from: 'react' },
                { name: 'useCallback', from: 'react' },
                { name: 'useEffect', from: 'react' },
                { name: 'memo', from: 'react' },
                { name: 'Fragment', from: 'react' },
                { name: 'createRef', from: 'react' },
                { name: 'createElement', from: 'react' },
                { name: 'createPortal', from: 'react-dom' },
                { name: 'createRoot', from: 'react-dom/client' },
                { name: 'createBrowserRouter', from: 'react-router-dom' },
                { name: 'NavLink', from: 'react-router-dom' },
                { name: 'Link', from: 'react-router-dom' },
                { name: 'useNavigate', from: 'react-router-dom' },
                { name: 'Outlet', from: 'react-router-dom' },
                { name: 'useOutletContext', from: 'react-router-dom' },
                { name: 'RouterProvider', from: 'react-router-dom' },
                { name: 'default', as: 'useSWR', from: 'swr' }
            ],
            dts: true
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@packages': fileURLToPath(new URL('../packages', import.meta.url))
        }
    },
    clearScreen: false,
    server: {
        port: 1420,
        strictPort: true
    },
    envPrefix: ['VITE_', 'TAURI_'],
    build: {
        target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
        minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
        sourcemap: !!process.env.TAURI_DEBUG
    }
}))
