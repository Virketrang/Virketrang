import { createUseStyles } from 'react-jss';
import { Colors } from '@virketrang/colors';

const useStyles = createUseStyles({
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '6rem',
        backgroundColor: Colors.amber[400],
    },
});

export default useStyles;
