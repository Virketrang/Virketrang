import { $, calc, Margin, Padding, Position } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useListStyles = createUseStyles({
    list: { width: (100.0).percentage() },
    title: { padding: Padding(0, 0, (0.5).rem(), 0) },
    item: {
        fontSize: (0.9).rem(),
        margin: Margin((1.0).rem(), 0, 0, (0.75).rem()),
        position: Position.relative,
        [$.before]: {
            content: "''",
            backgroundColor: '#f5f5f5',
            width: (1.0).px(),
            height: calc((100.0).percentage() + (1.0).rem()),
            position: Position.absolute,
            left: -(0.75).rem(),
            bottom: -(0.375).rem(),
        },
        [$.hover]: {
            color: '#625afa',
            [$.after]: {
                content: "''",
                backgroundColor: '#625afa',
                width: (1.0).px(),
                height: calc((-100.0).percentage()),
                position: Position.absolute,
                left: -(0.75).rem(),
            },
        },
    },
});

export default useListStyles;
