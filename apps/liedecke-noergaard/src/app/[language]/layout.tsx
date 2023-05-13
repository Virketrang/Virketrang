import '@packages/styles/next.sass'

import { ReactNode } from 'react'

import { AppFooter, AppHeader, AppNavigation } from '@features/index'
import i18n from '@config/i18n'
import { getDictionary } from '../../server-only'
import { Locale } from '@types'

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ language: locale }))
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: { language: Locale } }) {
    const { navigation, shoppingCart } = await getDictionary(params.language)

    return (
        <html lang="da">
            <body>
                <AppHeader />
                <AppNavigation navigation={navigation} />
                <main>{children}</main>
                <AppFooter />
            </body>
        </html>
    )
}
