import { Display, FlexDirection, FontWeight, TimingFunction, Transition, Padding, Border } from '@css-properties/react';
import { createUseStyles } from 'react-jss';

const useFieldStyles = createUseStyles({
    group: {
        display: Display.flex,
        flexDirection: FlexDirection.column,
        fontFamily: 'Open Sans',
        width: (100.0).percentage(),
    },
    label: {
        fontWeight: FontWeight.bold,
        marginBottom: (0.25).rem(),
    },
    input: {
        lineHeight: (1.5).rem(),
        borderRadius: (0.35).rem(),
        padding: Padding((0.5).rem(), (1).rem()),
        fontSize: (0.9).rem(),
        border: Border((1).px(), Border.solid, '#CDD9ED'),
        transition: Transition('border', (0.3).s(), TimingFunction.ease, 0),
    },
});

export default useFieldStyles;
