import Colors from '@virketrang/colors';
import { Border, Padding, TextAlign, $, Display } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useTableHeadStyles = createUseStyles({
    tableHead: {
        width: (100.0).percentage(),
    },
    tableRow: {
        textAlign: TextAlign.left,
        display: Display.table,
        width: (100.0).percentage(),
        padding: Padding.bottom((1.0).rem()),
        borderBottom: Border((1.0).px(), Border.solid, Colors.grey[300]),
    },
    tableTitle: {
        [$.lastChild]: {
            textAlign: TextAlign.right,
        },
    },
});

export default useTableHeadStyles;
