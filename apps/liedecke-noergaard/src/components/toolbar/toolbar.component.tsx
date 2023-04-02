import ToolbarComponent from './toolbar.component.types';
import styles from './toolbar.component.module.sass';

const Toolbar: ToolbarComponent = ({ children }) => {
    return <div className={styles.toolbar}>{children}</div>;
};

export default Toolbar;
