import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react'
import Unimport from 'unimport/unplugin'

const config = defineConfig({
    plugins: [
        react(),
        Unimport.vite({
            dts: true,
            imports: [
                { name: 'useState', from: 'react' },
                { name: 'useEffect', from: 'react' },
                { name: 'memo', from: 'react' },
                { name: 'createContext', from: 'react' },
                { name: 'useContext', from: 'react' },
                { name: 'useReducer', from: 'react' },
                { name: 'createRef', from: 'react' },
                { name: 'default', as: 'Image', from: 'next/image' },
                { name: 'default', as: 'Link', from: 'next/link' },
                { name: 'usePathname', from: 'next/navigation' },
                { name: 'useRouter', from: 'next/navigation' },
                { name: 'NextRequest', from: 'next/server' },
                { name: 'NextResponse', from: 'next/server' }
            ]
        }) as any
    ],
    test: {
        environment: 'jsdom',
        watch: false,
        coverage: {
            enabled: true
        }
    }
})

export default config
