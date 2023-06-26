import { NextRequest, NextResponse } from 'next/server'

import { getLocale } from '@/common/utils/index'
import i18n from '@/config/i18n'

// @ts-ignore not all code paths return a value.
export const middleware = (request: NextRequest) => {
    const pathname = request.nextUrl.pathname

    if (['/manifest.json', '/favicon.ico', '/logo.svg'].includes(pathname)) return

    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
