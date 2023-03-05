import '@styles/globals.sass';

import { ReactNode, Suspense } from 'react';
import Link from 'next/link';

import RootLoader from './loader';
import { Content, Header, Logo, Navigation, Toolbar } from '@components';
import RootStyleRegistry from './jss';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="da">
            <body>
                <RootStyleRegistry>
                    <main>
                        <Header>
                            <Toolbar></Toolbar>
                            <Logo>Liedecke & Noergaard</Logo>
                            <Toolbar></Toolbar>
                        </Header>
                        <Navigation>
                            <Link href="/konfekture">Konfekture</Link>
                            <Link href="/håndværk">Håndværk</Link>
                            <Link href="/cider">Cider</Link>
                            <Link href="/recipes">Opskrifter</Link>
                        </Navigation>
                        <Suspense fallback={<RootLoader />}>
                            <Content>{children}</Content>
                        </Suspense>
                    </main>
                </RootStyleRegistry>
            </body>
        </html>
    );
}
