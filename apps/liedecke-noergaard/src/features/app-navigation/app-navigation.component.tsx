import Link from 'next/link';

import { Navigation } from '@components';

import AppNavigationComponent from './app-navigation.component.types';
import { memo } from 'react';

const AppNavigation: AppNavigationComponent = () => {
    return (
        <Navigation>
            <Link href="/offers">Tilbud</Link>
            <Link href="/confecture">Konfekture</Link>
            <Link href="/utensils">Husgeråd</Link>
            <Link href="/cider">Cider</Link>
            <Link href="/recipes">Opskrifter</Link>
        </Navigation>
    );
};

export default memo(AppNavigation);
