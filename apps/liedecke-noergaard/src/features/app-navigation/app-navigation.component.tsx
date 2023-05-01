import Link from 'next/link';
import { memo } from 'react';

import AppNavigationComponent from './app-navigation.component.types';
import styles from './app-navigation.component.module.sass';

import { Header } from '@resolut/server';

const AppNavigation: AppNavigationComponent = memo(({ navigation }) => {
    return (
        <Header gap="2.5rem" horizontalAlignment="center" className={styles.navigation}>
            <Link href="/offers">{navigation.offers}</Link>
            <Link href="/confecture">{navigation.confecture}</Link>
            <Link href="/utensils">{navigation.utencils}</Link>
            <Link href="/cider">{navigation.cider}</Link>
            <Link href="/recipes">{navigation.recipes}</Link>
        </Header>
    );
});

AppNavigation.displayName = 'AppNavigation';

export default AppNavigation;
