'use client';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Content, Header, Logo, Navigation, Toolbar } from '../components';

interface props {
    children: JSX.Element;
}

const RootLayout: FunctionComponent<props> = ({ children }) => {
    return (
        <html lang="da">
            <body>
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
                    </Navigation>
                    <Content>{children}</Content>
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
