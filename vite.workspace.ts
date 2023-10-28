import { fileURLToPath } from 'node:url'
import { UserConfig } from 'vite'

const config: UserConfig = {
    resolve: {
        alias: {
            '@/config': fileURLToPath(new URL('./config', import.meta.url)),
            '@/fonts': fileURLToPath(new URL('./packages/fonts', import.meta.url)),
            '@/css': fileURLToPath(new URL('./packages/css', import.meta.url)),
            '@/enums': fileURLToPath(new URL('./packages/enums', import.meta.url)),
            '@/nexus/server': fileURLToPath(new URL('./apps/nexus/server/src', import.meta.url)),
            '@/nexus/client': fileURLToPath(new URL('./apps/nexus/client/src', import.meta.url)),
            '@/liedecke-noergaard': fileURLToPath(new URL('./apps/liedecke-noergaard/src', import.meta.url)),
            '@/website': fileURLToPath(new URL('./apps/website/src', import.meta.url)),
            '@': fileURLToPath(new URL('.', import.meta.url))
        }
    }
}

export default config
