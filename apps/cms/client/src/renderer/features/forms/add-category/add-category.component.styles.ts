import { Margin } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useAddCategoryStyles = createUseStyles({
    add: {
        fontFamily: 'Roboto',
        margin: Margin.top((1.5).rem()),
    },
});

export default useAddCategoryStyles;
