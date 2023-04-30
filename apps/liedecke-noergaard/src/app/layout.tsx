import '@styles/globals.sass';

import { ReactNode } from 'react';

import { AppFooter, AppHeader, AppNavigation } from '@features/index';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="da">
            <body>
                <AppHeader />
                <AppNavigation />
                <main>{children}</main>
                <AppFooter />
            </body>
        </html>
    );
}
