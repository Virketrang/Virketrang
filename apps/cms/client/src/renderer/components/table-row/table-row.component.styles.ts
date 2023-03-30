import Colors from '@resolut/colors';
import { Border, TextAlign, Padding } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useTableRowStyles = createUseStyles({
    row: {
        width: (100.0).percentage(),
        textAlign: TextAlign.left,

        padding: Padding((1.0).rem(), 0),
        borderBottom: Border((1.0).px(), Border.solid, Colors.grey[200]),
    },
});

export default useTableRowStyles;
