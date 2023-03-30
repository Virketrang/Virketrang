import Colors from '@resolut/colors';
import { Border, TextAlign, Padding, $, Display } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useTableBodyStyles = createUseStyles({
    row: {
        display: Display.table,
        width: (100.0).percentage(),
        textAlign: TextAlign.left,

        padding: Padding((1.0).rem(), 0),
        borderBottom: Border((1.0).px(), Border.solid, Colors.grey[200]),
    },
    td: {
        [$.lastChild]: {
            textAlign: TextAlign.right,
        },
    },
    button: {
        color: Colors.blueAccent[700],
    },
});

export default useTableBodyStyles;
