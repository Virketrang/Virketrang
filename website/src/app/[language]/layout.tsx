import '@packages/styles/next.sass'

import { Locale, i18n, getDictionary } from '@i18n'
import { AppHeader } from '@/components'

export const metadata = {
    title: 'Virketrang | Forside',
    description: 'Forsiden til virketrang.com'
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ language: locale }))
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: { language: Locale }
}) {
    const { navigation } = await getDictionary(params.language)

    return (
        <html lang="en">
            <body>
                <AppHeader locale={params.language} navigation={navigation} />
                {children}
            </body>
        </html>
    )
}
