'use client';
import '@styles/globals.sass';

import { ReactNode, createRef, useState } from 'react';

import { AppFooter, AppHeader, AppNavigation } from '@features/index';
import { ShoppingCart } from '@components';

export default function RootLayout({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const body = createRef<HTMLBodyElement>();

    return (
        <html lang="da">
            <body ref={body}>
                <AppHeader setOpen={setOpen} />
                <AppNavigation />
                <main>{children}</main>
                <AppFooter />
                <ShoppingCart open={open} setOpen={setOpen} />
            </body>
        </html>
    );
}
