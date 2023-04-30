import { memo } from 'react';

import { AppRightToolbar, AppLeftToolbar, AppLogo } from '..';

import { Header } from '@resolut/server';

import AppHeaderComponent from './app-header.component.types';

const AppHeader: AppHeaderComponent = memo(({}) => {
    return (
        <Header backgroundColor="#08244b" height="6rem" inset="size-fluid-3">
            <AppLeftToolbar />
            <AppLogo />
            <AppRightToolbar />
        </Header>
    );
});

export default memo(AppHeader);
