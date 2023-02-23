import { Colors } from '@virketrang/colors';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    logo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: Colors.white,
    },
    title: {
        fontSize: '1.5rem',
    },
    subtitle: {
        textTransform: 'uppercase',
        margin: '0.25rem 0 0 0',
    },
});

export default useStyles;
