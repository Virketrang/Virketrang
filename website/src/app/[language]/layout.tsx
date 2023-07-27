import '@packages/css/preset.css'
import '@packages/css/focus.css'
import '../globals.sass'

import { i18n } from '@i18n'
import { Locale } from '@types'
import getDictionary from '@server-only/get-dictionary'
import { AppFooter, AppHeader } from '@/features'

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ language: locale }))
}

export default async function Layout({
    children,
    params
}: {
    children: React.ReactNode
    params: { language: Locale }
}) {
    const { navigation } = await getDictionary(params.language)

    return (
        <html lang={params.language}>
            <body>
                <AppHeader locale={params.language} navigation={navigation} />
                {children}
                <AppFooter />
            </body>
        </html>
    )
}
