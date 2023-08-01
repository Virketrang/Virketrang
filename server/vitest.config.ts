import { defineConfig } from 'vitest/config'

import tsconfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
    plugins: [tsconfigPaths()],
    test: { globals: true, watch: false, coverage: { enabled: true } }
})

export default config
