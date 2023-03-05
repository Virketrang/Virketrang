import { AlignItems, Display } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useHeaderStyles = createUseStyles({
    header: {
        backgroundColor: '#03476c',
        width: '100%',
        height: '3rem',
        boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.1)',
        padding: '0 8.75rem',
        display: Display.flex,
        alignItems: AlignItems.center,
    },
    business: { fontSize: '1rem', color: '#ffffff' },
});

export default useHeaderStyles;
