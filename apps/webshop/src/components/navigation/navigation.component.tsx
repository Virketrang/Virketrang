import NavigationComponent from './navigation.component.types';
import styles from './navigation.component.module.sass';

const Navigation: NavigationComponent = ({ children }) => {
    return <nav className={styles.navigation}>{children}</nav>;
};

export default Navigation;
