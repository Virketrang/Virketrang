import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react'

const config = defineConfig({
    plugins: [react() as any],
    test: {
        environment: 'jsdom',
        watch: false,
        coverage: {
            enabled: true
        }
    }
})

export default config
