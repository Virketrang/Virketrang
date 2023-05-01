import { FunctionComponent } from 'react';

type AppNavigationComponent = FunctionComponent<{
    navigation: {
        offers: string;
        confecture: string;
        utencils: string;
        cider: string;
        recipes: string;
    };
}>;

export default AppNavigationComponent;
