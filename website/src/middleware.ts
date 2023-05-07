import { NextRequest, NextResponse } from 'next/server'

const DEFAULT_LOCALE = 'da'

export const middleware = (request: NextRequest) => NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url))

export const config = {
    matcher: ['/']
}
