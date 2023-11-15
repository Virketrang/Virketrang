import '../../styles.scss'
import '@resolut/react/styles'

import { i18n } from '@/config'
import { getDictionary } from '@/liedecke-noergaard/server'
import { CookieModal, Footer, Header, ShoppingCart, Sidebar } from '@/liedecke-noergaard/composables'
import { Font, StoreProvider } from '@/liedecke-noergaard/common'

type LayoutProps = {
    children: React.ReactNode
    params: { locale: Workspace.I18N.Locale }
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
