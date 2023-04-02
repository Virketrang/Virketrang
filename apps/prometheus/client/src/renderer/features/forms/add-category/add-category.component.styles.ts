import { Margin } from '@css-properties/react';
import { createUseStyles } from 'react-jss';

const useAddCategoryStyles = createUseStyles({
    add: {
        fontFamily: 'Roboto',
        margin: Margin.top((1.5).rem()),
    },
});

export default useAddCategoryStyles;
