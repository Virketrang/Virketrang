import { $, calc, Position } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useListStyles = createUseStyles({
    list: { width: '100%' },
    title: { padding: '0 0 0.5rem 0' },
    item: {
        fontSize: '0.9rem',
        margin: '1rem 0 0 0.75rem',
        position: Position.relative,
        [$.before]: {
            content: "''",
            backgroundColor: '#f5f5f5',
            width: '1px',
            height: calc('100% + 1rem'),
            position: Position.absolute,
            left: '-0.75rem',
            bottom: '-0.375rem',
        },
        [$.hover]: {
            color: '#625afa',
            [$.after]: {
                content: "''",
                backgroundColor: '#625afa',
                width: '1px',
                height: calc('100%'),
                position: Position.absolute,
                left: '-0.75rem',
            },
        },
    },
});

export default useListStyles;
