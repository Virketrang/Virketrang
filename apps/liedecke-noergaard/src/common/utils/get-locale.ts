import { NextRequest } from 'next/server'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import i18n from '@/config/i18n'

export default function getLocale(request: NextRequest): string {
    const negotiatorHeaders: Record<string, string> = {}

    for (const [key, value] of request.headers.entries()) {
        negotiatorHeaders[key] = value
    }

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    return matchLocale(languages, i18n.locales as unknown as string[], i18n.defaultLocale)
}
