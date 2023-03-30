import Colors from '@resolut/colors';
import { Display, JustifyContent, Border, Padding, FontWeight, Margin } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useCategoriesStyles = createUseStyles({
    one: {
        display: Display.flex,
        justifyContent: JustifyContent.spaceBetween,
    },
    two: {
        display: Display.flex,
        gap: (2.0).rem(),
        borderBottom: Border((1.0).px(), Border.solid, '#f5f5f5'),
        padding: Padding((1.0).rem(), 0, (0.4).rem(), 0),
    },
    menuButton: {
        padding: Padding((0.75).em(), (0.75).em()),
        fontWeight: FontWeight.bold,
        color: Colors.white,
        borderRadius: (0.35).em(),
        backgroundColor: '#625afa',
    },
    title: {
        fontSize: (1.5).rem(),
    },
});

export default useCategoriesStyles;
