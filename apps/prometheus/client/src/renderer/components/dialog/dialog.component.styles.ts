import { createUseStyles } from 'react-jss';
import Colors from '@resolut/colors';
import { Transform, Position, Cursor, $, Overflow, Margin, BoxShadow, Padding } from '@css-properties/react';

const useDialogStyles = createUseStyles({
    dialog: {
        borderRadius: (0.5).rem(),
        overflow: Overflow.hidden,
        padding: Padding((1).rem(), (1.5).rem()),
        position: Position.fixed,
        boxShadow: BoxShadow((1).px(), (1).px(), (4).px(), (1).px(), Colors.black12),
        minWidth: (600).px(),
        left: (50).percentage(),
        top: (50).percentage(),
        transform: Transform.translate((-50).percentage(), (-50).percentage()),
        backgroundColor: Colors.white,
        [$.backdrop]: {
            backgroundColor: Colors.black26,
        },
    },
    header: {
        position: Position.relative,
        width: (100).percentage(),
        fontFamily: 'Open Sans',
        margin: Margin.bottom((1).rem()),
    },
    title: {
        fontSize: (1.5).rem(),
    },
    description: {},
    close: {
        cursor: Cursor.pointer,
        position: Position.absolute,
        right: 0,
        top: 0,
    },
});

export default useDialogStyles;
