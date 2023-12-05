import type _Hono from 'hono'
import type _Zod from 'zod'
import type _GoogleCloud from '@google-cloud/storage'

declare global {
    type Hono = import('hono').Hono

    interface PropertyDescriptor {
        protected?: Hono.Middleware
        validator?: Hono.Middleware
    }

    namespace NodeJS {
        interface ProcessEnv {
            PORT: string
            HOST: string
            NODE_ENV: 'development' | 'production'
            JWT_SECRET: string
            BUCKET_NAME: string
            DATABASE_HOST: string
            DATABASE_PORT: string
            DATABASE_NAME: string
            DATABASE_USERNAME: string
            DATABASE_PASSWORD: string
            GOOGLE_CLOUD_STORAGE_ACCOUNT_TYPE: string
            GOOGLE_CLOUD_STORAGE_ACCOUNT_PROJECT_ID: string
            GOOGLE_CLOUD_STORAGE_ACCOUNT_PRIVATE_KEY_ID: string
            GOOGLE_CLOUD_STORAGE_ACCOUNT_PRIVATE_KEY: string
            GOOGLE_CLOUD_STORAGE_ACCOUNT_CLIENT_EMAIL: string
            GOOGLE_CLOUD_STORAGE_ACCOUNT_CLIENT_ID: string
            GOOGLE_CLOUD_STORAGE_ACCOUNT_AUTH_URI: string
            GOOGLE_CLOUD_STORAGE_ACCOUNT_TOKEN_URI: string
            GOOGLE_CLOUD_STORAGE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL: string
            GOOGLE_CLOUD_STORAGE_ACCOUNT_CLIENT_X509_CERT_URL: string
            GOOGLE_CLOUD_STORAGE_ACCOUNT_UNIVERSE_DOMAIN: string
        }
    }

    abstract class HonoController {
        public static readonly router: Hono
        public static readonly service?: any
        public static readonly repository?: any
        public static routes?: () => void
    }

    export import Hono = _Hono
    export import z = _Zod
    export import GoogleCloud = _GoogleCloud

    namespace JSON {
        interface Body<T> {
            in: {
                json: z.SafeParseSuccess<T> | z.SafeParseError<T>
            }
            out: {
                json: z.SafeParseSuccess<T> | z.SafeParseError<T>
            }
        }
    }
}

declare module 'hono' {
    interface HonoRequest {
        user?: Entity.User
        company?: Entity.Company
        companies?: Entity.Company[]
    }
}

export {}
