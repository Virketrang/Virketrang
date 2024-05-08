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
            '@/nexus/client/desktop': fileURLToPath(new URL('./apps/nexus/client/desktop/src', import.meta.url)),
            '@/nexus/client/web': fileURLToPath(new URL('./apps/nexus/client/web/src', import.meta.url)),
            '@/nexus/client/shared': fileURLToPath(new URL('./apps/nexus/client/shared/src', import.meta.url)),
            '@/liedecke-noergaard': fileURLToPath(new URL('./apps/liedecke-noergaard/src', import.meta.url)),
            '@/virketrang': fileURLToPath(new URL('./apps/virketrang/src', import.meta.url)),
            '@': fileURLToPath(new URL('.', import.meta.url))
        }
    }
}

export default config
