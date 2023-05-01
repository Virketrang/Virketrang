import { NextRequest } from 'next/server';

const locales = ['da-DK', 'en-UK', 'de-DE'];

function getLocale(request: NextRequest) {}

export function middleware(request: NextRequest) {}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
