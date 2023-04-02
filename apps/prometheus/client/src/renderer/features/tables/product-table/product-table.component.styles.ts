import { Margin } from '@css-properties/react';
import { createUseStyles } from 'react-jss';

const useProductTableStyles = createUseStyles({
    table: {
        margin: Margin.top((1.0).rem()),
    },
});

export default useProductTableStyles;
