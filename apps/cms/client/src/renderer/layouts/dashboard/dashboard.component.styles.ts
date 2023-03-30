import { Display } from '@virketrang/jss';
import { createUseStyles } from 'react-jss';

const useDashboardStyles = createUseStyles({
    layout: { display: Display.flex },
    content: { margin: '4rem 8rem 4rem 4rem', width: '100%' },
});

export default useDashboardStyles;
