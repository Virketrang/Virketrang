import { createUseStyles } from 'react-jss';
import { FontWeight, Padding } from '@css-properties/react';

const useSelectStyles = createUseStyles({
    select: {
        width: (100.0).percentage(),
        lineHeight: (1.5).rem(),
        borderRadius: (0.35).rem(),
        padding: Padding((0.5).rem(), 0),

        fontSize: (0.9).rem(),
    },
    label: {
        fontWeight: FontWeight.bold,
        marginBottom: (0.25).rem(),
    },
});

export default useSelectStyles;
