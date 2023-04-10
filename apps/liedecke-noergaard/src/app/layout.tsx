import '@styles/globals.sass';
import '@resolut/next/style.css';

import { ReactNode } from 'react';
import Link from 'next/link';

import { Icon, Logo, Navigation, Toolbar } from '@components';
import { Header } from '@resolut/next';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="da">
            <body>
                <main>
                    <Header backgroundColor="#08244b" height="6rem">
                        <Toolbar></Toolbar>
                        <Logo>Liedecke & Noergaard</Logo>
                        <Toolbar>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="32"
                                viewBox="0 96 960 960"
                                width="32"
                                style={{ fill: 'white' }}>
                                <path d="M220 976q-24 0-42-18t-18-42V396q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480 176q63 0 106.5 43.5T630 326v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520V396H630v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T570 486v-90H390v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T330 486v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220 916V396v520Z" />
                            </svg>
                        </Toolbar>
                    </Header>
                    <Navigation>
                        <Link href="/offers">Tilbud</Link>
                        <Link href="/confecture">Konfekture</Link>
                        <Link href="/utensils">Husgeråd</Link>
                        <Link href="/cider">Cider</Link>
                        <Link href="/recipes">Opskrifter</Link>
                    </Navigation>
                    {children}
                </main>
            </body>
        </html>
    );
}
