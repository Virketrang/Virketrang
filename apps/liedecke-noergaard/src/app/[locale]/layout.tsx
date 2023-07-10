import '@/packages/styles/preset.css'
import '@/packages/styles/focus.css'
import '../../styles.scss'

import { i18n } from '@/config/index'
import { getDictionary } from '@/server'
import { CookieModal, Footer, Header, ShoppingCart, Sidebar } from '@/composables'
import { Font, StoreProvider } from '@/common'
import { Locale } from '@/types'

type LayoutProps = {
    children: React.ReactNode
    params: { locale: Locale }
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({ children, params: { locale } }: LayoutProps) {
    const { navigation, footer, shoppingCart, currency, cookieModal } = await getDictionary(locale)

    return (
        <html lang={locale}>
            <body className={Font.className}>
                <StoreProvider>
                    <Header dictionary={navigation} />
                    <main>{children}</main>
                    <Footer locale={locale} dictionary={footer} />
                    <ShoppingCart locale={locale} dictionaries={{ shoppingCart, currency }} />
                    <Sidebar dictionary={navigation} />
                    <CookieModal dictionary={cookieModal} />
                </StoreProvider>
            </body>
        </html>
    )
}
