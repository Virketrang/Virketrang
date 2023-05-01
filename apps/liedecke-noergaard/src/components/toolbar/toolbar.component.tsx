import { memo } from 'react';

import ToolbarComponent from './toolbar.component.types';
import styles from './toolbar.component.module.sass';

const Toolbar: ToolbarComponent = memo(({ children }) => {
    return <div className={styles.toolbar}>{children}</div>;
});

Toolbar.displayName = 'Toolbar';

export default Toolbar;
