import '@styles/globals.sass';

import { ReactNode } from 'react';

import { AppFooter, AppHeader, AppNavigation } from '@features/index';
import { Locale, getDictionary, i18n } from '@i18n/index';

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({ language: locale }));
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: { language: Locale } }) {
    const { navigation, shoppingCart } = await getDictionary(params.language);

    return (
        <html lang="da">
            <body>
                <AppHeader />
                <AppNavigation navigation={navigation} />
                <main>{children}</main>
                <AppFooter />
            </body>
        </html>
    );
}
