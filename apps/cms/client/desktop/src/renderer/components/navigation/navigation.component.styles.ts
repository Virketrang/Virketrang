import { $, AlignItems, Display, FontWeight } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useNavigationStyles = createUseStyles({
    navigation: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '2.5rem',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
        padding: '0 8rem',
        display: Display.flex,
        alignItems: AlignItems.center,
        gap: '0.5rem',
        fontSize: '0.9rem',
        fontWeight: FontWeight.regular,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "Ubuntu"',
    },
    anchor: {
        padding: '0.25rem 0.75rem',
        borderRadius: '0.75rem',
        transition: 'background 100ms',
        [$.hover]: {
            backgroundColor: 'rgb(26,27,37,0.1)',
        },
        [$.classes('active')]: {
            color: '#ffffff',
            backgroundColor: '#625afa',
        },
    },
});

export default useNavigationStyles;
