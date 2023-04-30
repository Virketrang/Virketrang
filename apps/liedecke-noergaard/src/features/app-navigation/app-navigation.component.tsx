import Link from 'next/link';
import { memo } from 'react';

import AppNavigationComponent from './app-navigation.component.types';
import styles from './app-navigation.component.module.sass';

import { Header } from '@resolut/server';

const AppNavigation: AppNavigationComponent = memo(() => {
    return (
        <Header gap="2.5rem" horizontalAlignment="center" className={styles.navigation}>
            <Link href="/offers">Tilbud</Link>
            <Link href="/confecture">Konfekture</Link>
            <Link href="/utensils">Husgeråd</Link>
            <Link href="/cider">Cider</Link>
            <Link href="/recipes">Opskrifter</Link>
        </Header>
    );
});

export default AppNavigation;
