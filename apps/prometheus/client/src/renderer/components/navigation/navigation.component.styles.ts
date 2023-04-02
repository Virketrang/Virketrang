import Colors from '@resolut/colors';
import {
    $,
    AlignItems,
    BoxShadow,
    CSSProperty,
    Display,
    FontWeight,
    Padding,
    TimingFunction,
    Transition,
} from '@css-properties/react';
import { createUseStyles } from 'react-jss';

const useNavigationStyles = createUseStyles({
    navigation: {
        backgroundColor: '#ffffff',
        width: (100.0).percentage(),
        height: (2.5).rem(),
        boxShadow: BoxShadow(0, 0, (1).px(), (1).px(), Colors.black12),
        padding: Padding(0, (8).rem()),
        display: Display.flex,
        alignItems: AlignItems.center,
        gap: (0.5).rem(),
        fontSize: (0.9).rem(),
        fontWeight: FontWeight.regular,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "Ubuntu"',
    },
    anchor: {
        padding: Padding((0.25).rem(), (0.75).rem()),
        borderRadius: (0.75).rem(),
        transition: Transition(CSSProperty.background, (100).ms(), TimingFunction.linear, 0),
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
