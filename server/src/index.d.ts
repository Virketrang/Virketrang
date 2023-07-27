declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SERVER_PORT: number
            POSTGRES_USER: string
            POSTGRES_HOST: string
            POSTGRES_PASSWORD: string
            POSTGRES_DATABASE: string
            POSTGRES_PORT: number
            POSTGRES_URL: string
        }
    }
}

export {}
