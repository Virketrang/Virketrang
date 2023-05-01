import './globals.sass';

import { Header } from '@resolut/server';

import { Locale, i18n, getDictionary } from '@i18n';
import Link from 'next/link';
import Colors from '@resolut/colors';

export const metadata = {
    title: 'Virketrang | Forside',
    description: 'Forsiden til virketrang.com',
};

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({ language: locale }));
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { language: Locale };
}) {
    const { navigation } = await getDictionary(params.language);

    return (
        <html lang="en">
            <body>
                <Header horizontalAlignment="space-evenly" backgroundColor={Colors.deepPurpleAccent[100]}>
                    <Link href="/">{navigation.projects}</Link>
                    <Link href="/">{navigation.team}</Link>
                    <Link href="/">{navigation.philosophy}</Link>
                    <Link href="/">{navigation.contact}</Link>
                </Header>
                {children}
            </body>
        </html>
    );
}
