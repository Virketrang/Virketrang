import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react'

const config = defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        watch: false,
        coverage: {
            enabled: false
        }
    }
})

export default config
