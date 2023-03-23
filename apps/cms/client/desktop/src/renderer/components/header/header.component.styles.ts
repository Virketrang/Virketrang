import Colors from '@virketrang/colors';
import { AlignItems, BoxShadow, Display, Padding } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useHeaderStyles = createUseStyles({
    header: {
        backgroundColor: '#03476c',
        width: (100).percentage(),
        height: (3).rem(),
        boxShadow: BoxShadow(0, 0, (1).px(), (1).px(), Colors.black12),
        padding: Padding(0, (8.75).rem()),
        display: Display.flex,
        alignItems: AlignItems.center,
    },
    business: { fontSize: (1).rem(), color: Colors.white },
});

export default useHeaderStyles;
