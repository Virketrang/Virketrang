import { defineConfig } from 'vitest/config'

const config = defineConfig({
    plugins: [],
    test: {
        environment: 'jsdom',
        watch: false,
        coverage: {
            enabled: true
        }
    }
})

export default config
