import { memo } from 'react';

import { Button } from '@resolut/server';

import { Toolbar } from '@components';
import { Search } from '@icons';

import AppLeftToolbarComponent from './app-left-toolbar.component.types';

const AppLeftToolbar: AppLeftToolbarComponent = memo(() => {
    return (
        <Toolbar>
            <Button backgroundColor="transparent" icon={<Search />} />
        </Toolbar>
    );
});

AppLeftToolbar.displayName = 'AppLeftToolbar';

export default AppLeftToolbar;
