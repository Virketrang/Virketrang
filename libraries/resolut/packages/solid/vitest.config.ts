import { defineConfig } from 'vitest/config'

const config = defineConfig({
    plugins: [],
    test: {
        environment: 'jsdom',
        watch: false,
        coverage: {
            enabled: false
        }
    }
})

export default config
