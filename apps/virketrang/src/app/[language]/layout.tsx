import '@/css/preset.css'
import '@/css/focus.css'
import '@/website/app/globals.sass'

import { i18n } from '@/config'
import { getDictionary } from '@/website/server-only'
import { AppFooter, AppHeader } from '@/website/features'

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ language: locale }))
}

export default async function Layout({
    children,
    params
}: {
    children: React.ReactNode
    params: { language: Workspace.I18N.Locale }
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
