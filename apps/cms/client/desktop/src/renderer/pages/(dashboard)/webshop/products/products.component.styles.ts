import { Display } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useProductsStyles = createUseStyles({
    one: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    two: {
        display: 'flex',
        gap: '2rem',
        borderBottom: '1px solid #f5f5f5',
        padding: '1rem 0 0.4rem 0',
    },
    menuButton: {
        padding: '0.75em 0.75em',
        fontWeight: 600,
        color: '#ffffff',
        borderRadius: '0.35em',
        backgroundColor: '#625afa',
    },
    available: {
        color: '#a4a6ab',
    },
    title: {
        fontSize: '1.5rem',
    },
});

export default useProductsStyles;
