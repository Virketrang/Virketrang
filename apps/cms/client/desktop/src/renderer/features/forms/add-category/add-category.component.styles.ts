import Colors from '@virketrang/colors';
import { FontWeight, Margin } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useAddCategoryStyles = createUseStyles({
    add: {
        width: (100).percentage(),
        background: '#7939ee',
        height: (2.5).rem(),
        borderRadius: (0.5).rem(),
        fontSize: (1).rem(),
        fontWeight: FontWeight.semiBold,
        fontFamily: 'Roboto',
        color: Colors.white,
        margin: Margin.top((1.5).rem()),
    },
});

export default useAddCategoryStyles;
