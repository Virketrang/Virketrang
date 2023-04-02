import { Margin } from '@css-properties/react';
import { createUseStyles } from 'react-jss';

const useSidebarStyles = createUseStyles({
    sidebar: {
        height: (100).percentage(),
        width: (10).rem(),
        margin: Margin((4.0).rem(), (4.0).rem(), (4.0).rem(), (8.0).rem()),
    },
});

export default useSidebarStyles;
