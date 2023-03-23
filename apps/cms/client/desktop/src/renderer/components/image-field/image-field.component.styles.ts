import Colors from '@virketrang/colors';
import {
    $,
    Cursor,
    Visibility,
    Position,
    Display,
    JustifyContent,
    Border,
    Padding,
    OutlineStyle,
    BoxSizing,
    AlignItems,
    Margin,
} from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useImageFieldStyles = createUseStyles({
    area: {
        display: Display.flex,
        justifyContent: JustifyContent.center,
    },
    upload: {
        border: Border((2.0).px(), Border.dashed, Colors.blue[400]),
        position: Position.relative,
        height: (300.0).px(),
        width: (300.0).px(),
        borderRadius: (15.0).px(),
        display: Display.flex,
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center,
    },
    input: {
        position: Position.absolute,
        inset: 0,
        opacity: 0,
        cursor: Cursor.pointer,
        [$.focus]: {
            outline: OutlineStyle.none,
        },
        [$.fileUploadButton]: {
            visibility: Visibility.hidden,
        },
    },
    dropTitle: {
        textAlign: 'center',
    },
    preview: {
        display: Display.block,
        width: (100.0).percentage(),
        height: (100.0).percentage(),
    },
    files: {
        width: (100.0).percentage(),
        height: (100.0).px(),
        margin: Margin.top((10.0).px()),
    },
    file: { width: (100.0).px(), height: (100.0).px(), margin: Margin(0, (10.0).px()) },
});

export default useImageFieldStyles;
