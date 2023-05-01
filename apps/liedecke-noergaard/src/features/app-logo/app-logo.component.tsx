import { memo } from 'react';

import { Flex, Typography } from '@resolut/server';

import AppLogoComponent from './app-logo.component.types';

const AppLogo: AppLogoComponent = memo(({}) => {
    return (
        <Flex direction="column" color="#ffffff" container>
            <Typography variant="body1" element="h1" transform="capitalize" fluid container>
                Liedecke & Noergaard
            </Typography>
            <Typography variant="body2" fluid container>
                Handelskompagni
            </Typography>
        </Flex>
    );
});

AppLogo.displayName = 'AppLogo';

export default AppLogo;
