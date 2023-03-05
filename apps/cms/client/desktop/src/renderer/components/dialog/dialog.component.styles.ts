import { createUseStyles } from 'react-jss';
import Colors from '@virketrang/colors';
import { Transform, Position, Cursor, $ } from '@virketrang/jss';

const useDialogStyles = createUseStyles({
    dialog: {
        borderRadius: '0.5rem',
        overflow: 'hidden',
        padding: '1rem',
        position: Position.fixed,
        boxShadow: '1px 1px 4px 1px rgba(0, 0, 0, 0.1)',
        minWidth: '600px',
        left: '50%',
        top: '50%',
        transform: Transform.translate('-50%', '-50%'),
        backgroundColor: Colors.white,
        [$.backdrop]: {
            backgroundColor: Colors.black26,
        },
    },
    header: {
        position: Position.relative,
        width: '100%',
        fontFamily: 'Open Sans',
        marginBottom: '1rem',
    },
    title: {
        fontSize: '1.5rem',
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
