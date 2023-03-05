import Colors from '@virketrang/colors';
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
} from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useAddProductStyles = createUseStyles({
    group: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Open Sans',
    },
    label: {
        fontWeight: '600',
        marginBottom: '0.25rem',
    },
    input: {
        lineHeight: (1.5).rem(),
        borderRadius: '0.35rem',
        padding: '0.5rem 1rem',
        fontSize: '0.9rem',
        border: '1px solid #CDD9ED',
        transition: 'border .3s ease',
    },
    form: {
        display: Display.grid,
        gap: '0.5rem',
    },
    double: {},
    file: {
        opacity: 0,
        position: Position.absolute,
        width: '100%',
        height: '100%',
    },
    fileLabel: {
        position: Position.relative,
        border: Border('1px', Border.dashed, '#e0e0e0'),
        borderRadius: '6px',
        minHeight: '200px',
        display: Display.flex,
        alignItems: AlignItems.center,
        justifyContent: JustifyContent.center,
        padding: '48px',
        textAlign: TextAlign.center,
    },
    dropzone: {
        display: Display.block,
        fontWeight: FontWeight.semiBold,
        color: '#07074d',
        fontSize: '20px',
        marginBottom: '8px',
    },
    or: {
        fontWeight: FontWeight.medium,
        fontSize: '16px',
        color: '#6b7280',
        display: Display.block,
        marginBottom: '8px',
    },
    browse: {
        fontWeight: FontWeight.medium,
        fontSize: '16px',
        color: '#07074d',
        display: Display.inlineBlock,
        padding: Padding('8px', '28px'),
        border: Border('1px', Border.solid, '#e0e0e0'),
        borderRadius: '4px',
    },
    filelist: {
        borderRadius: '6px',
        background: '#f5f7fb',
        padding: Padding('16px', '32px'),
    },
    fileitem: {
        display: Display.flex,
        alignItems: AlignItems.center,
        justifyContent: JustifyContent.spaceBetween,
    },
    filebutton: {
        color: '#07074d',
        border: Border.none,
        background: Colors.transparent,
        cursor: Cursor.pointer,
    },
    filename: {
        fontWeight: FontWeight.medium,
        fontSize: '16px',
        color: '#07074d',
        paddingRight: '12px',
    },
    cta: {
        display: Display.flex,
        gap: '1rem',
        margin: Margin('0.5rem', 0, 0, 0),
        color: Colors.white,
    },
    delete: {
        width: '50%',
        background: Colors.red[400],
        height: '2.5rem',
        borderRadius: '0.5rem',
        fontSize: '1.0rem',
        fontWeight: FontWeight.semiBold,
        fontFamily: 'Roboto',
    },
    add: {
        width: '50%',
        background: '#7939ee',
        height: '2.5rem',
        borderRadius: '0.5rem',
        fontSize: '1.0rem',
        fontWeight: FontWeight.semiBold,
        fontFamily: 'Roboto',
    },
});

export default useAddProductStyles;
