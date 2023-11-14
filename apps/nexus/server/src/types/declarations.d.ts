declare global {
    namespace Nexus {
        type Request = import('express').Request
        type Response = import('express').Response
    }

    type Hono = import('hono').Hono
}

export {}
