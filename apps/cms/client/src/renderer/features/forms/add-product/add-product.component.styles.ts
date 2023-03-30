import Colors from '@resolut/colors';
import {
    Display,
    FontWeight,
    JustifyContent,
    Position,
    AlignItems,
    TextAlign,
    Cursor,
    Border,
    Padding,
    Margin,
    FlexDirection,
    Transition,
    TimingFunction,
    Visibility,
    $,
} from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useAddProductStyles = createUseStyles({
    form: {
        display: Display.grid,
        gap: (0.5).rem(),
    },
    double: {
        display: Display.flex,
        flexDirection: FlexDirection.row,
        width: (100.0).percentage(),
        gap: (1.0).rem(),
    },
    cta: {
        display: Display.flex,
        gap: (1).rem(),
        margin: Margin.top((0.5).rem()),
        color: Colors.white,
    },
    delete: {
        width: (100).percentage(),
        background: Colors.red[400],
        height: (2.5).rem(),
        borderRadius: (0.5).rem(),
        fontSize: (1).rem(),
        fontWeight: FontWeight.semiBold,
        fontFamily: 'Roboto',
    },
    add: {
        width: (100).percentage(),
        background: '#7939ee',
        height: (2.5).rem(),
        borderRadius: (0.5).rem(),
        fontSize: (1).rem(),
        fontWeight: FontWeight.semiBold,
        fontFamily: 'Roboto',
    },
});

export default useAddProductStyles;
