import { defineConfig } from 'vitest/config';

const config = defineConfig({
    test: {
        watch: false,
        coverage: {
            enabled: true,
        },
        environment: 'jsdom',
    },
});

export default config;
